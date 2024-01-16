// ContactForm.js
import { useState } from 'react';
import { ChangeEvent } from 'react';

const ContactForm = () => {
    interface FormData {
        name: string;
        email: string;
        message: string;
    }

    const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    });
    console.log(formData, "formData")

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Email sent successfully');
        // Handle success (e.g., show a success message)
      } else {
        console.error('Error sending email');
        // Handle error (e.g., show an error message)
      }
    } catch (error) {
      console.error('Error sending email:', error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
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
                    autoComplete="off"
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
                    autoComplete="off"
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
                    autoComplete="off"
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
  );
};

export default ContactForm;
