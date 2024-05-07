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
}
);
const Product = mongoose.model('Product', productShema);
module.exports = Product;


