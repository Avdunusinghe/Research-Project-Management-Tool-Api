const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const sendStudentRegisteredEmail = require("../utils/email.helper");

/*
Register Student
*/
const saveStudent = async (request, response) => {
  try {
    let {
      id,
      fullname,
      email,
      mobilenumber,
      password,
      department,
      isStudent,
    } = request.body;

    if (id == null) {
      let student = new User({
        fullname,
        email,
        mobilenumber,
        password,
        department,
        isStudent: true,
        createOn: new Date().toUTCString(),
        updatedOn: new Date().toUTCString(),
      });

			const studentDetails = {
				email: student.email,
				password: student.password,
			};

			// const isSuccess = sendStudentRegisteredEmail(studentDetails);
			const isSuccess = true;
			if (isSuccess) {
				// const salt = await bcrypt.genSalt(10);
				//student.password = await bcrypt.hash(student.password, salt);
				await student.save();

				response.status(200).send("Student has been save Successfully");
			} else {
				response.status(400).json("Error,please contact Admin");
			}
		} else {
			const isStudentAvailable = await User.findById(id);

			if (!isStudentAvailable) {
				return res.status(404).json("Cannot Find Student");
			}

			const studentObj = await User.findByIdAndUpdate(id, {
        fullname,
        email,
        mobilenumber,
        password,
        department,
        isStudent: true,
				updatedOn: new Date().toUTCString(),
			});

			response.status(200).json("Student has been  Update SuccessFully");
		}
	} catch (error) {
		response.status(400).json(error.message);
	}
};

/*
Get All Student List
*/

const getAllStudentDetails = async (request, response) => {
	const limit = 0;
	const skip = 0;
	const totalRecordCount = 0;
	const totalPageCount = 0;
	const totalPages = 0;
	const page = 0;

	try {
		const { userRole, searchText } = request.query;

		let query = await User.find();

		if (userRole > 0) {
			query = await query.find(userRole);
		}
		if (searchText) {
			query = await query.find(searchText);
		}

		page = parseInt(request.query.page) || 1;
		limit = parseInt(request.query.limit) || 10;
		skip = (page - 1) * limit;

		query = query.skip(skip).limit(limit);

		const studentDetails = await query;

		totalRecordCount = studentDetails.length;
		totalPageCount = Math.ceil(totalRecordCount / limit);

		request.status(200).json({
			studentDetails,
			totalRecordCount,
			totalPageCount,
		});
	} catch (error) {
		response.status(400).json(error.message);
	}
};

/*
Delete Student
*/

const deleteStudent = async (request, response) => {
	try {
		const studentId = request.params.id;

		let query = await User.findById(userId);

		if (!query) {
			return response.status(200).json("Cannot Find User,Please Try Again");
		}

		query = await User.findByIdAndDelete(studentId);

		response.status(200).json("Student has been delete successfully");
	} catch (err) {
		response.status(400).json(err.message);
	}
};

/*
Get Student By Id
*/

const getStudentById = async (request, response) => {
	try {
		const studentId = request.params.id;
		if (!mongoose.Types.ObjectId.isValid(studentId)) return false;
		if (studentId != null) {
			const student = await User.findById(studentId).select("-password");
			response.json(student);
		} else {
			return response.status(200).json("Cannot Find Student,Please Try Again");
		}
	} catch (error) {
		response.status(400).json(error.message);
	}
};

/*
Get All Students
*/
const getAllStudents = async (request, response) => {
	try {
		const studentDetails = await User.find().select("-password");

		response.json(studentDetails);
	} catch (error) {
		response.status(400).json(error.message);
	}
};

/*
@Document Upload
*/

const submitDocument = async (req, res) => {
	const newpath = __dirname + "/files/";
	const file = req.files.file;
	const filename = file.name;

	file.mv(`${newpath}${filename}`, (err) => {
		if (err) {
			res.status(500).send({ message: "File upload failed", code: 200 });
		}
		res.status(200).send({ message: "File Uploaded", code: 200 });
	});
};
/* => {
  try {
    const file = fs.createReadStream("./myfile.txt");
    const title = "Document";

    const form = new FormData();
    form.append("title", title);
    form.append("file", file);

    const resp = await axios.post("http://localhost:3000/upload", form, {
      headers: {
        ...form.getHeaders(),
      },
    });

    if (resp.status === 200) {
      return "Uploaded the document successfully";
    }
  } catch (err) {
    return new Error(err.message);
  }
};

submitDocument().then((resp) => console.log(resp));
*/

/*
Download Template
*/
const downloadTemplate = async (req, res) => {
	FileLocation = "public/FILE.pdf";
	file = "File.pdf";
	res.download(fileLocation, file, (err) => {
		if (err) console.log(err);
	});
};

//Enum

const UserRole = {
	admin: 1,
	student: 2,
	lecturer: 3,
};
Object.freeze(UserRole);

module.exports = {
	saveStudent,
	getAllStudentDetails,
	deleteStudent,
	getStudentById,
	getAllStudents,
	submitDocument,
	downloadTemplate,
};
