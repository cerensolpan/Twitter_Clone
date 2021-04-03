const UserService = require("../services/user-service");
const passport = require('passport');

const user = async (req, res) => {
    const user = await UserService.add(req.body)
    res.send(user);
}

const user_id = async (req, res) => {
    try {
        const user = await UserService.find(req.params.id);
        res.status(200);
        res.send(user);
    } catch (err) {
        res.status(404);
        res.send({
            error: "User-Get operation failed" + err,
        });
    }
}

const user_register = async (req, res) => {
    try {
        const checkUser = await UserService.findOne({
            username: req.body.username,
        });
        if (checkUser) {
            res.send("Username is already exist.");
        } else {
            const user = await UserService.add(req.body);
            res.status(200);
            res.send(user);
        }
    } catch (err) {
        res.status(404);
        res.send({
            error: "User Register-Post operation failed" + err,
        });
    }
}

const user_login = async (req, res, next) => {
    try {
        passport.authenticate('local', {
            session: false
        }, (err, passportUser, info) => {
            if (err) {
                return next(err);
            }

            if (passportUser) {
                const user = passportUser;
                user.token = passportUser.generateJWT();

                res.status(200);
                return res.json({
                    user: user.toAuthJSON()
                });
            }
            res.status(200);
            return res.send(info);
        })(req, res, next);

    } catch (err) {
        res.status(404);
        res.send({
            error: "User Login-Post operation failed" + err,
        });
    }
}

module.exports = {
    user,
    user_id,
    user_register,
    user_login
}