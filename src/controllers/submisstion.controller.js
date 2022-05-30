const Submisstion = require("../models/submission.model");

const saveSubmisstion = async (request, response) => {
	try {
		let { id, submisstionName, submissionType, fromDate, toDate, submisstionfile, studentAnswerfile, isHide } =
			request.body;

		if (id == null) {
			let submission = new Submisstion({
				submisstionName,
				submissionType,
				fromDate,
				toDate,
				submisstionfile,
				studentAnswerfile,
				isHide,
			});

			await submission.save();
			response.json({ isSuccess: true, message: "Submisstion has been save Successfully" });
		} else {
			const isSubmission = await Submisstion.findById(id);

			if (!isSubmission) {
				response.json({
					isSuccess: false,
					message: "Cannot Find Submisstion",
				});
			}

			const obj = await Submisstion.findByIdAndUpdate(id, {
				submisstionName,
				submissionType,
				fromDate,
				toDate,
				submisstionfile,
			});

			response.json({
				isSuccess: true,
				message: "Submisstion has been  Update SuccessFully",
			});
		}
	} catch (error) {
		response.json({
			isSuccess: false,
			message: "Error has been orccured please try again",
		});
	}
};

/*
Get All getAllUnHideSubmissions
*/
const getAllUnHideSubmissions = async (request, response) => {
	try {
		const submissions = await Submisstion.find({ isHide: false });

		response.json(submissions);
	} catch (error) {
		response.status(400).json(error.message);
	}
};
/*
Get All Submissions
*/
const getAllSubmissions = async (request, response) => {
	try {
		const submissions = await Submisstion.find();

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

		if (submissionId != null) {
			const submission = await Submisstion.findById(submissionId);

			response.json(submission);
		} else {
			return response.json({
				isSuccess: false,
				message: "Cannot Find Submisstion",
			});
		}
	} catch (error) {
		return response.json({
			isSuccess: false,
			message: "Error has been occured Please try again",
		});
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

/*
hide Submission
*/
const chengeVisiblitySubmisstion = async (reqeust, response) => {
	try {
		const { id, isHide } = reqeust.body;

		let submission = await Submisstion.findById(id);

		if (!submission) {
			response.json({
				isSuccess: false,
				message: "Cannot Find Submisstion",
			});
		} else {
			const value = isHide === true ? false : true;
			submission = await Submisstion.findByIdAndUpdate(id, {
				$set: {
					isHide: value,
				},
			});
			if (isHide) {
				response.json({
					isSuccess: true,
					message: "Submission has been Visible to Student",
				});
			} else {
				response.json({
					isSuccess: true,
					message: "Submission has been Hide to Student",
				});
			}
		}
	} catch (error) {
		response.json({
			isSuccess: false,
			message: "Error has been orrured please try again",
		});
	}
};
module.exports = {
	saveSubmisstion,
	getAllUnHideSubmissions,
	getAllSubmissions,
	getSubmissionById,
	deleteSubmisstion,
	chengeVisiblitySubmisstion,
};
