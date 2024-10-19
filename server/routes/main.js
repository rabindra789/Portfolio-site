const express = require("express");
const axios = require("axios");
const router = express.Router();
const nodemailer = require("nodemailer");
const MarkdownIt = require("markdown-it");
const validator = require("validator");

const token = process.env.GITHUB_ACCESS_TOKEN;
const md = new MarkdownIt();

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
    res.render("index", { 
      repos, 
      title: "Home - Rabindra's Portfolio", 
      description: "Explore the projects and work of Rabindra, a backend developer based in India."
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/readme", async (req, res) => {
  const { url } = req.query;

  try {
    const response = await axios.get(url);
    const readmeContent = response.data;
    const htmlContent = md.render(readmeContent); // Use markdown-it to render Markdown

    res.send(htmlContent);
  } catch (error) {
    console.error("Error fetching README:", error); // Log the error for debugging
    res.status(500).send("Error fetching README");
  }
});

router.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me - Rabindra",
    description: "I am Rabindra, a backend developer based in India with experience in various technologies. Learn more about my journey and projects.",
  });
});

router.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact Me - Rabindra",
    description: "Get in touch with Rabindra, a backend developer, through the contact form below.",
  });
});

router.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  // Validate email format
  if (!validator.isEmail(email)) {
    return res.status(400).render("contact", { 
      msg: "Invalid email address.", 
      title: "Contact Me - Rabindra",
      description: "Get in touch with Rabindra, a backend developer, through the contact form below." 
    });
  }

  // Setup Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
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
      res.status(500).render("contact", {
        msg: "Error sending message. Please try again later.",
        title: "Contact Me - Rabindra",
        description: "Get in touch with Rabindra, a backend developer, through the contact form below."
      });
    } else {
      console.log("Email sent: " + info.response);
      res.render("contact", {
        msg: "Thank you for contacting me. I will get back to you soon.",
        title: "Contact Me - Rabindra",
        description: "Get in touch with Rabindra, a backend developer, through the contact form below."
      });
    }
  });
});

module.exports = router;
