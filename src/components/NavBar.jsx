import React from 'react'
import NavLinks from './NavLinks'
const NavBar = () => {
  return (
    <>
      {/* <!-- animation button --> */}
      <div className="open-Close-Btn">
        <span className="bar-One"></span>
        <span className="bar-Two"></span>
      </div>

      {/* <!-- navbar --> */}
      <nav className="navbar ">
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
