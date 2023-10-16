const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartControllers");
const authMiddleware = require("../middlewares/authMiddleware");

// @GET a la vista carrito
router.get("/carrito", authMiddleware, cartController.carrito);

// @POST para agregar un producto al carrito
router.post("/carrito", authMiddleware, cartController.addToCart);

// @DELETE para eliminar un producto del carrito
router.delete("/carrito/:product_Id/delete", authMiddleware, cartController.removeFromCart);

module.exports = router;