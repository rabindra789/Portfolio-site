const express = require("express");
const axios = require("axios");
const router = express.Router();
const nodemailer = require("nodemailer");

const token = process.env.GITHUB_ACCESS_TOKEN;

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.github.com/users/rabindra789/repos",
      {
        headers: {
          Authorization: `token ${token}`,
        },
      }
    );
    const repos = response.data;
    res.render("index", { repos });
  } catch (error) {
    console.log(error);
  }
});

// function insertPostData() {
//   Post.insertMany([
//     {
//       title: "Exploring Node.js",
//       body: "This is an introductory post about Node.js and its uses."
//     },
//     {
//       title: "Understanding Express.js",
//       body: "This post delves into the basics and benefits of using Express.js."
//     },
//     {
//       title: "EJS Templating Engine",
//       body: "Learn how to use EJS to create dynamic web pages with ease."
//     },
//     {
//       title: "JavaScript Promises",
//       body: "An overview of promises in JavaScript and how to use them."
//     },
//     {
//       title: "Asynchronous Programming",
//       body: "This blog covers asynchronous programming concepts in JavaScript."
//     },
//     {
//       title: "RESTful API Design",
//       body: "A guide to designing RESTful APIs with Node.js and Express."
//     },
//     {
//       title: "Handling Middleware",
//       body: "Understand how middleware functions work in Express.js."
//     },
//     {
//       title: "Debugging Node.js Apps",
//       body: "Tips and tools for effectively debugging Node.js applications."
//     },
//     {
//       title: "Deploying Node.js Apps",
//       body: "Learn about the different methods for deploying Node.js applications."
//     },
//     {
//       title: "Working with MongoDB",
//       body: "An introduction to using MongoDB with Node.js for data storage."
//     }
//   ])
// }

// // insertPostData()

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.post("/contact", (req, res) => {
  res.render("contact");
  const { name, email, message } = req.body;

  // Setup Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail address
      pass: process.env.EMAIL_PASS, // Your Gmail password or App Password
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: "Portfolio contact section",
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending message. Please try again later.");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Thank you for contacting me. I will get back to you soon.");
    }
  });
});

module.exports = router;
