// pages/api/sendEmail.js
import transporter from '../../../../nodemailer'; // Update the path accordingly

export default async function handler(req:any, res:any) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      const info = await transporter.sendMail({
        from: email,
        to: 'your-email@gmail.com',
        subject: 'Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      });

      console.log('Email sent:', info.response);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
