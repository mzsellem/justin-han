// ContactForm.js
import React from 'react';

export default function ContactForm() {
  return (
    <div className="mx-auto bg-yellowlight">
      <h1 className="text-2xl font-bold mt-4 mb-4">
        Want me to perform at your next event? </h1>
        <h1 className="text-xl font-bold mt-4 mb-4">Send me an email.</h1>
      <form className="max-w-md mx-auto p-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
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
    </div>
  );
};
