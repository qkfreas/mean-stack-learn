const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const postsRoutes = require("./routes/posts");
const userRoutes = require("./routes/user");

const app = express();

const user = "api_user";
const password = process.env.MONGO_ATLAS_PW;
const url = "cluster0.v6l03oq.mongodb.net";
const database = "angular";

mongoose
  .connect(
    "mongodb+srv://" +
      user +
      ":" +
      password +
      "@" +
      url +
      "/" +
      database +
      "?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Database connection successful!");
  })
  .catch(() => {
    console.log("Database connection failed");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Orgin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", postsRoutes);
app.use("/api/user", userRoutes);

module.exports = app;
