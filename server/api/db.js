const mongoose = require("mongoose");
require("dotenv").config();

const dbUsername = encodeURIComponent(process.env.DB_USER);
const dbPassword = encodeURIComponent(process.env.DB_PW);
if (dbUsername.trim().length === 0 && dbPassword.trim().length === 0) {
    console.log("Error: Couldn't find dbUsername or dbPassword enviroment variables.")
    process.exit(1);
}
// const dbQueryStr = `mongodb+srv://${dbUsername}:${dbPassword}@api-rest.nvbu4oa.mongodb.net/?retryWrites=true&w=majority`;
const dbQueryStr = `mongodb+srv://${dbUsername}:${dbPassword}@cluster0.efwu6r1.mongodb.net/`;

const connectToDb = () => {
    mongoose.set("strictQuery", false);
    return mongoose.connect(dbQueryStr);
}

module.exports = { connectToDb }