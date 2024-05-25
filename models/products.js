const mongoose = require("mongoose");
const productShema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  quantitedisponible: {
    type: Number,
  },
  prixduproduit: {
    type: Number,
  },
  description: {
    type: String,
  },
  nbrProductSelled: {
    type: Number,
    default: 0,
  },
});
const Product = mongoose.model('Product', productShema);
module.exports = Product;


