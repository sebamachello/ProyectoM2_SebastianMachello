const express = require('express');
const router = express.Router();
const { getAllPostsController,
     getPostByIdController,
     updatePostController,
     deletePostController,
     createPostController } = require('../controllers/postsController');

router.put('/:id', updatePostController);
router.post('/', createPostController);
router.delete('/:id', deletePostController);

router.get('/:id', getPostByIdController);

router.get('/', getAllPostsController);

module.exports = router;