const express = require('express');

const feedController = require('../controllers/feed');
const { postValidators } = require('../utils/validators');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

// GET /feed/posts
router.get('/posts', isAuth, feedController.getPosts);

// POST /feed/post
router.post('/post', isAuth, postValidators, feedController.createPost);

router.get('/posts/:postId', isAuth, feedController.getPost);

// PUT /feed/post/:postId
router.put('/post/:postId', isAuth, postValidators, feedController.updatePost);

// DELETE /feed/post/:postId
router.delete('/post/:postId', isAuth, feedController.deletePost);

module.exports = router;
