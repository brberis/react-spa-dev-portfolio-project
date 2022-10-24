import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const [disabledButton, setDisabledButton] = useState(true);
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
        setDisabledButton(true);
      } else {
        setErrorMessage('');
        setDisabledButton(false);
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
        setDisabledButton(true);
      } else {
        setErrorMessage('');
        setDisabledButton(false);
      }
    }
  };

  return (
    <section className="content">
      <div id="contact" className="section-title">
        <h2>Contact Form</h2>
      </div>
      <div className="main-content">
        <form id="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
          </div>
          <div>
            <label htmlFor="email">Email address:</label>
            <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <div className='btn-div'>
            <button type="submit" disabled={disabledButton}>Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
