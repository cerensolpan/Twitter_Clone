const express = require('express');
const router = express.Router();

const tweetController = require('../controllers/tweet-controller');


router.get('/get/:id', tweetController.tweet_id);
router.get('/all', tweetController.tweet_all);
router.post('/add', tweetController.tweet_add);
router.post('/delete', tweetController.tweet_delete);
router.post('/like', tweetController.tweet_like);
router.post('/like/delete', tweetController.tweet_likedelete);
router.post('/comment', tweetController.tweet_comment);
router.post('/comment/delete', tweetController.tweet_commentdelete);

module.exports = router