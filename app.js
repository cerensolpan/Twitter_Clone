const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const userRouter = require("./routes/user-route");
const tweetRouter = require("./routes/tweet-route");
require("./mongo-connection");

app.use("/user", userRouter);
app.use("/tweet", tweetRouter);


app.get("/", (req, res) => {
    res.render('index');
});


module.exports = app