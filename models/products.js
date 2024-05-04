const mongoose = require("mongoose");
const productShema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
  },
  quantitedisponible: {
    type: Number,
    unique: true,
  },
  prixduproduit: {
    type: Number,
    unique: true,
  },
  tailles: {
    type: String,
    enum: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"],
  },
});
module.exports = mongoose.model("product", productShema);
