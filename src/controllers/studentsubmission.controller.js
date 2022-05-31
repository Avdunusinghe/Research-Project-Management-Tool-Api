const StudentSubmisstion = require("../models/studentsubmission.model");
const User = require("../models/user.model");

const saveStudentSubmisstion = async (request, response) => {
	try {
		let { id, 
			studentAnswerId,
			studentAnswerfile,
			marks,
			feedback ,
			currentUserId,
			currentUserEmail,
		} = request.body;

		const loggedInUser = User.findById(currentUserId).select("-password");

		if (id == null) {
			let studentsubmission = new StudentSubmisstion({
				studentAnswerId,
                 studentAnswerfile,
                 marks,
                 feedback,
				 currentUserId:loggedInUser._id,
				 currentUserEmail:loggedInUser.email
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
	saveStudentSubmisstion,
	getAllStudentSubmissions,
	
};