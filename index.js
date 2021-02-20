const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 3000;
const userRouter = require("./routes/user-route");
const tweetRouter = require("./routes/tweet-route");
require("./mongo-connection");




app.use("/user", userRouter);
app.use("/tweet", tweetRouter);


app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});