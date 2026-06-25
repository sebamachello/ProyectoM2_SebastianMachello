const { getAllPosts, getPostById, createPost, putPost, deletePost } = require('../services/postsService');

const getAllPostsController = async (req, res) => {
    try {
        const posts = await getAllPosts();
        res.json(posts);
    } catch (error) {
        console.error("Error al obtener los posts:", error);
        res.status(500).json({ message: error.message });
    }
};

const getPostByIdController = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await getPostById(id);
        if (!post) {
            return res.status(404).json({ message: "Post no encontrado" });
        }
        res.json(post);
    } catch (error) {
        console.error("Error al obtener el post:", error);
        res.status(500).json({ message: error.message });
    }
};

const createPostController = async (req, res) => {
    const { title, content, author_id } = req.body;
    if (!title || !content || !author_id) {
        return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }
    try {
        const newPost = await createPost({ title, content, author_id });
        res.status(201).json(newPost);
    } catch (error) {
        console.error("Error al crear el post:", error);
        res.status(500).json({ message: error.message });
    }
};

const updatePostController = async (req, res) => {
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
        console.error("Error al actualizar el post:", error);
        res.status(500).json({ message: error.message });
    }
};

const deletePostController = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ message: "ID del post es obligatorio" });
    }
    try {
        const deletedPost = await deletePost(id);
        if (!deletedPost) {
            return res.status(404).json({ message: "Post no encontrado" });
        }
        res.json(deletedPost);
    } catch (error) {
        console.error("Error al eliminar el post:", error);
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllPostsController,
    getPostByIdController,
    createPostController,
    updatePostController,
    deletePostController
};
