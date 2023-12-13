import nodemailer from "nodemailer"

export default async function ContactAPI (req: any, res: any) {
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;


    const { name, email, message } = req.body

    const data = {
        name, email, message
    }

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: emailUser,
            pass: emailPass,
        }
    });

    try {
        const mailOptions = await transporter.sendMail({
            from: emailUser, 
            to: "marleysellem@gmail.com",
            replyTo: email,
            subject: `Contact form submission from ${name}`,
            html:`
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>
            `,
        });

        return res.status(200).json({ message: "success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Could not send the email. Your message was not sent."})
    }
}