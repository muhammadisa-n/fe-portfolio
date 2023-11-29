import { Link } from "react-scroll"

const NavItemMobile = ({ children, linkTitle, handleClick, linkTo }) => {
  return (
    <Link
      activeClass="active-mobile"
      onClick={handleClick}
      to={linkTo}
      spy={true}
      duration={250}
      smooth={true}
      className="w-[75%] flex justify-center items-center  shadow-lg bg-light shadow-secondary_dark dark:shadow-secondary_light m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200 rounded-full font-semibold"
    >
      {children}
      <span className="pl-4">{linkTitle}</span>
    </Link>
  )
}

export default NavItemMobile
