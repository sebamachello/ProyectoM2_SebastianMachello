const { getAllAuthors, getAuthorById, postAuthor } = require('../services/authorsService'); 

const getAllAuthorsController = async (req, res) => {
    try {
        const authors = await getAllAuthors();
        res.json(authors);
    } catch (error) {
        console.error("Error al obtener los autores:", error);
        res.status(500).json({ error: "Error al obtener los autores" });
    }

};

const getAuthorByIdController = async (req, res) => {
    const { id } = req.params;
    try {
        const author = await getAuthorById(id);
        if (!author) {
            return res.status(404).json({ error: "Autor no encontrado" });
        }
        res.json(author);
    } catch (error) {
        console.error("Error al obtener el autor:", error);
        res.status(500).json({ error: "Error al obtener el autor" });
    }
};

const postAuthorController = async (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: "Faltan datos obligatorios" });
    }
    try {
        const newAuthor = await postAuthor({ name, email });
        res.status(201).json(newAuthor);
    } catch (error) {
        console.error("Error al crear el autor:", error);
        res.status(500).json({ error: "Error al crear el autor" });
    }
};

module.exports = {
    getAllAuthorsController,
    getAuthorByIdController,
    postAuthorController
};


