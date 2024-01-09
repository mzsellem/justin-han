'use client'

export default function ContactForm() {
    async function handleSubmit(event: any) {
        console.log('submitting')
        event.preventDefault();
        const data = {
            name: String(event.target.name.value),
            email: String(event.target.email.value),
            message: String(event.target.message.value)
        };
        const response = await fetch (`/pages/api/sendEmail`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
    

        if (response.ok) {
            console.log("Message sent successfully")
            return response
        }
        if(!response.ok) {
            console.log({response})
            console.log("Error sending message")
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit} className="max-w-md p-4 mx-auto font-pro">
                <div className="mb-4">
                <label htmlFor="name" className="block font-medium text-md">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    required
                    autoComplete="false"
                    name="name"
                    className="w-full p-2 mt-1 border rounded-md"
                    placeholder="Your Name"
                />
                </div>
                <div className="mb-4">
                <label htmlFor="email" className="block font-medium text-md">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    required
                    autoComplete="false"
                    name="email"
                    className="w-full p-2 mt-1 border rounded-md"
                    placeholder="Your Email"
                />
                </div>
                <div className="mb-4">
                <label htmlFor="message" className="block font-medium text-md">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    minLength={5}
                    maxLength={150}
                    required
                    autoComplete="false"
                    rows={4}
                    className="w-full p-2 mt-1 border rounded-md"
                    placeholder="Your Message"
                ></textarea>
                </div>
                <button
                type="submit"
                className="p-2 text-white rounded-md bg-bluesuit"
                >
                Send Message
                </button>
            </form>
        </>
    )
}