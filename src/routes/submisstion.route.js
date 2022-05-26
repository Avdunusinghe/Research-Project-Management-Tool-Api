const express = require("express");
const router = express.Router();

const { saveSubmisstion } = require("../controllers/submisstion.controller");

//@route POST api/submisstion/register
//@description save submisstion
router.post("/", saveSubmisstion);

module.exports = router;
