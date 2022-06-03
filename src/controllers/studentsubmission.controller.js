const StudentSubmisstion = require("../models/studentsubmission.model");


const saveStudentSubmission = async (request, response) => {
	try {
		let { id, submissionId, studentAnswerfile, marks, feedback, submittedById } = request.body;

		if (id == null) {
			let studentsubmission = new StudentSubmisstion({
				submissionId,
				studentAnswerfile,
				marks,
				feedback,
				submittedById,
				submitedOn: new Date().toUTCString(),
			});

			await studentsubmission.save();
			response.json({ isSuccess: true, message: "Student Submisstion has been save Successfully" });
		} else {
		}
	} catch (error) {
		console.error(error);
	}
};

/*
Get All Student Submissions
*/
const getAllStudentSubmissions = async (request, response) => {
	try {
		const submissionId = request.params.id;

		const studentsubmissions = await StudentSubmisstion.find({});

		response.json(studentsubmissions);
	} catch (error) {
		response.status(400).json(error.message);
	}
};



const getAllStudentEvaluationByStudent = async (request, response) => {

	try {

		let {submissionId,submittedById} = request.body;
		const evaluations = await StudentSubmisstion.findOne({submissionId:submissionId, submittedById:submittedById});
		response.json(evaluations);
	} catch (error) {
		response.status(400).json(error.message);
	}
}; 


module.exports = {
	saveStudentSubmission,
	getAllStudentSubmissions,
	getAllStudentEvaluationByStudent

};
