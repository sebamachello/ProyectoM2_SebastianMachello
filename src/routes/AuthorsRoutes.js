const express = require('express');
const router = express.Router();
const { getAllAuthorsController,
    getAuthorByIdController,
    postAuthorController } = require('../controllers/authorsController');
router.post('/', postAuthorController);

router.get('/', getAllAuthorsController);
router.get('/:id', getAuthorByIdController);

module.exports = router;












