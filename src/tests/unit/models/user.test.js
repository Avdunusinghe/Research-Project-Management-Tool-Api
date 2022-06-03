const User = require("../../../models/user.model");
const mockingoose = require("mockingoose");
const { getUserById, getAllUsers } = require("../../../controllers/user.controller");

describe("User Service", () => {
	describe("getAllUsers", () => {
		it("Should Resturn List of Users", async () => {
			mockingoose(User).toReturn(
				[
					{
						fullName: "admin",
						email: "admin@gmail.com",
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
			const results = await getAllUsers();
			expect(results[0].fullName).toBe("admin");
		});
	});

	describe("getById", () => {
		it("Should Resturn List of Users", async () => {
			mockingoose(User).toReturn(
				[
					{
						id: 1,
						fullName: "admin",
						email: "admin@gmail.com",
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
				"findOne"
			);
			const results = await getUserById(1);
			expect(results.fullName).toBe("admin");
		});
	});
});
