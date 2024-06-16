const mongoose = require("mongoose");
const dataModel = require("../models/data.model");

// Create and Save a new Data
exports.create = async (req, res) => {
  // Validate request
  const { userId, site, username, email, password, otherDetails } = req.body;

  if (!userId || !site || !username || !email || !password) {
    return res.status(400).json({
      data: "please fill all fields",
      message: "error",
    });
  }

  // Create a Data
  const data = new dataModel({
    userId,
    site,
    username,
    email,
    password,
    otherDetails,
  });

  // Save Data in the database
  await data
    .save(data)
    .then((data) => {
      res.status(201).json({
        data: data,
        message: "success",
      });
    })
    .catch((err) => {
      res.status(500).json({
        data: "Internal Server Error",
        message: "error",
      });
    });
};

// get all data for a user
exports.getData = async (req, res) => {
  try {
    const userId = new mongoose.Types.ObjectId(req.params.id);

    await dataModel
      .find({ userId })
      .then((data) => {
        res.status(200).json({
          data: data,
          message: "success",
        });
      })
      .catch((err) => {
        res.status(500).json({
          data: "Internal Server Error",
          message: "error",
        });
      });
  } catch (error) {
    res.status(500).json({
      data: "Internal Server Error",
      message: "error",
    });
  }
};

// update a data for a user
exports.updateData = async (req, res) => {
  const { userId, site, username, email, password, otherDetails } = req.body;
  const dataId = req.params.id;

  if (!userId || !site || !username || !email || !password) {
    return res.status(400).json({
      data: "please fill all fields",
      message: "error",
    });
  }

  await dataModel.findById(dataId).then((data) => {
    if (!data) {
      return res.status(404).json({
        data: "Data not found",
        message: "error",
      });
    }

    data.userId = userId;
    data.site = site;
    data.username = username;
    data.email = email;
    data.password = password;
    data.otherDetails = otherDetails;

    data
      .save()
      .then((data) => {
        res.status(200).json({
          data: data,
          message: "success",
        });
      })
      .catch((err) => {
        res.status(500).json({
          data: "Internal Server Error",
          message: "error",
        });
      });
  });
};

// delete a data for a user
exports.deleteData = async (req, res) => {
  const dataId = req.params.id;

  await dataModel
    .findByIdAndDelete(dataId)
    .then((data) => {
      if (!data) {
        return res.status(404).json({
          data: "Data not found",
          message: "error",
        });
      }

      res.status(200).json({
        data: "Data deleted successfully",
        message: "success",
      });
    })
    .catch((err) => {
      res.status(500).json({
        data: "Internal Server Error",
        message: "error",
      });
    });
};

// get data by id
exports.getDataById = async (req, res) => {
  const dataId = req.params.id;

  await dataModel
    .findById(dataId)
    .then((data) => {
      if (!data) {
        return res.status(404).json({
          data: "Data not found",
          message: "error",
        });
      }

      res.status(200).json({
        data: data,
        message: "success",
      });
    })
    .catch((err) => {
      res.status(500).json({
        data: "Internal Server Error",
        message: "error",
      });
    });
};
