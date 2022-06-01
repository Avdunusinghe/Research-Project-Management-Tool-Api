const express = require("express");
const router = express.Router();

const {
	saveStudentSubmission,

} = require("../controllers/studentsubmission.controller");

//@route POST api/student/studentsubmission
//@description Save Student submission
router.post("/", saveStudentSubmission);

module.exports = router;