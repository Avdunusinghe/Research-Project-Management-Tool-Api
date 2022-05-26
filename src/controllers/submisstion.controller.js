const Submisstion = require("../models/submission.model");

const saveSubmisstion = async (request, response) => {
	try {
		let { id, submisstionName, submissionType, fromDate, toDate, submisstionfile, studentAnswerfile } = request.body;

		if (id == null) {
			let submission = new Submisstion({
				submisstionName,
				submissionType,
				fromDate,
				toDate,
				submisstionfile,
				studentAnswerfile,
			});

			await submission.save();
			response.json({ isSuccess: true, message: "Submisstion has been save Successfully" });
		} else {
		}
	} catch (error) {
		console.error(error);
	}
};

module.exports = {
	saveSubmisstion,
};
