const express = require ("express");
const router = express.Router();
const productController = require ("../controllers/productControllers");

router.get("/producto", productController.producto);

module.exports = router;