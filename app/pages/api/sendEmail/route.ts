import nodemailer from "nodemailer"

export async function POST (req: any, res: any) {    
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    console.log("hellp")

    const { name, email, message } = req.body
    
    const data = {
        name, email, message
    }
    console.log(data, "marley")
    console.log(req, "req")

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: emailUser,
            pass: emailPass,
        }
    });

    try {
        const mailOptions = {
            from: emailUser, 
            to: emailUser,
            subject: `Contact form submission from ${data.name}`,
            html:`
            <p>Name: ${data.name}</p>
            <p>Email: ${data.email}</p>
            <p>Message: ${data.message}</p>
            `,
        };

        console.log("hello")
        await transporter.sendMail(mailOptions)

        return res.status(200).json({ message: "success" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Could not send the email. Your message was not sent."})
    }
}