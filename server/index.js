
// Import required modules
require('dotenv').config();
const path = require('path');
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');


// Create Express app
const app = express();
const PORT = process.env.PORT;



// Parse JSON and URL-encoded request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
  origin: `https://codevertix-hk7v.vercel.app`,
methods: ['GET', 'POST'],
  credentials: true,
}));

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.user,
        pass: process.env.password
    }
});

app.get('/', (req, res) => {
res.send("Hello CodeVertix")
});


// Route to send email
// Route to handle form submission and send email
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;
    // Email options
    const mailOptions = {
        from: 'zahranisoft8@gmail.com',
        to: 'Hr@codevertix.com',
        subject: `CODEVERIX User ${name}  `,
        text: `User Name: ${name}\nUser Email: ${email}\nUser Message: ${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error occurred:', error);
            res.status(500).send('An error occurred while sending the email.');
        } else {
            console.log('Email sent:', info.response);
            res.send('Email sent successfully!');
        }
    });
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
