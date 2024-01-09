// ContactForm.js
import React from 'react';
import ContactForm from './ContactForm';

export default function Contact() {

  return (
    <div className="p-8 mx-auto mb-8 rounded-lg bg-yellowlight md:mb-0">
      <h1 className="mt-4 mb-4 text-xl font-bold font-pro">
        Want me to perform at your next event? </h1>
        <h1 className="mt-4 mb-4 text-xl font-bold font-pro">Send me an email.</h1>
        <ContactForm />
    </div>
  );
};
