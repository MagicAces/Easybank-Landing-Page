//jshint esversion:6

const express = require("express");
const https = require("https");

const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html")
});


app.listen(process.env.PORT || 2000, ()=> {
  console.log("Server is running on port 2000");
});
