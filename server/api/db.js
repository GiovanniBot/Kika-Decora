const mongoose = require("mongoose");
import 'dotenv/config';

const dbName = encodeURIComponent(process.env.DB_NAME);
const dbUsername = encodeURIComponent(process.env.DB_USER);
const dbPassword = encodeURIComponent(process.env.DB_PW);


if (dbUsername.trim().length === 0 && dbPassword.trim().length === 0) {
    console.log("Error: Couldn't find dbUsername or dbPassword enviroment variables.");
    process.exit(1);
}

const dbQueryStr = `mongodb+srv://${dbUsername}:${dbPassword}@cluster0.efwu6r1.mongodb.net/${dbName}?retryWrites=true&w=majority`;

// Connection default
const connectToDb = () => {
    mongoose.set("strictQuery", false);
    return mongoose.connect(dbQueryStr);
}

// TODO: Migrations

module.exports = { connectToDb }