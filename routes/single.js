const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("welcome to Kirigalans Magic Show");
});

module.exports = router;
