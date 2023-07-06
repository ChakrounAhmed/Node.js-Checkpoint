const nodemailer = require("nodemailer");

// Create a transporter
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "**************@gmail.com", // YourEmail
    pass: "@@@@@@@@@@@@@@@@", // YourPassword
  },
});

// Set up email data
const mailOptions = {
  from: "**************@gmail.com", // YourEmail
  to: "**********@gmail.com", // RecipientEmail
  subject: "Test Email",
  text: "This is a test email from Node.js using Nodemailer.",
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});
