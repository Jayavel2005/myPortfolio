// import nodemailer from "nodemailer";

// // Configure Nodemailer transporter
// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: "your-email@gmail.com",  // Replace with your Gmail
//         pass: "your-app-password",  // Use an **App Password**, not your Gmail password
//     }
// });

// // Function to send an email
// export const sendMail = async ({ email, subject, message }) => {
//     try {
//         const info = await transporter.sendMail({
//             from: "your-email@gmail.com", 
//             to: email,
//             subject: subject,
//             text: message,
//         });

//         console.log("✅ Email Sent:", info.messageId);
//         return { success: true, messageId: info.messageId };
//     } catch (error) {
//         console.error("❌ Error sending email:", error);
//         return { success: false, error: error.message };
//     }
// };
