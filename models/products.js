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
}
);
const Product = mongoose.model('Product', productShema);
module.exports = Product;


