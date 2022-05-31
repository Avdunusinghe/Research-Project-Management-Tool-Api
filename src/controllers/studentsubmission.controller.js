const StudentSubmisstion = require("../models/studentsubmission.model");
const User = require("../models/user.model");

const saveStudentSubmission = async (request, response) => {
	try {
		let { id, 
			submissionId,
			studentAnswerfile,
			marks,
			feedback ,
			submittedById,
	
		} = request.body;

		const loggedInUser = User.findById(submittedById).select("-password");

		if (id == null) {
			let studentsubmission = new StudentSubmisstion({
				submissionId,
                 studentAnswerfile,
                 marks,
                 feedback,
				 submittedById:loggedInUser._id,
				 
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
		const studentsubmissions = await StudentSubmisstion.find().select("");

		response.json(studentsubmissions);
	} catch (error) {
		response.status(400).json(error.message);
	}
};



module.exports = {
	saveStudentSubmission,
	getAllStudentSubmissions,
	
};