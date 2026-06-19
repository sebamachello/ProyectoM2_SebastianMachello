const pool = require('../db/config');

const getAllPosts = async () => {
    const result = await pool.query('SELECT * FROM posts');
    return result.rows;
};

module.exports = {
    getAllPosts,
};