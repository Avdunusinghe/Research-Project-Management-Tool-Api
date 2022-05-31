const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentsubmissionSchema = new Schema({
    
submissionId:{
		type: Schema.Types.ObjectId,
		required: false,
		ref:"Submission",
},
    studentAnswerfile: {
		type: String,
		required: true,

	},

	submittedById:{
		type: Schema.Types.ObjectId,
		required: false,
		ref:"User",
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
