const express = require("express");
const router = express.Router();

const {
	saveSubmisstion,
	getAllUnHideSubmissions,
	getAllSubmissions,
	getSubmissionById,
	deleteSubmisstion,
	chengeVisiblitySubmisstion,
} = require("../controllers/submisstion.controller");

//@route POST api/submisstion/register
//@description save submisstion
router.post("/", saveSubmisstion);

router.put("/", chengeVisiblitySubmisstion);

//@route GET api/submisstion/all
//@desc Get All submisstion
router.get("/unHide", getAllUnHideSubmissions);

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
