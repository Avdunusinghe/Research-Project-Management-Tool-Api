const mailManager = require("nodemailer");
const getComapanyEmailSettings = require("./companySettings/email.settings");

function sendUserRegisteredEmail(userDaetails) {
  const emailSettings = getComapanyEmailSettings();
  const SMTPTransporter = mailManager.createTransport({
    port: emailSettings.SMTP_PORT,
    auth: {
      user: emailSettings.SMTP_USER,
      pass: emailSettings.SMTP_PASSWORD,
    },
    secure: emailSettings.SECURE,
  });

  const emailBody = {
    from: emailSettings.SMTP_USER,
    to: userDaetails.email,
    subject: "User Registration Research Management",
    text: "test",
    html: `<b>Hey there! </b>
         <br> username${userDaetails.email} and password ${userDaetails.password} <br/>`,
  };

  SMTPTransporter.sendMail(emailBody, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent : " + info.response);
    }
  });
}

module.exports = sendUserRegisteredEmail;
