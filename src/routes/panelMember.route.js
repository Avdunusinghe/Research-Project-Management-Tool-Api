const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  savePanelMember,
  getAllPanelMemberDetails,
  deletePanelMember,
  getPanelMemberById,
  getAllPanelMembers,
  evaluateTopics,
  evaluateStudentPresentation,
} = require("../controllers/panelMember.controller");

//@route POST api/panelMember/
//@description Save panelMember
router.post("/", savePanelMember);

//@route GET api/panelMember/getAllPanelMemberDetails
//@desc Get All PanelMember
router.get("/getAllPanelMemberDetails", getAllPanelMemberDetails);

//@route GET api/panelMember/all
//@desc Get All PanelMember
router.get("/all", getAllPanelMembers);

//@route Delete api/panelMember/id
//@desc Delete PanelMember
router.delete("/:id", deletePanelMember);

//@route GET api/panelMember/getPanelMemberById/id
//@desc GET PanelMemberById
router.get("/:id", getPanelMemberById);

//@route POST api/panelMember/evaluateTopics
//@desc Evaluate topics
router.post("/evaluateTopics", evaluateTopics);

//@route POST api/panelMember/evaluateStudentPresentation
//@desc Evaluate student presentaation
router.post("/evaluateStudentPresentation", evaluateStudentPresentation);

module.exports = router;