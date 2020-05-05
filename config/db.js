const mongoose = require("mongoose");
const config = require("config");

const connectDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/contract-keeper", {
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => {
      console.error(err.message);
      process.exit(1);
    });
};

module.exports = connectDB;
