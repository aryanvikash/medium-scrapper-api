const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  para: String,
  image: String,
});

module.exports = mongoose.model("article", articleSchema);
