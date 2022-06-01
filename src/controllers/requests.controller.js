const mongoose = require("mongoose");
const Request = require("../models/requests.model");
const User = require("../models/user.model");

/*
 Student Request a supervisor
*/

const requestSupervisor = async (request, response) => {
	try {
		let { id, groupName, subjectName, firstmemberName, firstmemberEmail, firstmemberRegNumber, description, isAccept } =
			request.body;

		if (id == null) {
			let groupLeader = new Request({
				groupName,
				subjectName,
				firstmemberName,
				firstmemberEmail,
				firstmemberRegNumber,
				description,
				isAccept,
				createOn: new Date().toUTCString(),
				updatedOn: new Date().toUTCString(),
			});

			const isSuccess = true;
			if (isSuccess) {
				await groupLeader.save();

				response.status(200).send("Request Supervisor Has Been Successfully ");
			} else {
				response.status(400).json("Error,please try again");
			}
		}
	} catch (error) {
		response.status(400).json(error.message);
	}
};

/*
  Get All requests
  */
const getAllSupervisorRequests = async (request, response) => {
	try {
		const requests = await Request.find({ isAccept: false });

		response.json(requests);
	} catch (error) {
		response.status(400).json(error.message);
	}
};

/*
  Get All PanelMember Data
  */
const getPanelMembersMasterData = async (request, response) => {
	try {
		const panelMembers = await User.aggregate([{ $match: { isPanelMember: true } }]);

		response.json(panelMembers);
	} catch (error) {
		response.json(error);
		console.log(error);
	}
};

/*
  AllocatePanelMember
  */

const allocatePanelMember = async (request, response) => {
	try {
		let = { id, isAccept, panelMember } = request.body;

		const request = Request.findById(id);

		if (!request) {
			response.json({
				isSuccess: false,
				message: "Request Cannot Found",
			});
		}

		const groupLeader = User.findById(request.firstmemberRegNumber);

		const obj = await Request.findByIdAndUpdate(id, {
			isAccept,
			panelMember,
		});

		response.json({
			isSuccess: true,
			message: "Panel Member Allocated,",
		});
	} catch (error) {
		response.json({
			isSuccess: false,
			message: "Error has been orccured.please try again",
		});
	}
};
module.exports = {
	requestSupervisor,
	getAllSupervisorRequests,
	getPanelMembersMasterData,
	allocatePanelMember,
};
