require("dotenv").config()
const mongoose = require("mongoose");


const DBConnection = async () => {
  const DB_URI = process.env.DB_URL;
  try {
    await mongoose.connect(DB_URI, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error.message);
  }
};

module.exports= DBConnection;
