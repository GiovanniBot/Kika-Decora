const mongoose = require("mongoose");
require("dotenv").config();

const dbUsername = encodeURIComponent(process.env.DB_USER);
const dbPassword = encodeURIComponent(process.env.DB_PW);

if (dbUsername.trim().length === 0 && dbPassword.trim().length === 0) {
    console.log("Error: Couldn't find dbUsername or dbPassword enviroment variables.")
    process.exit(1);
}

const dbQueryStr = `mongodb+srv://${dbUsername}:${dbPassword}@cluster0.efwu6r1.mongodb.net/?retryWrites=true&w=majority`;

// Connection to Atlas
const connectToDb = () => {
    mongoose.set("strictQuery", false);
    return mongoose.connect(dbQueryStr);
}

// Connection for migrate-mongoose QUE NÃO FUNCIONOU 🤬🤬🤬🤬🤬
// const connectToDb = async () => {
//     try {
//       await mongoose.connect(dbQueryStr, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       });
//       console.log("Connected to MongoDB successfully!");
//     } catch (error) {
//       console.error("Error connecting to MongoDB:", error);
//       process.exit(1);
//     }
//   };

module.exports = { connectToDb }