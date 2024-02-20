import React from 'react'

const NavBar = () => {
  return (
    <>
      {/* <!-- animation button --> */}
      <div className="open-Close-Btn">
        <span className="bar-One"></span>
        <span className="bar-Two"></span>
      </div>

      {/* <!-- navbar --> */}
      <nav className="navbar active">
        <div className="decoration-Bar">
          <div className="cercle-One"></div>
          <div className="line-El"></div>
          <div className="cercle-Two"></div>
        </div>
        <div className="nav-Links">
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">PROJECTS</a>
            </li>
            <li>
              <a href="#">GALLERY</a>
            </li>
            <li>
              <a href="#">BLOG</a>
            </li>
            <li>
              <a href="#">CLIENTS</a>
            </li>
            <li>
              <a href="#">PRICING</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar
