const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.post("/", (req, res) => {
  res.send(req.body);
});

modeule.exports = router;
