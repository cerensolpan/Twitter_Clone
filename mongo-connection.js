const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();

async function main() {
    await mongoose.connect(process.env.MONGODB_CONN_STRING, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    console.log('connected')
}

main()