const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require('express-session');
const errorHandler = require('errorhandler');
const mongoose = require('mongoose')
var passport = require('passport');

//Configure isProduction variable
const isProduction = process.env.NODE_ENV === 'production';

const app = express();
app.use(require('morgan')('dev'));
app.use(bodyParser.json());
app.set('view engine', 'pug');
app.use(cors());
app.use(session({
    secret: 'twitter-clone',
    cookie: {
        maxAge: 60000
    },
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);


if (!isProduction) {
    app.use(errorHandler());
}

mongoose.promise = global.Promise;
require("./mongo-connection");

const userRouter = require("./routes/user-route");
const tweetRouter = require("./routes/tweet-route");

app.use("/user", userRouter);
app.use("/tweet", tweetRouter);


app.get("/", (req, res) => {
    res.render('index');
});

//Error handlers & middlewares
if (!isProduction) {
    app.use((err, req, res) => {
        res.status(err.status || 500);

        res.json({
            errors: {
                message: err.message,
                error: err,
            },
        });
    });
}

app.use((err, req, res) => {
    res.status(err.status || 500);

    res.json({
        errors: {
            message: err.message,
            error: {},
        },
    });
});


module.exports = app