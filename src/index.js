require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(bodyParser.json());


app.use(authRoutes);

mongoose.connect(process.env.DATABASE_URL);

mongoose.connection.on("connected", () => {
    console.log("Connected to mongo instance");
});

mongoose.connection.on("error", (err) => {

    console.error("Error connecting to mongo ", err);

});

app.get('/', (req, res, next) => {

    res.send("Hi there!");

});

app.listen(3000, () => {

    console.log("Listening on port 3000");

});