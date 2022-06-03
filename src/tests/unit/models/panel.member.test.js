const User = require("../../../models/user.model");
const mockingoose = require("mockingoose");
const { getAllPanelMembers, getPanelMemberById } = require("../../../controllers/panelMember.controller");

describe("User Service", () => {
	describe("getAllPanelMembers", () => {
		it("Should Resturn List of Panel Members", async () => {
			mockingoose(User).toReturn(
				[
					{
						fullName: "panelMember",
						email: "panelMember@gmail.com",
						mobileNumber: "0112487086",
						department: "SE",
						createOn: {
							$date: "2022-05-26T17:59:15.000Z",
						},
						createdBy: null,
						updatedOn: {
							$date: "2022-05-26T17:59:15.000Z",
						},
						updatedBy: null,
						userProfile: null,
						isAdmin: true,
						isPanelMember: false,
						isSupervisor: false,
						isLecure: false,
						isCoSupervisor: false,
						isStudent: false,
					},
					{
						fullName: "Test",
						email: "test@gmail.com",
						mobileNumber: "0112487086",
						department: "SE",
						createOn: {
							$date: "2022-05-26T17:59:15.000Z",
						},
						createdBy: null,
						updatedOn: {
							$date: "2022-05-26T17:59:15.000Z",
						},
						updatedBy: null,
						userProfile: null,
						isAdmin: true,
						isPanelMember: false,
						isSupervisor: false,
						isLecure: false,
						isCoSupervisor: false,
						isStudent: false,
					},
				],
				"find"
			);
			const results = await getAllPanelMembers();
			expect(results[0].fullName).toBe("panelMember");
		});
	});

	describe("getPanelMemberById", () => {
		it("Should Resturn student", async () => {
			mockingoose(User).toReturn(
				[
					{
						id: 1,
						fullName: "pMember",
						email: "pMember@gmail.com",
						mobileNumber: "0112487086",
						department: "SE",
						createOn: {
							$date: "2022-05-26T17:59:15.000Z",
						},
						createdBy: null,
						updatedOn: {
							$date: "2022-05-26T17:59:15.000Z",
						},
						updatedBy: null,
						userProfile: null,
						isAdmin: false,
						isPanelMember: true,
						isSupervisor: false,
						isLecure: false,
						isCoSupervisor: false,
						isStudent: false,
					},
				],
				"findOne"
			);
			const results = await getPanelMemberById(1);
			expect(results.fullName).toBe("pMember");
		});
	});
});
