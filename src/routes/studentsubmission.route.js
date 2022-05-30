const express = require("express");
const router = express.Router();

const {
	saveStudentSubmisstion,

} = require("../controllers/studentsubmission.controller");

//@route POST api/student/
//@description Save Student
router.post("/", saveStudentSubmisstion);

module.exports = router;