const express = require("express");
const router = express.Router();
const productController = require("../controllers/prodcutsControllers");
const multer = require('multer');

// Créer un nouveau produit
router.post("/", productController.createProduct);

// Obtenir tous les produits
router.get("/", productController.getAllProducts);

// Obtenir un produit par son ID
router.get("/:id", productController.getProduct);

// Mettre à jour un produit
router.put("/:id", productController.updateProduct);

// Supprimer un produit
router.delete("/:id", productController.deleteProduct);

// Storage configuration for multer
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname.split('.').pop())
    }
});

const upload = multer({ storage: storage });

router.post('/upload', upload.single('image'), (req, res) => {
    const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
    res.status(200).json({
        message: 'File uploaded successfully',
        filename: req.file.filename,
        url: fileUrl
    });
});


module.exports = router;
