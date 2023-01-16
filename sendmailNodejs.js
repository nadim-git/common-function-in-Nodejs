const nodemailer = require('nodemailer');

async function sendEmail(to, subject, html) {
  // create a transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'username', // generated ethereal user
        pass: 'password'  // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  // send the email
  let info = await transporter.sendMail({
    from: '"My App" <noreply@myapp.com>',
    to,
    subject,
    html
  });

  console.log("Message sent: %s", info.messageId);
}



// You can use this function to send an email by calling it 
//with the desired recipient's email address, the subject of the email, and the html content of the email:

sendEmail('recipient@example.com', 'Hello', '<p>Hello World!</p>');


// You can also use this function to send email to multiple people by passing an array of email address


let to = ['person1@example.com', 'person2@example.com']
sendEmail(to, 'Hello', '<p>Hello World!</p>');
