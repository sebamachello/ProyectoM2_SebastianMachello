# MiniBlog API

## Descripción

MiniBlog API es una API REST desarrollada con Node.js, Express y PostgreSQL como proyecto integrador del módulo Backend de Henry.

La aplicación permite gestionar autores y publicaciones mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar), implementando una arquitectura organizada en rutas, controladores, servicios y middlewares.

---

## Tecnologías utilizadas

- Node.js
- Express
- PostgreSQL
- pg
- Jest
- Supertest
- Dotenv
- Git
- GitHub

---

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/sebamachello/ProyectoM2_SebastianMachello.git
```

2. Ingresar al proyecto:

```bash
cd ProyectoM2_SebastianMachello
```

3. Instalar las dependencias:

```bash
npm install
```

4. Crear un archivo `.env` utilizando como referencia el archivo `.env.example`.

Ejemplo:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=miniblog_db
DB_USER=miniblog_user
DB_PASSWORD=your_password
PORT=3000
```

---

## Configuración de la base de datos

1. Crear una base de datos llamada **miniblog_db**.

2. Ejecutar el script de creación de tablas:

```bash
\i src/db/setup.sql
```

3. Ejecutar el script para cargar los datos iniciales:

```bash
\i src/db/seed.sql
```

## Scripts disponibles

Iniciar la aplicación:

```bash
npm start
```

Modo desarrollo:

```bash
npm run dev
```

Ejecutar los tests:

```bash
npm test
```

---

## Endpoints

### Authors

- GET /authors
- GET /authors/:id
- POST /authors
- PUT /authors/:id
- DELETE /authors/:id

### Posts

- GET /posts
- GET /posts/:id
- GET /posts/author/:authorId
- POST /posts
- PUT /posts/:id
- DELETE /posts/:id

---

## Documentación OpenAPI

La documentación de la API se encuentra en el archivo:

```text
openapi.yaml
```

---

## Variables de entorno

El proyecto utiliza las siguientes variables:

- DB_HOST
- DB_PORT
- DB_NAME
- DB_USER
- DB_PASSWORD
- PORT

---

## Testing

Los tests fueron desarrollados utilizando Jest y Supertest para verificar el correcto funcionamiento de los principales endpoints y sus respuestas HTTP.

---

## Deploy

El proyecto está preparado para desplegarse en Railway.

**URL de la aplicación:** _(Completar luego del deploy.)_

---

## Autor

**Sebastián Machello**

Proyecto desarrollado como parte del programa **Desarrollo Full Stack** de Henry.
