const express = require("express");
const router = express.Router();

const {
	saveSubmisstion,
	getAllSubmissions,
	getSubmissionById,
	deleteSubmisstion,
} = require("../controllers/submisstion.controller");

//@route POST api/submisstion/register
//@description save submisstion
router.post("/", saveSubmisstion);

//@route GET api/submisstion/all
//@desc Get All submisstion
router.get("/all", getAllSubmissions);

//@route GET api/submisstion/getsubmisstionById/id
//@desc GET submisstionById
router.get("/:id", getSubmissionById);

//@route Delete api/submisstion/id
//@desc Delete submisstion
router.delete("/:id", deleteSubmisstion);

module.exports = router;
