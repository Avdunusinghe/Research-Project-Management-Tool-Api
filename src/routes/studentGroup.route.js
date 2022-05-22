const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const {
  saveStudentGroup,
  getAllStudentsGroups,
  getStudentGroupById,
} = require("../controllers/studentGroup.controller");

//@route POST api/studentGroup/
//@description Save Student Group
router.post("/", saveStudentGroup);

//@route GET api/studentGroup/
//@description GET Student Group
router.get("/all", getAllStudentsGroups);

//@route GET api/studentGroup/
//@description GET Student Group Id
router.get("/:id", getStudentGroupById);

module.exports = router;
