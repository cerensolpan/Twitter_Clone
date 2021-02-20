const mongoose = require('mongoose')

const LikesSchema = new mongoose.Schema({

    tweetid: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Tweet',
        required: true
    },
    userid: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: true
    },

}, )


const LikesModel = mongoose.model('Like', LikesSchema)

module.exports = LikesModel