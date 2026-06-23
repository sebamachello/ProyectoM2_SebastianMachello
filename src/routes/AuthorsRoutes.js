const express = require('express');
const router = express.Router();
const { getAllAuthorsController } = require('../controllers/authorsController');
const { getAuthorByIdController } = require('../controllers/authorsController');


router.get('/', getAllAuthorsController);
router.get('/:id', getAuthorByIdController);

module.exports = router;












