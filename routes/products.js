const express = require("express");
const router = express.Router();
const productController = require("../controllers/prodcutsControllers");
const upload = require("../middlewares/imageUpload");
// Créer un nouveau produit
router.post("/", upload.single('image') ,productController.createProduct);

// Obtenir tous les produits
router.get("/", productController.getAllProducts);
                  
// Obtenir un produit par son ID
router.get("/:id", productController.getProduct);

// Mettre à jour un produit
router.put("/:id", productController.updateProduct);

// Supprimer un produit
router.delete("/:id", productController.deleteProduct);
module.exports = router;
