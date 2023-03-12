require('dotenv').config();

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:process.env.EMAIL,
        pass:process.env.EMAIL_PASSWORD
    }
});

const body = {
    name: 'Max',
    email: 'example@mail.com',
    text: 'Some text'
}

var mailOptions = {
    from: process.env.EMAIL,
    to: ['maxpanas008@gmail.com', 'm.opanasenko1997@gmail.com'],
    subject: 'New request from Node.js',
    text: `Name: ${body.name}, E-mail: ${body.email}, Message: ${body.text}`
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});