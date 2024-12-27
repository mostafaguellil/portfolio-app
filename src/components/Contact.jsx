import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_bz59kpv', // Replace with your EmailJS Service ID
        'template_0tvqi7a', // Replace with your EmailJS Template ID
        {
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        '1KiTSO6A4eXivbd6m' // Replace with your EmailJS User ID (API key)
      )
      .then(
        (result) => {
          alert('Email sent successfully!');
          setFormData({ email: '', subject: '', message: '' });
        },
        (error) => {
          console.error(error);
          alert('Failed to send email. Please try again later.');
        }
      );
  };

  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-5 text-3xl tracking-tight font-bold text-center">Contact Me</h2>
        <p className="mb-8 lg:mb-16 font-medium text-center sm:text-xl">
          Feel free to reach out if you have any questions or need assistance – I'm here to help!
        </p>
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
            <input
              type="email"
              id="email"
              className="shadow-sm text-sm rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@mail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let me know how I can help you"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium">Your message</label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white py-3 px-5 text-sm font-medium text-center rounded-lg sm:w-fit bg-[#0f172a]"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
