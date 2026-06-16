const { loadEnvFile } = require("node:process");
loadEnvFile(".env");

const express = require('express');
const pool = require('./db/config');
const getAuthorsRoutes = require('./routes/getAuthorsRoutes');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})
