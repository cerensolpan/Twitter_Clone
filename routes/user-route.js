const express = require("express");
const router = express.Router();

const UserService = require("../services/user-service");


router.get("/:id", async (req, res) => {
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
});

router.post("/register", async (req, res) => {
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
});

router.post("/login", async (req, res) => {
    try {
        const user = await UserService.findOne({
            username: req.body.username,
        });
        if (!user) res.send("User can not found");
        if (req.body.password != user.password) res.send("Password is uncorrect");
        res.status(200);
        res.send(user);
    } catch (err) {
        res.status(404);
        res.send({
            error: "User Login-Post operation failed" + err,
        });
    }
});

module.exports = router;