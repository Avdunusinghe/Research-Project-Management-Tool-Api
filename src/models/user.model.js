const mongoose = require("mongoose");
const { Schema } = mongoose;
const jwt = require("jsonwebtoken");

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  studentid: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobilenumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  faculty: {
    type: String,
    required: false,
  },
  department: {
    type: String,
    required: false,
  },
  groupid: {
    type: String,
    required: false,
  },
	fullName: {
		type: String,
		required: true,
	},

	studentid: {
		type: String,
		required: false,
	},

	email: {
		type: String,
		required: true,
		unique: true,
	},

	mobileNumber: {
		type: String,
		required: true,
	},

	password: {
		type: String,
		required: true,
	},

	specialization: {
		type: String,
		required: false,
	},

	groupid: {
		type: String,
		required: false,
	},

	createOn: {
		type: Date,
		required: false,
	},

	createdBy: {
		type: Schema.Types.ObjectId,
		required: false,
		default: null,
	},

	updatedOn: {
		type: Date,
		required: false,
	},
	updatedBy: {
		type: Schema.Types.ObjectId,
		required: false,
		default: null,
	},

	userProfile: {
		type: String,
		required: false,
		default: null,
	},

	isAdmin: {
		type: Boolean,
		required: false,
		default: false,
	},

	isPanelMember: {
		type: Boolean,
		required: false,
		default: false,
	},

	isSupervisor: {
		type: Boolean,
		required: false,
		default: false,
	},

	isLecure: {
		type: Boolean,
		required: false,
		default: false,
	},

	isSudent: {
		type: Boolean,
		required: false,
		default: false,
	},
});

userSchema.methods.genarateJwtToken = async function () {
	const user = this;
	const jwtSecret = process.env.jwtPrivateKey;

	const token = jwt.sign({ _id: user._id }, jwtSecret);
	user.token = token;
	return token;
};

module.exports = User = mongoose.model("User", userSchema);
