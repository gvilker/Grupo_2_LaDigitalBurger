const express = require("express");
const router = express.Router();
const contactController = require("../../controllers/api/apiContactControllers");

// @GET a la vista contacto
router.get("/", contactController.contacto);

module.exports = router;