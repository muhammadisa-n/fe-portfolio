import React from "react"
import { Link } from "react-scroll"

const NavItem = ({ children, linkTitle, linkTo }) => {
  return (
    <Link
      activeClass="active-mobile"
      to={linkTo}
      spy={true}
      smooth={true}
      title={linkTitle}
      className="p-4 m-2 duration-300 ease-in bg-gray-100 rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110"
    >
      {children}
    </Link>
  )
}

export default NavItem
