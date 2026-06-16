const express = require('express');
const router = express.Router();

router.get("/authors", (req, res) => {
    res.json({ message: "Ruta para obtener autores funcionando" });
});

module.exports = router; 