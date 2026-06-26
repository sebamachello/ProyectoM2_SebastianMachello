const { getAllPosts, getPostById, createPost, putPost, deletePost } = require('../services/postsService');

const getAllPostsController = async (req, res, next) => {
    try {
        const posts = await getAllPosts();
        res.json(posts);
    } catch (error) {
        next(error); // Pasar el error al middleware de manejo de errores
    }
};

const getPostByIdController = async (req, res, next) => {
    const { id } = req.params;
    try {
        const post = await getPostById(id);
        if (!post) {
            return res.status(404).json({ message: "Post no encontrado" });
        }
        res.json(post);
    } catch (error) {
        next(error); // Pasar el error al middleware de manejo de errores
    }
};

const createPostController = async (req, res, next) => {
    const { title, content, author_id } = req.body;
    if (!title || !content || !author_id) {
        return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }
    try {
        const newPost = await createPost({ title, content, author_id });
        res.status(201).json(newPost);
    } catch (error) {
        next(error); // Pasar el error al middleware de manejo de errores
    }
};

const updatePostController = async (req, res, next) => {
    const { id } = req.params;
    const { title, content, author_id } = req.body;

    if (!title || !content || !author_id) {
        return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    try {
        const updatedPost = await putPost(id, { title, content, author_id });
        if (!updatedPost) {
            return res.status(404).json({ message: "Post no encontrado" });
        }
        res.json(updatedPost);
    } catch (error) {
        next(error); // Pasar el error al middleware de manejo de errores
    }
};

const deletePostController = async (req, res, next) => {
    const { id } = req.params;

    try {
        const deletedPost = await deletePost(id);

        if (!deletedPost) {
            return res.status(404).json({ message: "Post no encontrado" });
        }

        res.json(deletedPost);
    } catch (error) {
        next(error); // Pasar el error al middleware de manejo de errores
    }
};

module.exports = {
    getAllPostsController,
    getPostByIdController,
    createPostController,
    updatePostController,
    deletePostController
};
