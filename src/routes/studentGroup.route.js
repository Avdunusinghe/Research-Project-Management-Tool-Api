const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const { saveStudentGroup } = require("../controllers/studentGroup.controller");

//@route POST api/studentGroup/
//@description Save Student Group
router.post("/", saveStudentGroup);

module.exports = router;
