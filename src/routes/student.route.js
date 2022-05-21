const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  saveStudent,
  getAllStudentDetails,
  deleteStudent,
  getStudentById,
  getAllStudents,
  submitDocument,
} = require("../controllers/student.controller");

//@route POST api/student/
//@description Save Student
router.post("/", saveStudent);

//@route GET api/student/getAllStudentDetails
//@desc Get All Students
router.get("/getAllStudentDetails", getAllStudentDetails);

//@route GET api/student/all
//@desc Get All Students
router.get("/all", getAllStudents);

//@route Delete api/student/id
//@desc Delete Student
router.delete("/:id", deleteStudent);

//@route GET api/student/getStudentById/id
//@desc GET StudentById
router.get("/:id", getStudentById);

//@route POST api/student/submitDocument
//@desc submit document
router.post("/upload", submitDocument);

//@route POST api/student/requestSupervisor
//@desc request a supervisor
router.post("/requestSupervisor", requestSupervisor);

//@route GET api/student/downloadTemplate
//@desc Download a Template
router.get("/getfile", downloadTemplate);

module.exports = router;