const express = require('express');
const router = express.Router();
const { getAllPostsController,
     getPostByIdController,
     createPostController } = require('../controllers/postsController');


router.post('/', createPostController);

router.get('/:id', getPostByIdController);

router.get('/', getAllPostsController);

module.exports = router;