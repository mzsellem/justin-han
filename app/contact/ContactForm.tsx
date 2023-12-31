'use client'

import { error } from "console";

export default function ContactForm() {
    async function handleSubmit(event: any) {
        event.preventDefault();
        const data = {
            name: String(event.target.name.value),
            email: String(event.target.email.value),
            message: String(event.target.message.value)
        };
    
        const response = await fetch ('/api/contact', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
    

        if (response.ok) {
            console.log("Message sent successfully")
            return response
        }
        if(!response.ok) {
            console.log("Error sending message")
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 font-pro">
                <div className="mb-4">
                <label htmlFor="name" className="block text-md font-medium">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    required
                    autoComplete="off"
                    name="name"
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Your Name"
                />
                </div>
                <div className="mb-4">
                <label htmlFor="email" className="block text-md font-medium">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    required
                    autoComplete="false"
                    name="email"
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Your Email"
                />
                </div>
                <div className="mb-4">
                <label htmlFor="message" className="block text-md font-medium">
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
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Your Message"
                ></textarea>
                </div>
                <button
                type="submit"
                className="bg-bluesuit text-white p-2 rounded-md"
                >
                Send Message
                </button>
            </form>
        </>
    )
}