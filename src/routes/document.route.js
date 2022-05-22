const express = require("express");
const router = express.Router();
const multer = require("multer");
const inMemoryStorage = multer.memoryStorage();
const uploadStrategy = multer({ storage: inMemoryStorage }).single("image");
const { uploadPresentation } = require("../controllers/document.controller");

router.post("/", uploadPresentation);

module.exports = router;
