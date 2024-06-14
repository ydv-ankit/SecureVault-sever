const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    site: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    otherDetails: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const dataModel = mongoose.model("Data", dataSchema);

module.exports = dataModel;
