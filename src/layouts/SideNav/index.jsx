import React, { useEffect, useState } from "react"
import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai"
import { GrProjects } from "react-icons/gr"
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md"
import NavItemMobile from "../../components/NavItemMobile"
import NavItem from "../../components/NavItem"
const SideNav = () => {
  const [nav, setNav] = useState(false)
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  )
  useEffect(() => {
    localStorage.setItem("theme", theme)
    const localTheme = localStorage.getItem("theme")
    document.querySelector("html").classList.add(localTheme)
  }, [theme])
  const handleNav = () => {
    setNav(!nav)
  }
  const darkmodeToggle = () => {
    if (localStorage.getItem("theme") === "dark") {
      setTheme("light")
      document.querySelector("html").classList.remove("dark")
    } else {
      localStorage.removeItem("theme")
      setTheme("dark")
      document.querySelector("html").classList.remove("light")
      localStorage.setItem("theme", theme)
    }
  }
  const dataNav = [
    {
      title: "Home",
      linkTo: "home",
      icon: (
        <AiOutlineHome
          size={20}
          className="text-primary_light dark:text-primary_dark"
        />
      ),
    },
    {
      title: "Experience",
      linkTo: "experience",
      icon: (
        <GrProjects
          size={20}
          className="text-primary_light dark:text-primary_dark"
        />
      ),
    },
    {
      title: "Projects",
      linkTo: "projects",
      icon: (
        <AiOutlineProject
          size={20}
          className="text-primary_light dark:text-primary_dark"
        />
      ),
    },
    {
      title: "Contact",
      linkTo: "contact",
      icon: (
        <AiOutlineMail
          size={20}
          className="text-primary_light dark:text-primary_dark"
        />
      ),
    },
  ]
  return (
    <div>
      <AiOutlineMenu
        size={35}
        onClick={handleNav}
        className="fixed bg-transparent  top-4 right-4 z-[99] md:hidden text-dark dark:text-light"
      />
      {nav ? (
        <div className="fixed z-20 flex flex-col items-center justify-center w-full h-screen bg-light/70 dark:bg-dark/70">
          {dataNav.map((item, index) => (
            <NavItemMobile
              key={index}
              linkTitle={item.title}
              linkTo={item.linkTo}
              handleClick={handleNav}
            >
              {item.icon}
            </NavItemMobile>
          ))}
          {theme === "dark" ? (
            <button
              onClick={darkmodeToggle}
              className="w-[75%] flex justify-center items-center  shadow-lg bg-light shadow-secondary_dark dark:shadow-secondary_light m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 rounded-full font-semibold"
            >
              <MdDarkMode
                size={20}
                className="text-primary_light dark:text-primary_dark"
              />
              <span className="pl-4">Light Mode</span>
            </button>
          ) : (
            <button
              onClick={darkmodeToggle}
              className="w-[75%] flex justify-center items-center  shadow-lg bg-light shadow-secondary_dark dark:shadow-secondary_light m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 rounded-full font-semibold"
            >
              <MdOutlineDarkMode
                size={20}
                className="text-primary_light dark:text-primary_dark"
              />
              <span className="pl-4">Dark Mode</span>
            </button>
          )}
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          {dataNav.map((item, index) => (
            <NavItem key={index} linkTitle={item.title} linkTo={item.linkTo}>
              {item.icon}
            </NavItem>
          ))}
          {theme === "dark" ? (
            <button
              onClick={darkmodeToggle}
              title="Light Mode"
              className="p-4 m-2 duration-300 ease-in bg-gray-100 rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110"
            >
              <MdDarkMode
                size={20}
                className="text-primary_light dark:text-primary_dark"
              />
            </button>
          ) : (
            <button
              onClick={darkmodeToggle}
              title="Dark Mode"
              className="p-4 m-2 duration-300 ease-in bg-gray-100 rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110"
            >
              <MdOutlineDarkMode
                size={20}
                className="text-primary_light dark:text-primary_dark"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default SideNav
