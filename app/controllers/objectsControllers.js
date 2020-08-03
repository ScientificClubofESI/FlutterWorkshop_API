const Object = require("../models/objectModel");

exports.getAllObjects = async (req, res) => {
  try {
    const allObjects = await Object.find();
    res.send(allObjects);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

exports.createObject = async (req, res) => {
  try {
    const newObject = Object({
      name: req.body.name,
      description: req.body.description,
    });
    await newObject.save().then(() => {
      res.json({
        message: "Object Successfully Created",
      });
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

exports.updateObject = async (req, res) => {
  try {
    const targetObject = await Object.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      body: req.body.description,
    });
    res.json({
      message: "Object Updated Successfully",
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

exports.deleteObject = async (req, res) => {
  try {
    const targetObject = await Object.findByIdAndDelete(req.params.id);
    if (!targetObject) {
      return res.sendStatus(404);
    }
    res.json({
      targetObject,
      message: "Object Deleted Successfully",
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};
