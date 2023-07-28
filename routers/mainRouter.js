const express = require ("express");
const router = express.Router();
const mainController = require ("../controllers/mainControllers");

router.get("/", mainController.home);

router.get("/carrito", mainController.carrito);
router.get("/producto", mainController.producto);


module.exports = router;