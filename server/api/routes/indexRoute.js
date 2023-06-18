const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({
    version: "1.0",
    message:
      "Welcome to my RESTful API project. You can send a GET request to the endpoint /theme to see the DB schema pattern. Read the docs and have fun using this API!",
    endpoints: [
      {
        path: "/theme",
        methods: ["GET", "POST", "PATCH", "DELETE"],
      },
      {
        path: "/",
        methods: "GET",
      },
    ],
    documentation: "https://github.com/GiovanniBot/XXXXXXX"
  });
});

module.exports = router;
