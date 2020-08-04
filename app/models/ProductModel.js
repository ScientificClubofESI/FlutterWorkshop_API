const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: {type: String},
  price:{type:Number},
  image: {type: String},
  description: {type: String},
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
