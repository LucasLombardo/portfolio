import React from 'react'
import Container from './container'
import { ScContact } from '../styles'

const Contact = ({ action }) => (
  <ScContact>
    <Container>
      <form
        key="contact-form"
        name="contact-me"
        method="POST"
        action={action}
        data-netlify-honeypot="full-name"
        data-netlify="true"
      >
        <div style={{ display: 'none' }}>
          {/* Honeypot Field */}
          <label htmlFor="full-name">
            Don’t fill out this field if you’re a human.
          </label>
          <input type="text" id="full-name" name="full-name" />
        </div>
        <header>
          <h2>Contact Me</h2>
          <p>
            Thanks for checking out my website! Please feel free to contact me
            with any questions or opportunities
          </p>
        </header>
        <div className="name-email">
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          type="text"
          id="message"
          name="message"
          placeholder="Message"
          rows="8"
          required
        />
        <button type="submit" className="btn button">
          Send Message
        </button>
        <input type="hidden" name="form-name" value="contact-me" />
      </form>
    </Container>
  </ScContact>
)

export default Contact
