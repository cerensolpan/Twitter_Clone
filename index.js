const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000

require('./mongo-connection')


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})