import React from 'react'

const NavLinks = ({ links }) => {
  return (
    <ul className="nav-links" id="nav-links">
      {links.map((link) => (
        <li key={link.id}>
          <a
            className="nav-link"
            href={link.scrollTo}
            rel="noreferrer"
          >{` ${link.name} `}</a>
        </li>
      ))}
    </ul>
  )
}

export default NavLinks
