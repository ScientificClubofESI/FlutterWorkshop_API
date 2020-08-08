const Product = require("../models/ProductModel");

exports.getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.send(allProducts);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

exports.createProduct = async (req, res) => {
  try {
    const newProduct = Product({
      name: req.body.name,
      color: req.body.color,
      price: req.body.price,
      image: req.body.image,
    });
    await newProduct.save().then(() => {
      res.json({
        message: "Product Successfully Created",
      });
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const targetProduct = await Product.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      color: req.body.color,
      price: req.body.price,
      image: req.body.image,
    });
    res.json({
      message: "Product Updated Successfully",
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const targetProduct = await Product.findByIdAndDelete(req.params.id);
    if (!targetProduct) {
      return res.sendStatus(404);
    }
    res.json({
      targetProduct,
      message: "Product Deleted Successfully",
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};
