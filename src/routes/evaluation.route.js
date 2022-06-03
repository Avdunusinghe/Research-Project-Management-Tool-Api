const express = require("express");
const router = express.Router();

const { 
    saveEvaluation, 
    getAllEvaluationItems, 
    getEvaluationItemById,
    deleteEvaluationItem,
} = require("../controllers/evaluation.controller");

//@route POST api/Evaluation/save
//@description save Evaluation
router.post("/", saveEvaluation);

//@route POST api/evaluation/all
//@description get all ecaluation items
router.get("/all", getAllEvaluationItems);

//@route POST api/evaluation/id
//@description get all evaluation items by id
router.get("/:id", getEvaluationItemById);

//@route Delete api/evaluation/id
//@desc Delete evaluation
router.delete("/:id", deleteEvaluationItem);

module.exports = router;
