
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      errs.email = 'Invalid email address';
    }
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error('Failed to submit');
      window.alert('Successfully submitted!');
      navigate('/');
    } catch (err) {
      window.alert('Submission failed. Please try again.');
    }
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <p><strong>State Institute of Hotel Management, Sumerpur</strong></p>
        <p>Pali Road, Sumerpur, Rajasthan, India</p>
        <p>Email: info@ihmsumerpur.ac.in</p>
        <p>Phone: +91-XXXXXXXXXX</p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        {errors.name && <span className="error-msg">{errors.name}</span>}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        {errors.email && <span className="error-msg">{errors.email}</span>}
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>
        {errors.message && <span className="error-msg">{errors.message}</span>}
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
