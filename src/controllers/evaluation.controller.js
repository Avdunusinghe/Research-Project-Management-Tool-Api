const Evaluation = require("../models/evaluation.model");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const saveEvaluation  = async (request, response) => {
    try {
		let { 
            id, 
            evaluationType, 
            groupId, 
            evaluatorname, 
            evaluatoremail, 
            mark,
            feedback } = request.body;
        
        if (id == null) {
            let evaluation = new Evaluation({
                evaluationType,
                groupId,
                evaluatorname,
                evaluatoremail,
                mark,
                feedback,
                createOn: new Date().toUTCString(),
                updatedOn: new Date().toUTCString(),
            });
            
            const isSuccess = true;
			if (isSuccess) {
				await evaluation.save();

				response.status(200).send("Evaluated Successfully");
			} else {
				response.status(400).json("Error,please Try Again");
			}
		} else {
			const isEvaluationGroupAvailable = await Evaluation.findById(id);

			if (!isEvaluationGroupAvailable) {
				return res.status(404).json("Cannot Find the Evaluation item");
			}

            const evaluationObj = await Evaluation.findByIdAndUpdate(id, {
				evaluationType,
                groupId,
                evaluatorname,
                evaluatoremail,
                mark,
                feedback,
				updatedOn: new Date().toUTCString(),
			});

            response.status(200).json("Evaluation item has been  Update SuccessFully");
		}
	} catch (error) {
		response.status(400).json(error.message);
	}          
};

/*
Get All Evaluation items
*/
const getAllEvaluationItems = async (request, response) => {
	try {
		const evaluations = await Evaluation.find().select();

		response.json(evaluations);
	} catch (error) {
		response.status(400).json(error.message);
	}
};

/*
Get valuation By Id
*/

const getEvaluationItemById = async (request, response) => {
	try {
		const evaluationId = request.params.id;
		if (evaluationId != null) {
			const evaluation = await Evaluation.findById(evaluationId).select();
			response.json(evaluation);
		} else {
			return response.status(200).json("Cannot Find Evaluation Item,Please Try Again");
		}
	} catch (error) {
		response.status(400).json(error.message);
	}
};

/*
Delete Evaluation Item
*/

const deleteEvaluationItem = async (request, response) => {
	try {
		const evaluationId = request.params.id;

		let query = await Evaluation.findById(evaluationId);

		if (!query) {
			return response.status(200).json("Cannot Find Evaluation Item,Please Try Again");
		}

		query = await Evaluation.findByIdAndDelete(evaluationId);

		response.status(200).json("Evaluation Item has been delete successfully");
	} catch (err) {
		response.status(400).json(err.message);
	}
};

module.exports = {
	saveEvaluation,
	getAllEvaluationItems,
	getEvaluationItemById,
	deleteEvaluationItem,
};