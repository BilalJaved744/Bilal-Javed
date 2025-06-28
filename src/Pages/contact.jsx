import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast'; // ✅ Added toast
import './cont.css'; // for styles

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_j3oa4ok',
      'template_e4s6b7a',
      form.current,
      '9w5jFXGxM77fOlC6e'
    )
    .then(() => {
      toast.success('Message sent successfully!'); // ✅ Toast instead of alert
      form.current.reset();
    }, (error) => {
      console.error(error.text);
      toast.error('Something went wrong, please try again.'); // ✅ Toast
    });
  };

  return (
    <section className="contact" id="contact">
      <Toaster position="top-right" reverseOrder={false} /> {/* ✅ Toast container */}

      <div className="contact-left">
        <h2><span>Let's</span> talk</h2>
        <p>
          I'm currently available to take on new projects, so feel free to send
          me a message about anything that you want me to work on.
        </p>
        <ul>
          <li>📧 Bullgentle232@gmail.com</li>
          <li>📞 +923216863821</li>
          <li>📍 LHR, Pakistan</li>
        </ul>
      </div>

      <div className="contact-right">
        <h1>Get in touch</h1>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Enter your name" required />
          <input type="email" name="user_email" placeholder="Enter your email" required />
          <textarea name="message" placeholder="Enter your message" required />
          <button type="submit">Submit now</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
