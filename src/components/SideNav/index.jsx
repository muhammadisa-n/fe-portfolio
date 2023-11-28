import React, { useEffect, useState } from "react"
import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai"
import { BsPerson } from "react-icons/bs"
import { GrProjects } from "react-icons/gr"
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md"
import { Link } from "react-scroll"
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
  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />
      {nav ? (
        <div className="fixed z-20 flex flex-col items-center justify-center w-full h-screen bg-white/90">
          <Link
            activeClass="active"
            onClick={handleNav}
            to="main"
            spy={true}
            smooth={true}
            className="w-[75%] flex justify-center items-center  shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 rounded-full"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </Link>
          <Link
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            onClick={handleNav}
            className="w-[75%] flex justify-center items-center  shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 rounded-full"
          >
            <GrProjects size={20} />
            <span className="pl-4">Work</span>
          </Link>
          <Link
            activeClass="active"
            onClick={handleNav}
            to="projects"
            spy={true}
            smooth={true}
            className="w-[75%] flex justify-center items-center  shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 rounded-full"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </Link>
          <a
            href="https://drive.google.com/file/d/1IFpr2MOad5GhwM40AOcMjrxd4W5sa_Or/view?usp=sharing"
            target="_blank"
            onClick={handleNav}
            className="w-[75%] flex justify-center items-center  shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 rounded-full transi"
          >
            <BsPerson size={20} />
            <span className="pl-4">My Resume</span>
          </a>
          <Link
            activeClass="active"
            onClick={handleNav}
            to="contact"
            spy={true}
            smooth={true}
            className="w-[75%] flex justify-center items-center  shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 rounded-full"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </Link>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[25%] z-10  ">
        <div className="flex flex-col">
          <Link
            activeClass="active"
            to="main"
            spy={true}
            smooth={true}
            title="Home"
            className="p-4 m-2 duration-300 ease-in bg-gray-100 rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110"
          >
            <AiOutlineHome size={20} />
          </Link>
          <Link
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            title="Work"
            className="p-4 m-2 duration-300 ease-in bg-gray-100 rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110"
          >
            <GrProjects size={20} />
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            title="Projects"
            className="p-4 m-2 duration-300 ease-in bg-gray-100 rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110"
          >
            <AiOutlineProject size={20} />
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            title="contact"
            className="p-4 m-2 duration-300 ease-in bg-gray-100 rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110"
          >
            <AiOutlineMail size={20} />
          </Link>
          <a
            href="https://drive.google.com/file/d/1IFpr2MOad5GhwM40AOcMjrxd4W5sa_Or/view?usp=sharing"
            target="_blank"
            title="My Resume"
            className="p-4 m-2 duration-300 ease-in bg-gray-100 rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110"
          >
            <BsPerson size={20} />
          </a>
          {theme === "dark" ? (
            <span
              onClick={darkmodeToggle}
              title="Light Mode"
              className="p-4 m-2 duration-300 ease-in bg-gray-100 rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110"
            >
              <MdDarkMode size={20} />
            </span>
          ) : (
            <span
              onClick={darkmodeToggle}
              title="Dark Mode"
              className="p-4 m-2 duration-300 ease-in bg-gray-100 rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110"
            >
              <MdOutlineDarkMode size={20} />
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default SideNav
