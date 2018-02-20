import React from 'react';
import './contact.css'

const Contact = () => {
    return (
      <div className="contact-form">
        <h2>Contact Me</h2>
        <form action="https://formspree.io/c.buj22@gmail.com" method="POST">
          <input type="text" name="name" placeholder="name"/>
          <input type="email" name="_replyto" placeholder="email"/>
          <textarea type="text" name="message" placeholder="message"/>
          <input className="send" type="submit" value="Send" />
        </form>
      </div>
    )
}

export default Contact;