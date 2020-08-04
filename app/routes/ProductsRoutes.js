const express = require("express");
const router = express.Router();
const ProductControllers = require("../controllers/ProductsControllers");

router.get("/all", ProductControllers.getAllProducts);
router.post("/create", ProductControllers.createProduct);
router.put("/update/:id", ProductControllers.updateProduct);
router.delete("/delete/:id", ProductControllers.deleteProduct);

module.exports = router;
