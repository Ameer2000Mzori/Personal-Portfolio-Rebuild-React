import React, { useState, useEffect } from 'react'
import NavLinks from './NavLinks'
const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false)

  const toggleNav = () => {
    setNavOpen(!navOpen)
  }

  return (
    <>
      {/* <!-- animation button --> */}
      <div onClick={toggleNav} className={`open-Close-Btn  `}>
        <span className={`bar-One ${navOpen && 'active'} `}></span>
        <span className={`bar-Two ${navOpen && 'active'} `}></span>
      </div>

      {/* <!-- navbar --> */}
      <nav className={`navbar  ${!navOpen && 'active'} `}>
        <div className="decoration-Bar">
          <div className="cercle-One"></div>
          <div className="line-El"></div>
          <div className="cercle-Two"></div>
        </div>
        <NavLinks />
      </nav>
    </>
  )
}

export default NavBar
