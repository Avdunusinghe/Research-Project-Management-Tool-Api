const mongoose = require("mongoose");
const { Schema } = mongoose;

const requestSchema = new Schema({
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
	groupName: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	isAccept: {
		type: Boolean,
		default: false,
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

module.exports = Requests = mongoose.model("Requests", requestSchema);
