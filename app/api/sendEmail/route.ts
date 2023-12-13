// import nodemailer from "nodemailer"

// export async function POST(req: any) {
//     try {
//             const { name, email, message } = await req.json();
        
//             const emailUser = process.env.EMAIL_USER
//             const emailPass = process.env.EMAIL_PASS
        
//             const transporter = nodemailer.createTransport({
//                 service: 'gmail',
//                 host: 'smtpro.gmail.in',
//                 port: 465, 
//                 secure: true,
//                 auth:{
//                     user: emailUser,
//                     pass: emailPass,
//                 }
//             })
        
//             const mailOption = {
//                 from: 'mzsellem930@gmail.com',
//                 to: 'marleysellem@gmail.com',
//                 html:`
//                 <p>Name: ${name}</p>
//                 <p>Email: ${email}</p>
//                 <p>Message: ${message}</p>
//                 `
//             }
        
//             await transporter.sendMail(mailOption)

//             return Response.json({message:"Email Sent Successfully"}, { status: 200 })
//     } catch (error) {
//         return Response.json({ message: "Failed to Send Email"}, { status: 500 })
//     }
// }