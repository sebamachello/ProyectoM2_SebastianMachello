
const pool = require('../db/config');

const getAllAuthors = async () => {
const result = await pool.query('SELECT * FROM authors');
return result.rows;
};


const getAuthorById = async (id) => {
    const result = await pool.query('SELECT * FROM authors WHERE id = $1', [id]);
    return result.rows[0];
};

const postAuthor = async (author) => {
    const { name, email } = author;
    const result = await pool.query('INSERT INTO authors (name, email) VALUES ($1, $2) RETURNING *', [name, email]);
    return result.rows[0];
};

const putAuthor = async (id, author) => {
    const { name, email } = author;
    const result = await pool.query('UPDATE authors SET name = $1, email = $2 WHERE id = $3 RETURNING *', [name, email, id]);
    return result.rows[0];
};

const deleteAuthor = async (id) => {
    const result = await pool.query('DELETE FROM authors WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
};

module.exports = {
    getAllAuthors,
    getAuthorById,
    postAuthor,
    putAuthor,
    deleteAuthor
};