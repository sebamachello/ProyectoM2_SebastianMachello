const request = require('supertest');
const app = require('../src/app');
const pool = require('../src/db/config');

describe('Authors endpoints', () => {
    test('GET /authors debe devolver status 200 y un array', async () => {
        const response = await request(app).get('/authors');

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
test('GET /authors/:id debe devolver un autor existente', async () => {
    const response = await request(app).get('/authors/1');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('email');
});

test('GET /authors/:id debe devolver 404 si no existe', async () => {
    const response = await request(app).get('/authors/999999');

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error).toBe('Autor no encontrado');
    

});

});

test('POST /authors debe crear un nuevo autor', async () => {
    const email = `nuevoautor${Date.now()}@example.com`; // Generar un email único para evitar conflictos
    
    const response = await request(app)
        .post('/authors')
        .send({ name: 'Nuevo Autor', email });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe('Nuevo Autor');
    expect(response.body.email).toBe(email);
});

test('POST /authors debe devolver 400 si faltan datos', async () => {
    const response = await request(app)
        .post('/authors')
        .send({ name: 'Autor Incompleto' }); // Falta el email

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error).toBe('Faltan datos obligatorios');




});




afterAll(async () => {
    await pool.end();
});

