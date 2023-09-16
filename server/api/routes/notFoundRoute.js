const express = require("express");
const router = express.Router();

router.use((req, res) => {
  res.status(404).json({ 
    error: "Not found",
    message: "The requested resource could not be found. Access the root endpoint '/api' to see the available endpoints." 
  });
});

module.exports = router;
