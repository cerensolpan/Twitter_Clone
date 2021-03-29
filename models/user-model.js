const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        minlength: 2,
        required: true,
    },
    nickname: {
        type: String,
        minlength: 2,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, )
// UserSchema.plugin(require('mongoose-autopopulate'))
const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel