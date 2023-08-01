const express = require ("express");
const router = express.Router();
const productController = require ("../controllers/productControllers");


router.get("/producto", productController.producto);
router.get("/productoDetail/:id", productController.productoDetail);

module.exports = router;