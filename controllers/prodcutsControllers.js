const Product = require("./../models/products");

exports.createProduct = async (req, res) => {
  const { username,  quantitedisponible, prixduproduit, categorieduproduit, couleur, tailles } = req.body;
  const product = new Product({
    title,
    quantitedisponible,
    prixduproduit,
    categorieduproduit,
    couleur,
    tailles,
  });
  
  try {
    const savedProduct = await product.save();
    res.json(savedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
