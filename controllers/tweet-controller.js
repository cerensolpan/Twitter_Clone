const TweetService = require("../services/tweet-service");
const LikesService = require("../services/likes-service");
const CommentsService = require("../services/comments-service");


const tweet_id = async (req, res) => {
    try {
        const tweet = await TweetService.find(req.params.id)
        res.status(200);
        res.send(tweet);
    } catch (err) {
        res.status(404);
        res.send({
            error: "Tweet-Get operation failed " + err
        });
    }
}

const tweet_all = async (req, res) => {
    try {
        const tweets = await TweetService.findAll()
        res.status(200);
        res.send(tweets);
    } catch (err) {
        res.status(404);
        res.send({
            error: "Tweet-all operation failed " + err
        });
    }
}

const tweet_add = async (req, res) => {
    try {
        const tweet = await TweetService.add(req.body)
        res.status(200);
        res.send(tweet);
    } catch (err) {
        res.status(404);
        res.send({
            error: "Tweet Add-Post operation failed " + err
        });
    }
}

const tweet_delete = async (req, res) => {
    try {
        const likes = await LikesService.findByParams({
            tweetid: req.body.tweetid
        });
        likes.forEach(item => LikesService.del(item.id));
        const comments = await CommentsService.findByParams({
            tweetid: req.body.tweetid
        });
        comments.forEach(item => CommentsService.del(item.id));
        await TweetService.del(req.body.tweetid);
        res.status(200);
        res.send(req.body);
    } catch (err) {
        res.status(404);
        res.send({
            error: "Tweet-Delete operation failed" + err
        });
    }
}

const tweet_like = async (req, res) => {
    try {
        const tweet = await TweetService.find(req.body.tweetid);
        if (!tweet) res.send({
            error: 'Tweet can not found'
        });
        const like = await TweetService.addLikes(tweet, req.body)
        res.status(200);
        res.send(like);
    } catch (err) {
        res.status(404);
        res.send({
            error: "Tweet Like-Post operation failed" + err
        });
    }
}

const tweet_likedelete = async (req, res) => {
    try {
        const likeId = await LikesService.findByParams({
            tweetid: req.body.tweetid,
            userid: req.body.userid
        });
        const tweet = await TweetService.find(req.body.tweetid);
        await TweetService.deleteLikes(tweet, likeId);
        res.status(200);
        res.send(likeId);
    } catch (err) {
        res.status(404);
        res.send({
            error: "Tweet Like-Delete operation failed" + err
        });
    }
}

const tweet_comment = async (req, res) => {
    try {
        const tweet = await TweetService.find(req.body.tweetid);
        if (!tweet) res.send({
            error: 'Tweet can not found'
        });
        const comment = await TweetService.addComments(tweet, req.body);
        res.status(200);
        res.send(comment);
    } catch (err) {
        res.status(404);
        res.send({
            error: "Tweet Comment-Post operation failed" + err
        });
    }
}

const tweet_commentdelete = async (req, res) => {
    try {
        const commentId = await CommentsService.find(req.body.commentid);
        const tweetId = await TweetService.find(req.body.tweetid);
        const result = await TweetService.deleteComments(tweetId, commentId);
        res.status(200);
        res.send(result);
    } catch (err) {
        res.status(404);
        res.send({
            error: "Tweet Comment-Delete operation failed" + err
        });
    }
}

module.exports = {
    tweet_id,
    tweet_all,
    tweet_add,
    tweet_delete,
    tweet_like,
    tweet_likedelete,
    tweet_comment,
    tweet_commentdelete
}