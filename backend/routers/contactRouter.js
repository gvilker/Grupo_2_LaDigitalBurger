const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactControllers.js");
const isAdminMiddleware = require('../middlewares/isAdminMiddleware');

router.get("/", contactController.getContact);

router.get("/messages",isAdminMiddleware, contactController.getMessages);

router.post("/", contactController.postContact);

module.exports = router;