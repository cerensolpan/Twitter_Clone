const mongoose = require('mongoose')

const CommentsSchema = new mongoose.Schema({
    comments: [{
        tweet: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Tweet',
            autopopulate: {
                maxDepth: 1
            },
            required: true
        },
        user: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'User',
            autopopulate: {
                maxDepth: 1
            },
            required: true
        },
        body: String,
    }]
}, )

CommentsSchema.plugin(require('mongoose-autopopulate'))

const CommentsModel = mongoose.model('Comments', CommentsSchema)

module.exports = CommentsModel