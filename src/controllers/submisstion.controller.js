const Submisstion = require("../models/submission.model");
const StudentSubmisstion = require("../models/studentsubmission.model");

const saveSubmisstion = async (request, response) => {
	try {
		let { id, submissionName, submissionType, fromDate, toDate, submissionfile, studentAnswerfile, isHide } =
			request.body;

		if (id == null) {
			let submission = new Submisstion({
				submissionName,
				submissionType,
				fromDate,
				toDate,
				submissionfile,
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
				submissionName,
				submissionType,
				fromDate,
				toDate,
				submissionfile,
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

const getSubmissionsStudentAnswers = async (reqeust, response) => {
	try {
		const submissionId = reqeust.params.id;

		const studentAnswers = await StudentSubmisstion.find({ submissionId: submissionId })
			.populate("submittedById", ["fullName", "studentId"])
			.populate("submissionId");

		response.json(studentAnswers);
	} catch (error) {
		console.log(error);
	}
};

const evaluateStudentSubmission = async (reqeust, response) => {
	try {
		let { id, marks, feedBack } = reqeust.body;

		const studentSubmission = await StudentSubmisstion.findById(id);

		if (!studentSubmission) {
			response.json({ isSuccess: false, message: "Connot find" });
		} else {
			const obj = await StudentSubmisstion.findByIdAndUpdate(id, {
				marks,
				feedBack,
			});

			response.json({ isSuccess: true, message: "Evalueate Submussion Successfull" });
		}
	} catch (error) {
		console.log(error);
	}
};
module.exports = {
	saveSubmisstion,
	getAllUnHideSubmissions,
	getAllSubmissions,
	getSubmissionById,
	deleteSubmisstion,
	chengeVisiblitySubmisstion,
	getSubmissionsStudentAnswers,
	evaluateStudentSubmission,
};
