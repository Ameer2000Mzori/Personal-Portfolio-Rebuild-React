import React from 'react'
import { NavBarData } from './NavBarData.js'
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
            {NavBarData.map((nav) => {
              return (
                <li>
                  <a href={`#${nav.title}`}>{nav.title}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar
