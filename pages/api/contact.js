const nodemailer = require("nodemailer");
const validator = require("email-validator");

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Send as a POST request." });
    return;
  }

  // return error if at least one field is empty
  if (!req.body.email || !req.body.message) {
    res.status(422).json({
      message:
        "One or both of the required fields is empty. Include an email and message.",
    });
    return;
  }

  // return error if email is invalid
  if (!validator.validate(req.body.email)) {
    res
      .status(422)
      .json({ message: "Invalid email entered. Please enter a valid email" });
    return;
  }

  console.log(req.body);

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "nodemailer.clem@gmail.com",
      pass: process.env.EMAIL_PASSWORD,
    },
    secure: true,
  });

  const MessageToSend = {
    from: req.body.email,
    to: "clxmente.s@gmail.com",
    subject: `CONTACT MSG: ${req.body.email}`,
    text: req.body.message + `\nFrom Email: ${req.body.email}`,
    html: `<p>${req.body.message}</p><p>From Email: ${req.body.email}</p>`,
  };

  transporter.sendMail(MessageToSend, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });

  res.status(200).json({ message: "Sent email successfully" });
}
