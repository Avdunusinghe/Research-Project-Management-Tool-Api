const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentGroupSchema = new Schema({
	groupName: {
		type: String,
		required: true,
	},
	subjectName: {
		type: String,
		required: true,
	},
	firstmemberName: {
				type: String,
				required: true,
			},
	firstmemberEmail: {
				type: String,
				required: true,
			},
  firstmemberRegNumber: {
				type: String,
				required: true,
			},
  secondmemberName: {
				type: String,
				required: true,
			},
	secondmemberEmail: {
				type: String,
				required: true,
			},
  secondmemberRegNumber: {
				type: String,
				required: true,
			},
  thirdmemberName: {
				type: String,
				required: true,
			},
	thirdmemberEmail: {
				type: String,
				required: true,
			},
  thirdmemberRegNumber: {
				type: String,
				required: true,
			},
  fourthmemberName: {
				type: String,
				required: true,
			},
	fourthmemberEmail: {
				type: String,
				required: true,
			},
  fourthmemberRegNumber: {
				type: String,
				required: true,
			},
	need:{
		type:Boolean,
		default:false,
	},
	
	createOn: {
		type: Date,
		required: false,
	},
	createdBy: { type: Schema.Types.ObjectId, required: false, default: null },
	updatedOn: {
		type: Date,
		required: false,
	},
	updatedBy: { type: Schema.Types.ObjectId, required: false, default: null },
	userProfile: {
		type: String,
		required: false,
		default: null,
	},
});

module.exports = StudentGroup = mongoose.model("StudentGroup", studentGroupSchema);
