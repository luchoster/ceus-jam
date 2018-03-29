import React from 'react'

const Footer = () => (
  <section id="footer">
    <div className="inner">
      <h2 className="major">Get in touch</h2>
      <p>
        Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
        Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas,
        purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed
        ac elementum arcu. Quisque placerat auctor laoreet.
      </p>
      <form method="post" action="#">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="4" />
        </div>
        <ul className="actions">
          <li>
            <input type="submit" value="Send Message" />
          </li>
        </ul>
      </form>
      <ul className="contact">
        <li className="fa-home">
          CompuExpress US, LLC.<br />
        </li>
        <li className="fa-phone">(702) 514-0607</li>
        <li className="fa-envelope">
          <a href="#">contact@compuexpress.us</a>
        </li>
        <li className="fa-twitter">
          <a href="#">twitter.com/CompuExpressUS</a>
        </li>
        <li className="fa-facebook">
          <a href="#">facebook.com/CompuExpressUS</a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; CompuExpress US | All rights reserved.</li>
        <li>
          Design: <a href="http://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </div>
  </section>
)

export default Footer
