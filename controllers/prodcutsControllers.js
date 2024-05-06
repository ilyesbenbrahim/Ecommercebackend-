const Product = require("./../models/products");
// Créer un nouveau produit
exports.createProduct = async (req, res) => {
  try {
    const { title, image, quantitedisponible, prixduproduit } = req.body;
    const product = new Product({
      title,
      image,
      quantitedisponible,
      prixduproduit,
    });
    await product.save();
    res.status(201).send("Product created");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Obtenir tous les produits
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obtenir un produit par son ID
exports.getProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Mettre à jour un produit
exports.updateProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      req.body,
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Supprimer un produit
exports.deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
