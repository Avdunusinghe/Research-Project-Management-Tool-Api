const Submisstion = require("../models/submission.model");

const saveSubmisstion = async (request, response) => {
	try {
		let { id, submisstionName, submissionType, fromDate, toDate, submisstionfile, studentAnswerfile } = request.body;

		if (id == null) {
			let submission = new Submisstion({
				submisstionName,
				submissionType,
				fromDate,
				toDate,
				submisstionfile,
				studentAnswerfile,
			});

			await submission.save();
			response.json({ isSuccess: true, message: "Submisstion has been save Successfully" });
		} else {
		}
	} catch (error) {
		console.error(error);
	}
};

/*
Get All Submissions
*/
const getAllSubmissions = async (request, response) => {
	try {
		const submissions = await Submisstion.find().select("");

		response.json(submissions);
	} catch (error) {
		response.status(400).json(error.message);
	}
};

/*
Get Submission By Id
*/

const getSubmissionById = async (request, response) => {
	try {
		const submissionId = request.params.id;
		if (!mongoose.Types.ObjectId.isValid(submissionId)) return false;
		if (studentId != null) {
			const submission = await User.findById(submissionId).select("-password");
			response.json(submission);
		} else {
			return response.status(200).json("Cannot Find Submissoin,Please Try Again");
		}
	} catch (error) {
		response.status(400).json(error.message);
	}
};

/*
Delete Submission
*/
const deleteSubmisstion = async (request, response) => {
	try {
		const submissionId = request.params.id;

		let query = await Submisstion.findById(submissionId);

		if (!query) {
			response.json({
				isSuccess: false,
				message: "Cannot Find Submisstion",
			});
		}

		query = await Submisstion.findByIdAndDelete(submissionId);

		response.json({
			isSuccess: true,
			message: "Submisstion has been delete successfully",
		});
	} catch (error) {
		response.json({
			isSuccess: false,
			message: "Error has been orrcured,please try again",
		});
	}
};

module.exports = {
	saveSubmisstion,
	getAllSubmissions,
	getSubmissionById,
	deleteSubmisstion,
};
