const express = require('express');
const router = express.Router();
const { getAllAuthorsController,
    getAuthorByIdController,
    putAuthorController,
    deleteAuthorController,
    postAuthorController } = require('../controllers/authorsController');


router.post('/', postAuthorController);
router.put('/:id', putAuthorController);
router.delete('/:id', deleteAuthorController);
router.get('/', getAllAuthorsController);
router.get('/:id', getAuthorByIdController);

module.exports = router;












