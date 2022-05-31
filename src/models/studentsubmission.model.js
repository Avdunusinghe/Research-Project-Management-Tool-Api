const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentsubmissionSchema = new Schema({
    
studentAnswerId:{
		type: Schema.Types.ObjectId,
		required: true,
		ref:"Submission",
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
