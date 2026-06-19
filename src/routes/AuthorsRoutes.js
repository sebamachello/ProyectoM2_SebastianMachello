const express = require('express');
const router = express.Router();
const { getAllAuthors } = require('../services/authorsService');

router.get("/", async (req, res) => {
    try {
    const authors = await getAllAuthors();
    res.json(authors);

    } catch (error) {
        console.error("Error al obtener los autores:", error);
        res.status(500).json({ error: "Error al obtener los autores" });
    }


});

module.exports = router;