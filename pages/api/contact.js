const validator = require("email-validator");

import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
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

  try {
    await sendgrid.send({
      to: "clxmente.s@gmail.com",
      from: "contact@solorio.dev",
      subject: `message from ${req.body.email}`,
      html: `<p>${req.body.message}</p><p>Reply to: ${req.body.email}</p>`,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  res.status(200).json({ message: "Sent email successfully" });
}
