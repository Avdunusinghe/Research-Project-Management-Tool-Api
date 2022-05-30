const StudentSubmisstion = require("../models/studentsubmission.model");

const saveStudentSubmisstion = async (request, response) => {
	try {
		let { id, 
			groupleaderRegNo, 
			groupleaderEmail, 
			groupName, 
			studentAnswerfile,
			marks,
			feedback 
		} = request.body;

		if (id == null) {
			let studentsubmission = new StudentSubmisstion({
				groupleaderRegNo, 
                groupleaderEmail, 
                groupName,
                 studentAnswerfile,
                 marks,
                 feedback
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