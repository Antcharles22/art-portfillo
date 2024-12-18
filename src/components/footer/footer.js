import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './footer.css';
import dhama from '../images/Dhamaday2-min.jpg';
import { Instagram } from './svg/svg';
import { Facebook } from './svg/svg';
import { Twitter } from './svg/svg';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0tg0s38', 'template_0kdd61c', form.current, {
        publicKey: '1YBPNRcUXnj0TAC4o',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Your message has been sent successfully!');
          form.current.reset(); // Clear the form fields
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <footer className='footer'>
      <div className="form">
        <form ref={form} onSubmit={sendEmail}>
          <h2>Contact Us</h2>
          <h4>Send us a message and we will get back to you as soon as possible.</h4>
          <br />
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <br />
          <input className='submit' type="submit" value="Send" />
        </form>
        <Instagram/>
        <Facebook />
        <Twitter />
        <p>© 2019 Dhamaarts. All rights reserved.</p>
      </div>
      <div className="footer-image">
        <img src={dhama} alt="Footer" />
      </div>
    </footer>
  );
};