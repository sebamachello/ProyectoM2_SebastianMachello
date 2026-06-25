const pool = require('../db/config');

const getAllPosts = async () => {
    const result = await pool.query('SELECT * FROM posts');
    return result.rows;
};

const getPostById = async (id) => {
    const result = await pool.query('SELECT * FROM posts WHERE id = $1', [id]);
    return result.rows[0];
}

const createPost = async (posts) => {
    const { title, content, author_id } = posts;
    const result = await pool.query(
        'INSERT INTO posts (title, content, author_id) VALUES ($1, $2, $3) RETURNING *',
        [title, content, author_id]
    );
    return result.rows[0];
};

const putPost = async (id, posts) => {
    const { title, content, author_id } = posts;
    const result = await pool.query(
        'UPDATE posts SET title = $1, content = $2, author_id = $3 WHERE id = $4 RETURNING *',
        [title, content, author_id, id]
    );
    return result.rows[0];
};

const deletePost = async (id) => {
    const result = await pool.query('DELETE FROM posts WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
};

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    putPost,
    deletePost
};