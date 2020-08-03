const mongoose = require("mongoose");

const objectSchema = mongoose.Schema({
  name: {type: String},
  description: {type: String},
});

const Object = mongoose.model("Object", objectSchema);
module.exports = Object;
