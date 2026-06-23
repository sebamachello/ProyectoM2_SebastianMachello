
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


module.exports = {
    getAllAuthors,
    getAuthorById,
    postAuthor
};