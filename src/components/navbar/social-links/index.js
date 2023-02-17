import React from 'react'

const SocialLinks = ({ icons }) => {
  return (
    <ul className="nav-icons">
      {icons.map((icon) => (
        <li key={icon.id}>
          <a href={icon.href} target="_blank" className="nav-icon">
            <i className={icon.icon}></i>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialLinks
