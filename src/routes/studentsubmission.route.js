const express = require("express");
const router = express.Router();

const {
	saveStudentSubmission,
	getAllStudentSubmissions,
	getAllStudentEvaluationByStudent

} = require("../controllers/studentsubmission.controller");
const { route } = require("./auth.route");

//@route POST api/student/studentsubmission
//@description Save Student submission
router.post("/", saveStudentSubmission);

//@route GET api/student/studentsubmission
//@description Get All  Student submission
router.get("/all", getAllStudentSubmissions);

router.post("/feedBack", getAllStudentEvaluationByStudent);

module.exports = router;