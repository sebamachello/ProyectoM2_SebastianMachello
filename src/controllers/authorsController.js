const { getAllAuthors, getAuthorById, deleteAuthor, postAuthor, putAuthor } = require('../services/authorsService'); 

const getAllAuthorsController = async (req, res, next) => {
    try {
        const authors = await getAllAuthors();
        res.json(authors);
    } catch (error) {
        next(error); // Pasar el error al middleware de manejo de errores
    }

};

const getAuthorByIdController = async (req, res, next) => {
    const { id } = req.params;
    try {
        const author = await getAuthorById(id);
        if (!author) {
            return res.status(404).json({ error: "Autor no encontrado" });
        }
        res.json(author);
    } catch (error) {
        next(error); // Pasar el error al middleware de manejo de errores
    }
};

const postAuthorController = async (req, res, next) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: "Faltan datos obligatorios" });
    }
    try {
        const newAuthor = await postAuthor({ name, email });
        res.status(201).json(newAuthor);
    } catch (error) {
        next(error); // Pasar el error al middleware de manejo de errores
    }
};

const putAuthorController = async (req, res, next) => {
    const { id } = req.params;
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: "Faltan datos obligatorios" });
    }


    try {
        const updatedAuthor = await putAuthor(id, { name, email });
        if (!updatedAuthor) {
            return res.status(404).json({ error: "Autor no encontrado" });
        }
        res.json(updatedAuthor);
    } catch (error) {
        next(error); // Pasar el error al middleware de manejo de errores
    }
};

const deleteAuthorController = async (req, res, next) => {
    const { id } = req.params;

    try {
        const deletedAuthor = await deleteAuthor(id);
        
        if (!deletedAuthor) {
            return res.status(404).json({ error: "Autor no encontrado" });
        }
        res.json(deletedAuthor);
    } catch (error) {
        next(error); // Pasar el error al middleware de manejo de errores
    }
};

module.exports = {
    getAllAuthorsController,
    getAuthorByIdController,
    postAuthorController,
    putAuthorController,
    deleteAuthorController
};


