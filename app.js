const express = require("express");
const morgan = require("morgan");
const articleRoutes = require("./api/routes/article");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const cloudurl ="mongodb+srv://aryanvikash:mypass@cluster0-mlgpd.mongodb.net/cbd?retryWrites=true&w=majority";

  
mongoose.connect(cloudurl, { useMongoClient: true });
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Headers",
    "Origin, X-Requested-with , Content-Type, Accept,Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Allow-Method", "PUT,GET,POST,DELETE,PATCH");
    return res.status(200).json({});
  }
  next();
});
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/articles", articleRoutes);

app.use((req, res, next) => {
  const error = new Error("not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: { message: error.message } });
});

module.exports = app;
