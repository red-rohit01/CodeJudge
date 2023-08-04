const app = require("./app");
const express = require("express");
const path = require("path");
const DBConnection = require("./dbConfig");

DBConnection();


app.listen(process.env.PORT || 8000, (req, res) => {
  console.log(`server started running on port ${process.env.PORT}`);
});
