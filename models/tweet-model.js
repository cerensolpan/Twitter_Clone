const mongoose = require('mongoose')

const TweetSchema = new mongoose.Schema({
    userid: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        autopopulate: {
            maxDepth: 1
        },
        required: true
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    comments: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Comments',
        autopopulate: {
            maxDepth: 1
        }
    }],
    likes: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Likes',
    }]
}, )

TweetSchema.plugin(require('mongoose-autopopulate'))

const TweetModel = mongoose.model('Tweet', TweetSchema)

module.exports = TweetModel