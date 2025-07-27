//Write missing codes here
const mongoose = require("mongoose");
const schema = mongoose.Schema({
  title: String,
  content: String,
  img_url: String,
});

//Write missing codes here
var blogmodel = mongoose.model("blog",schema)
module.exports = blogmodel;
