import { NavBarData } from './NavBarData.js'
const NavLinks = () => {
  return (
    <>
      <div className="nav-Links">
        <ul>
          {NavBarData.map((nav, index) => {
            return (
              <li key={index}>
                <a href={`#${nav.title}`}>{nav.title}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default NavLinks
