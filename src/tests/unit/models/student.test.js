const User = require("../../../models/user.model");
const mockingoose = require("mockingoose");
const { getAllStudents, getStudentById } = require("../../../controllers/student.controller");

describe("User Service", () => {
	describe("getAllStudents", () => {
		it("Should Resturn List of student", async () => {
			mockingoose(User).toReturn(
				[
					{
						fullName: "student",
						email: "student@gmail.com",
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
						email: "student@gmail.com",
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
			const results = await getAllStudents();
			expect(results[0].fullName).toBe("student");
		});
	});

	describe("getStudentById", () => {
		it("Should Resturn student", async () => {
			mockingoose(User).toReturn(
				[
					{
						id: 1,
						fullName: "student01",
						email: "student01@gmail.com",
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
						isPanelMember: false,
						isSupervisor: false,
						isLecure: false,
						isCoSupervisor: false,
						isStudent: true,
					},
				],
				"findOne"
			);
			const results = await getStudentById(1);
			expect(results.fullName).toBe("student01");
		});
	});
});
