const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');

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
UserSchema.methods.generateJWT = function () {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);

    return jwt.sign({
        username: this.username,
        nickname: this.nickname,
        id: this._id,
        exp: parseInt(expirationDate.getTime() / 1000, 10),
    }, 'secret');
}
UserSchema.methods.toAuthJSON = function () {
    return {
        _id: this._id,
        username: this.username,
        nickname: this.nickname,
        token: this.generateJWT(),
    };
};
const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel