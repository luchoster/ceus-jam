import React from 'react'

const Footer = () => (
  <React.Fragment>
    <section id="footer">
      <div className="inner level-item">
        <ul className="contact">
          <li className="fa-phone">
            <strong>Phone</strong> (702) 514-0607
          </li>
          <li className="fa-envelope">
            <strong>Email</strong> contact@compuexpress.us
          </li>
        </ul>
        <form name="contact-ceusVegas" method="POST" data-netlify="true">
          <h4>Get in touch</h4>
          <div className="columns">
            <div className="column">
              <label htmlFor="name">Name</label>
              <input name="name" id="name" type="text" placeholder="Name" />
            </div>
            <div className="column">
              <label htmlFor="email">Email</label>
              <input name="email" id="email" type="email" placeholder="Email" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="6"
              placeholder="Message"
            />
          </div>
          <div data-netlify-recaptcha />
          <ul className="actions">
            <li>
              <input
                value="Send Message"
                className="button big"
                type="submit"
              />
            </li>
          </ul>
        </form>
      </div>
      {
        <div className="copyright">
          &copy; CompuExpress US | All rights reserved. | Design:{' '}
          <a href="http://html5up.net" target="_blank">
            HTML5 UP
          </a>
        </div>
      }
    </section>
  </React.Fragment>
)

export default Footer
