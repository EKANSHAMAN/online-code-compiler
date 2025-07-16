const mongoose = require("mongoose");

const codeSchema = new mongoose.Schema({
  code: String,
  language: String,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Code", codeSchema);
