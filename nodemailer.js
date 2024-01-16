// nodemailer.js
import nodemailer from 'nodemailer';

const email = process.env.EMAIL
const pass = process.env.PASS

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: pass,
  },
});

export default transporter;
