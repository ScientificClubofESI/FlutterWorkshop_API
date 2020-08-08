const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const productsRoutes = require("./app/routes/ProductsRoutes");
require("dotenv/config");
const githubRepoUrl =
  "https://github.com/ScientificClubofESI/FlutterWorkshop_API";

app.use(cors());

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send(
    `<h1> Welcome to CSE Flutter Workshop API</h1> \
    For more info <a href=${githubRepoUrl} target='_blank'> Click Here </a>`
  );
});
app.use("/products", productsRoutes);

mongoose.connect(
  process.env.CONNECT_DB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  () => {
    console.log("Connected to DB");
  }
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("App listening on port " + PORT);
});
