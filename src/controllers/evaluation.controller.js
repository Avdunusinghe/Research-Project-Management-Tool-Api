const Evaluation = require("../models/evaluation.model");
const bcrypt = require("bcrypt");

const saveEvaluation  = async (request, response) => {
    try {
		let { 
            id, 
            evaluationType, 
            groupId, 
            evaluatorname, 
            evaluatoremail, 
            mark,
            feedback, 
            isAccept } = request.body;
        
        if (id == null) {
            let evaluation = new Evaluation({
                evaluationType,
                groupId,
                evaluatorname,
                evaluatoremail,
                mark,
                feedback,
                isAccept,
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
                isAccept,
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
Get Topic By Id
*/

const getEvaluationItemById = async (request, response) => {
	try {
		const evaluationId = request.params.id;
		if (!mongoose.Types.ObjectId.isValid(evaluationId)) return false;
		if (evaluationId != null) {
			if (Evaluation.isAccept == false) {
				const evaluation = await Evaluation.findById(evaluationId).select();
				Evaluation.updateOne((set = isAccept == true));
				response.json(evaluation);
			}
		} else {
			return response.status(200).json("Cannot Find Evaluation Item,Please Try Again");
		}
	} catch (error) {
		response.status(400).json(error.message);
	}
};

module.exports = {
	saveEvaluation,
	getAllEvaluationItems,
	getEvaluationItemById,
};