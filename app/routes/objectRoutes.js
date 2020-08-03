const express = require("express");
const router = express.Router();
const objectControllers = require("../controllers/objectsControllers");

router.get("/all", objectControllers.getAllObjects);
router.post("/create", objectControllers.createObject);
router.put("/update/:id", objectControllers.updateObject);
router.delete("/delete/:id", objectControllers.deleteObject);

module.exports = router;
