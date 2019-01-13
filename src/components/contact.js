import React, { Component } from 'react'
import Container from './container'
import Button from './button'
import { ScContact } from '../styles'

export default class Contact extends Component {
  state = {
    name: '',
    email: '',
    message: '',
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <ScContact>
        <Container>
          <form>
            <header>
              <h2>Contact Me</h2>
              <p>
                Thanks for checking out my website! Please feel free to contact
                me with any questions or opportunities
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
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
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
              value={this.state.message}
              onChange={this.handleChange}
              rows="8"
              required
            />
            <Button type="submit" className="btn">
              Send Message
            </Button>
          </form>
        </Container>
      </ScContact>
    )
  }
}
