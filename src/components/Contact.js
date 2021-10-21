import React from 'react';

import '../assets/css/contact.css';

const Contact = () => {
  return (
    <div className='contact__section'>
      <header className='contact__header'>
        <h3>Let's Talk</h3>
      </header>
      <div className='form__container'>
        <form
          className='contact__form'
          method='POST'
          data-netlify='true'
          name='contact-form'
        >
          <input type='hidden' name='form-name' value='contact-form' />
          <div className='field__wrapper first-name__wrapper'>
            <label htmlFor='firstName'>First Name</label>
            <input type='text' name='firstName' id='firstName' />
          </div>
          <div className='field__wrapper last-name__wrapper'>
            <label htmlFor='lastName'>Last Name</label>
            <input type='text' name='lastName' id='lastName' />
          </div>
          <div className='field__wrapper email__wrapper'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' />
          </div>
          <div className='field__wrapper subject__wrapper'>
            <label htmlFor='subject'>Subject</label>
            <input type='text' name='subject' id='subject' />
          </div>
          <div className='field__wrapper message__wrapper'>
            <label htmlFor='message'>Message</label>
            <textarea name='message' id='message' cols='30' rows='5'></textarea>
          </div>
          <input type='submit' value='Send' className='btn btn--accent submit' />
        </form>
      </div>
    </div>
  );
};

export default Contact;
