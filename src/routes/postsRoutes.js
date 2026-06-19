const express = require('express');
const router = express.Router();
const { getAllPosts } = require('../services/postsService');

router.get("/", async (req, res) => {
    try {
        const posts = await getAllPosts();
        res.json(posts);
    } catch (error) {
        console.error("Error al obtener los posts:", error);
        res.status(500).json({ error: "Error al obtener los posts" });
    }
});

module.exports = router;