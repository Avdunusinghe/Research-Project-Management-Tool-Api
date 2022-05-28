const mongoose = require("mongoose");
const { Schema } = mongoose;

const evaluationSchema = new Schema({
	evaluationType: {
		type: String,
		required: true,
	},
	groupId: {
		type: String,
		required: true,
	},
	evaluatorname: {
		type: String,
		required: true,
	},
    evaluatoremail: {
		type: String,
		required: true,
	},
    mark: {
        type: Number,
        required: true,
    },
	feedback: {
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

module.exports = Evaluation = mongoose.model("Evaluation", evaluationSchema);