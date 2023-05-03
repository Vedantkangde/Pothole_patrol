import React from 'react'
import emailjs from 'emailjs-com';
import './Contact.css'
import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    

    const templateParams = {
      from_name: name,
      from_email: email,
      message_html: message,
    };

    emailjs.send(
      'service_5vq8nue', // replace with your own Service ID
      'template_fcelkx6', // replace with your own Template ID
      templateParams,
      'RYIBbGAN9T7SNifGi', // replace with your own User ID
    ).then(() => {
      alert('Your message was sent successfully!');
    }, (error) => {
      alert('There was an error sending your message: ', error);
    });

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="align">

        <h1>Contact us</h1>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Message:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <button type="submit">Send</button>
    </form>
    <div id="footer">
        <div className="container">
          <p>
            <center>Rights Reserved by Pothole Patrol @2023 (Group No:43)</center>
            
          </p>
        </div>
      </div>
    </>
  );

}

export default Contact