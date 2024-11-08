import React from 'react'

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <form>
          <label htmlFor="Name">Name</label>
          <input type="text" id="Name" name="Name" required />

          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={1} required />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
