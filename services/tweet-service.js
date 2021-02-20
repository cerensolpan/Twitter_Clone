const BaseService = require('./base-service');
const TweetModel = require('../models/tweet-model');
const LikesService = require("./likes-service");
const CommentsService = require("./comments-service");

class TweetService extends BaseService {
    model = TweetModel

    async addLikes(tweet, request) {
        const like = await LikesService.add(request);
        tweet.likes.push(like)
        await tweet.save();
        return like;
    }

    async deleteLikes(tweet, likeId) {
        const likeIndex = tweet.likes.findIndex((c) => c.id === likeId);
        tweet.likes.splice(likeIndex, 1);
        await tweet.save()
        await LikesService.del(likeId);
    }

    async addComments(tweet, commentData) {
        const comment = await CommentsService.add(commentData);
        tweet.comments.push(comment)
        await tweet.save()
        return comment;
    }

    async deleteComments(tweet, commentId) {
        const commentIndex = tweet.comments.findIndex((c) => c.id === commentId);
        tweet.comments.splice(commentIndex, 1);
        await tweet.save()
        await CommentsService.del(commentId);
    }
}

module.exports = new TweetService();