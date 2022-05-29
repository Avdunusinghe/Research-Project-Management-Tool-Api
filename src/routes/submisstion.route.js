const express = require("express");
const router = express.Router();

const { saveSubmisstion ,
    getAllSubmissions,
    getSubmissionById
} = require("../controllers/submisstion.controller");

//@route POST api/submisstion/register
//@description save submisstion
router.post("/", saveSubmisstion);

//@route GET api/student/all
//@desc Get All Students
router.get("/all",  getAllSubmissions);


//@route GET api/student/getStudentById/id
//@desc GET StudentById
router.get("/:id", getSubmissionById);

module.exports = router;
