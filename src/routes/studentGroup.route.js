const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  saveStudentGroup,
  getAllStudentGroupDetails,
  deleteStudentGroup,
  getStudentGroupById,
  getAllStudentGroups,
} = require("../controllers/studentGroup.controller");

//@route POST api/studentGroup/
//@description Save Student Group
router.post("/", saveStudentGroup);

//@route GET api/studentGroup/getAllStudentDetails
//@desc Get All Students
router.get("/getAllStudentGroupDetails", getAllStudentGroupDetails);

//@route GET api/studentGroup/all
//@desc Get All Student Groups
router.get("/all", getAllStudentGroups);

//@route Delete api/studentGroup/id
//@desc Delete Student Group
router.delete("/:id", deleteStudentGroup);

//@route GET api/studentGroup/getStudentById/id
//@desc GET StudentGroupById
router.get("/:id", getStudentGroupById);
module.exports = router;
