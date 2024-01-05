require('dotenv').config()

const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const mongoose = require("mongoose");


// var indexRouter = require("./routes/index");
var cohortsRouter = require("./routes/cohort");
var studentsRouter = require("./routes/student");

var app = express();

const cors = require("cors");

app.use(
  cors({
    origin: ["http://localhost:5173"]
  })
);

app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/cohorts", cohortsRouter); 
app.use("/students", studentsRouter); 


app.get("/docs", (req, res) => {
  res.sendFile(__dirname + "/views/docs.html");
});


// START SERVER
app.listen(process.env.PORT, () => {
  console.log(`WOW! Server listening on port ${process.env.PORT}`);
});


mongoose
  .connect("mongodb://127.0.0.1:27017/cohort-tools-api") //database collection
  .then((x) => console.log(`Connected to Database: "${x.connections[0].name}"`))
  .catch((err) => console.error("Error connecting to MongoDB", err));

  // module.exports = app;