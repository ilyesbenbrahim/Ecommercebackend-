const express = require("express");
const router = express.Router();
const prodcutsControllers = require("../controllers/prodcutsControllers");
// const { imageUpload } = require("../middlewares/imageUpload");

router.post("/", prodcutsControllers.createProduct);

module.exports = router;