const express = require ("express");
const router = express.Router();
const mainController = require ("../controllers/mainControllers");

router.get("/", mainController.home);
router.get("/login", mainController.login);
router.get("/carrito", mainController.carrito);
router.get("/producto", mainController.producto);
router.get("/register", mainController.register);

module.exports = router;