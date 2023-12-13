// ContactForm.js
import React from 'react';
import ContactForm from './ContactForm';

export default function Contact() {

  return (
    <div className="mx-auto bg-yellowlight rounded-lg p-8 mb-8 md:mb-0">
      <h1 className="text-xl font-bold font-pro mt-4 mb-4">
        Want me to perform at your next event? </h1>
        <h1 className="text-xl font-bold font-pro mt-4 mb-4">Send me an email.</h1>
        <ContactForm />
    </div>
  );
};
