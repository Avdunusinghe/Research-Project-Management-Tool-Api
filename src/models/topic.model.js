const mongoose = require("mongoose");
const { Schema } = mongoose;

const topicSchema = new Schema({
	topicName: {
		type: String,
		required: true,
	},
	subject: {
		type: String,
		required: true,
	},
	groupleaderId: {
		type: String,
		required: true,
	},
	groupleadername: {
		type: String,
		required: true,
	},
	groupId: {
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

module.exports = Topic = mongoose.model("Topic", topicSchema);
