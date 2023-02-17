import React from 'react'

import logo from '../../images/logo.svg'
import NavLinks from './nav-links'
import SocialLinks from './social-links'

const Navbar = ({ nav }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <NavLinks links={nav.pageLinks} />
        <SocialLinks icons={nav.socials} />
      </div>
    </nav>
  )
}

export default Navbar
