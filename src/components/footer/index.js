import React from 'react'

import { pageLinks, socials } from '../../data'

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link) => (
          <li key={link.id}>
            <a href={link.scrollTo} className="footer-link" rel="noreferrer">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <ul className="footer-icons">
        {socials.map((social) => (
          <li key={social.id}>
            <a
              href={social.href}
              target="_blank"
              className="footer-icon"
              rel="noreferrer"
            >
              <i className={social.icon}></i>
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer
