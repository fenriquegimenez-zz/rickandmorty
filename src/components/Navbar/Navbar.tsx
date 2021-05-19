import React from "react"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      role="navigation"
    >
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">The Rick and Morty APP</a>
        </Link>
        <ul className="navbar-nav d-flex justify-content-around">
          <li className="nav-item">
            <Link href="characters">
              <a>Characters</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="locations">
              <a>Locations</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="episodes">
              <a>Episodes</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </div>
      <style jsx>{`
        a {
          text-decoration: none;
          color: gray;
          margin-left: 10px;
        }
      `}</style>
    </nav>
  )
}

export default Navbar
