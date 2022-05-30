const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentsubmissionSchema = new Schema({
    
	groupleaderRegNo: {
		type: String,
		required: true,
	},

	groupleaderEmail: {
		type: String,
		required: true,
	},
	groupName: {
		type: Date,
		required: true,
	},
    studentAnswerfile: {
		type: String,
		required: true,
	},
	marks: {
		type: Date,
		required: false,
	},
	feedback: {
		type: String,
		required: false,
	},
});

module.exports = StudentSubmission = mongoose.model("StudentSubmissions", studentsubmissionSchema);
