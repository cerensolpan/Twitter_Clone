const express = require('express');
const router = express.Router();
const auth = require('../config/auth');
const tweetController = require('../controllers/tweet-controller');

router.get('/get/:id', auth.optional, tweetController.tweet_id);
router.get('/all', auth.optional, tweetController.tweet_all);
router.post('/add', auth.optional, tweetController.tweet_add);
router.post('/delete', auth.optional, tweetController.tweet_delete);
router.post('/like', auth.optional, tweetController.tweet_like);
router.post('/like/delete', auth.optional, tweetController.tweet_likedelete);
router.post('/comment', auth.optional, tweetController.tweet_comment);
router.post('/comment/delete', auth.optional, tweetController.tweet_commentdelete);

module.exports = router