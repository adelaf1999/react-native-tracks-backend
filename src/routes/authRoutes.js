const express = require("express");

const router = express.Router();

router.post("/signup", (req, res, next) => {

    res.send("You made a post request");

});

module.exports = router;