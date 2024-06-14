const mongoose = require("mongoose");

const connectToMongoDatabase = async (dbUrl) => {
  await mongoose
    .connect(dbUrl)
    .then(() => {
      console.log("SUCCESS: connected to the database");
    })
    .catch((error) => {
      console.log("ERROR: cannot connect to the database");
      console.log(error);
    });
};

module.exports = connectToMongoDatabase;
