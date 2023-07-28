const express = require ("express");
const router = express.Router();
const cartController = require ("../controllers/cartControllers");

router.get("/carrito", cartController.carrito);

module.exports = router;