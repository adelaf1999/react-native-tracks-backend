const express = require("express");
const mongoose = require("mongoose");
const User = mongoose.model('User');

const router = express.Router();

router.post("/signup", (req, res, next) => {

    console.log(req.body);

    res.send("You made a post request");

});

module.exports = router;