// import nodemailer from 'nodemailer';

// export default async function handler(req:any, res:any) {
//   if (req.method === 'POST') {
//     const { name, lastname, email, tel, message } = req.body;

//     // Configure the transporter
//     const transporter = nodemailer.createTransport({
//       host: 'smtp.example.com', // Replace with your SMTP server
//       port: 587,
//       secure: false,
//       auth: {
//         user: 'your-email@example.com', // Replace with your email
//         pass: 'your-email-password', // Replace with your email password
//       },
//     });

//     try {
//       // Send the email
//       await transporter.sendMail({
//         from: 'your-email@example.com', // Replace with your email
//         to: '', // Destination email
//         subject: 'New Contact Form Submission',
//         html: `
//           <p><strong>Name:</strong> ${name} ${lastname}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Phone:</strong> ${tel}</p>
//           <p><strong>Message:</strong> ${message}</p>
//         `,
//       });

//       res.status(200).json({ message: 'Email sent successfully' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Error sending email' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }
