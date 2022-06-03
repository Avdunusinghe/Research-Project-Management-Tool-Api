/* const mailManager = require("nodemailer");
const getComapanyEmailSettings = require("./companySettings/email.settings");

function sendUserRegisteredEmail(userDaetails) {
	let isSuccess = false;
	try {
		const emailSettings = getComapanyEmailSettings();

		const SMTPTransporter = mailManager.createTransport({
			host: emailSettings.SMTP_HOST,
			port: emailSettings.SMTP_PORT,
			service: emailSettings.SMTP_SERVICE,
			auth: {
				user: emailSettings.SMTP_USER,
				pass: emailSettings.SMTP_PASSWORD,
			},
		});

		SMTPTransporter.verify(function (error, success) {
			if (error) {
				console.log(error);
			} else {
				console.log("Server is ready to take our messages");
			}
		});

		const emailBody = {
			from: emailSettings.SMTP_USER,
			to: userDaetails.email,
			subject: "User Registration Research Management",
			text: "test",
			html: `<b>Hey there! </b>
         <br> username ${userDaetails.email} and password ${userDaetails.password} <br/>`,
		};

		SMTPTransporter.sendMail(
			emailBody,
			(error, info) => {
				if (error) {
					console.log(error);
					isSuccess = false;
				} else {
					console.log("Email sent : " + info.response);
					console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
					console.log("Message sent: %s", info.messageId);
				}
			},
			(isSuccess = true)
		);
		return isSuccess;
	} catch (error) {
		console.log(error.message);
	}
	return isSuccess;
}

// redisterd student email
function sendStudentRegisteredEmail(studentDetails) {
	let isSuccess = false;
	try {
		const emailSettings = getComapanyEmailSettings();

		const SMTPTransporter = mailManager.createTransport({
			host: emailSettings.SMTP_HOST,
			port: emailSettings.SMTP_PORT,
			service: emailSettings.SMTP_SERVICE,
			auth: {
				user: emailSettings.SMTP_USER,
				pass: emailSettings.SMTP_PASSWORD,
			},
		});

		SMTPTransporter.verify(function (error, success) {
			if (error) {
				console.log(error);
			} else {
				console.log("Server is ready to take our messages");
			}
		});

		const emailBody = {
			from: emailSettings.SMTP_USER,
			to: studentDetails.email,
			subject: "Student Registration Research Management",
			text: "test",
			html: `<b>Hey there! </b>
         <br> username ${studentDetails.email} and password ${studentDetails.password} <br/>`,
		};

		SMTPTransporter.sendMail(
			emailBody,
			(error, info) => {
				if (error) {
					console.log(error);
					isSuccess = false;
				} else {
					console.log("Email sent : " + info.response);
					console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
					console.log("Message sent: %s", info.messageId);
				}
			},
			(isSuccess = true)
		);
		return isSuccess;
	} catch (error) {
		console.log(error.message);
	}
	return isSuccess;
}

//Send Panel Member Allocated Email
function sendPanelMemberAllocateEmail(emailBodyDetails) {
	let isSuccess = false;
	try {
		const emailSettings = getComapanyEmailSettings();

		const SMTPTransporter = mailManager.createTransport({
			host: emailSettings.SMTP_HOST,
			port: emailSettings.SMTP_PORT,
			service: emailSettings.SMTP_SERVICE,
			auth: {
				user: emailSettings.SMTP_USER,
				pass: emailSettings.SMTP_PASSWORD,
			},
		});

		SMTPTransporter.verify(function (error, success) {
			if (error) {
				console.log(error);
			} else {
				console.log("Server is ready to take our messages");
			}
		});

		const emailBody = {
			from: emailSettings.SMTP_USER,
			to: emailBodyDetails.email,
			subject: "Panel Member Allocated",
			text: "RPMT",
			html: `<b>Hey Please Contact Your Group Panel Member</b>
         <br> Panel Member Name ${emailBodyDetails.panelMemberName} and Email ${emailBodyDetails.panelMemberName} <br/>`,
		};

		SMTPTransporter.sendMail(
			emailBody,
			(error, info) => {
				if (error) {
					console.log(error);
					isSuccess = false;
				} else {
					console.log("Email sent : " + info.response);
					console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
					console.log("Message sent: %s", info.messageId);
				}
			},
			(isSuccess = true)
		);
		return isSuccess;
	} catch (error) {
		console.log(error.message);
	}
	return isSuccess;
}
module.exports = {
	sendUserRegisteredEmail,
	sendStudentRegisteredEmail,
	sendPanelMemberAllocateEmail,
};
 */
