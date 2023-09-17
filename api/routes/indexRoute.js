const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({
    version: "1.0",
    message:
      "Welcome to Kika Decora RESTful API project. Send a GET request to the endpoint api/themes to see the DB schema pattern. And read the docs!",
    endpoints: [
      {
        path: "/api/themes",
        methods: ["GET", "POST", "PATCH", "DELETE"],
      },
      {
        path: "/api",
        methods: "GET",
      },
    ],
    //TODO: documentation: "https://github.com/GiovanniBot/XXXXXXX"
  });
});

module.exports = router;
