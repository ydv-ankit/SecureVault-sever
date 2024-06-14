const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 6,
      max: 255,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 255,
      min: 6,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      max: 1024,
      min: 6,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
