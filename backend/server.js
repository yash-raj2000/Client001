const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = 4000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "devilyashraj00@gmail.com",
    pass: "lfvj zqia etvw lsli",
  },
});

app.get("/", (req, res) => {
  res.json({ message: "Anand's server up and running" });
});

app.post("/send", (req, res) => {
  const { name, email, mobile, message } = req.body;

  const mailOptions = {
    from: "devilyashraj00@gmail.com",
    to: "consultancyservices065@gmail.com",
    subject: `Anand You Have A New Query From ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error occurred, message not sent.");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Message sent successfully!");
    }
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
