const express = require("express");
const router = express.Router();

const { saveEvaluation, getAllEvaluationItems, getEvaluationItemById } = require("../controllers/evaluation.controller");

//@route POST api/Evaluation/save
//@description save Evaluation
router.post("/", saveEvaluation);

//@route POST api/evaluation/all
//@description get all ecaluation items
router.get("/all", getAllEvaluationItems);

//@route POST api/evaluation/id
//@description get all ecaluation items by id
router.get("/id", getEvaluationItemById);

module.exports = router;
