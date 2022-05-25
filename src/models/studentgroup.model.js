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
	firstMemberName: {
				type: String,
				required: true,
			},
	firstMemberEmail: {
				type: String,
				required: true,
			},
  firstMemberRegNumber: {
				type: String,
				required: true,
			},
  secondMemberName: {
				type: String,
				required: true,
			},
	secondMemberEmail: {
				type: String,
				required: true,
			},
  secondMemberRegNumber: {
				type: String,
				required: true,
			},
  thirdMemberName: {
				type: String,
				required: true,
			},
	thirdMemberEmail: {
				type: String,
				required: true,
			},
  thirdMemberRegNumber: {
				type: String,
				required: true,
			},
  fourthMemberName: {
				type: String,
				required: true,
			},
	fourthMemberEmail: {
				type: String,
				required: true,
			},
  fourthMemberRegNumber: {
				type: String,
				required: true,
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
