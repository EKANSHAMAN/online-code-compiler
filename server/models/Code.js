const mongoose = require("mongoose");

const codeSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    trim: true
  },
  language: {
    type: String,
    required: true,
    enum: ["cpp", "python", "java"],  // Optional: restrict to known languages
    lowercase: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Code", codeSchema);
