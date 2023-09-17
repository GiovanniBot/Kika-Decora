const express = require("express");
const { connectToDb } = require("./db");
require('dotenv').config({path: __dirname + '/.env'})

const port = process.env.PORT || 3003;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const themesRoute = require("./routes/themesRoute");
const indexRoute = require("./routes/indexRoute");
const notFoundRoute = require("./routes/notFoundRoute");

app.use("/api/themes", themesRoute);
app.use("/", indexRoute);
app.use(notFoundRoute);

connectToDb()
  .then(() => {
    try {
      app.listen(port, () =>
        console.log(`Connection with Atlas MongoDB established on port:${port}`)
      );
    } catch (err) {
      console.error(err);
    }
  })
  .catch((err) => {
    console.error(err);
  });
