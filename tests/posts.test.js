const request = require("supertest");
const app = require("../src/app");
const pool = require("../src/db/config");

describe("Posts endpoints", () => {
  test("GET /posts debe devolver status 200 y un array", async () => {
    const response = await request(app).get("/posts");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("GET /posts/:id debe devolver un post existente", async () => {
    const response = await request(app).get("/posts/1");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id", 1);
    expect(response.body).toHaveProperty("title");
    expect(response.body).toHaveProperty("content");
    expect(response.body).toHaveProperty("author_id");
  });

  test("POST /posts debe crear un nuevo post", async () => {
    const response = await request(app)
      .post("/posts")
      .send({
        title: "Nuevo Post",
        content: "Contenido del nuevo post",
        author_id: 1,
      });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.title).toBe("Nuevo Post");
    expect(response.body.content).toBe("Contenido del nuevo post");
    expect(response.body.author_id).toBe(1);
  });

  test("POST /posts debe devolver 400 si faltan datos", async () => {
    const response = await request(app)
      .post("/posts")
      .send({ title: "Post Incompleto" }); // Falta el content y author_id

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message");
    expect(response.body.message).toBe("Todos los campos son obligatorios");
  });
});

afterAll(async () => {
  await pool.end(); // Cierra la conexión a la base de datos después de todas las pruebas
});
