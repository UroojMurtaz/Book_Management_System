const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title : {
    type: String,
    required: true,
  },
  author : {
    type: String,
    required: true,
  },
  no_of_pages : {
    type: Number,
  },
  published_at:{
    type: Date,
  }
});

module.exports = mongoose.model("Books", bookSchema);
