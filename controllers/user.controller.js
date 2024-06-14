const userModel = require("../models/user.model");

// Create and Save a new User
exports.create = async (req, res) => {
  // Validate request
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      data: "please fill all fields",
      message: "error",
    });
  }

  // Create a User
  const user = new userModel({
    username,
    email,
    password,
  });

  // Save User in the database
  await user
    .save(user)
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

// Find a single User with an id
exports.findUser = async (req, res) => {
  const { username, password } = req.body;

  await userModel
    .findOne({ username, password })
    .select("-password")
    .then((data) => {
      if (data.length === 0) {
        res.status(404).json({
          data: "User not found",
          message: "error",
        });
      } else {
        res.status(200).json({
          data: data,
          message: "success",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        data: "Internal Server Error",
        message: "error",
      });
    });
};
