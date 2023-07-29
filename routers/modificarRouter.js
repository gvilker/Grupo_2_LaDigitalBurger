const express = require ("express");
const router = express.Router();
const modifController = require ("../controllers/modifControllers");

router.get("/modificar", modifController.modificar);


module.exports = router;