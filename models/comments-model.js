const mongoose = require('mongoose')

const CommentsSchema = new mongoose.Schema({

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
    body: String,

}, )


const CommentsModel = mongoose.model('Comment', CommentsSchema)

module.exports = CommentsModel