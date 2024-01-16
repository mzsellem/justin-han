// ContactForm.js
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: any) => {
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
    <form onSubmit={handleSubmit}>
      {/* ... (your form fields) */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
