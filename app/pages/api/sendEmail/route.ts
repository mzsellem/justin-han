import nodemailer from "nodemailer"

export async function POST (req: any, res: any) {   
    const dataInBody = await req.json();
    console.log(dataInBody, "req hit in POST")

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    console.log("POST hit")

    const { name, email, message } = dataInBody

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
            subject: `Contact form submission from ${name}`,
            html:`
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>
            `,
        };

        console.log("mailOptions hit")
        await transporter.sendMail(mailOptions)

        return res.status(200).json({ message: "success" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Could not send the email. Your message was not sent."})
    }
}