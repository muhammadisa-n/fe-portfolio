import React from "react"
import HeroImage from "../../assets/hero-image.jpg"
import HeroImage2 from "../../assets/hero2.jpg"
import { TypeAnimation } from "react-type-animation"
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"
const Main = () => {
  return (
    <div id="main">
      <img
        src={HeroImage}
        alt="HeroImage"
        className="w-full h-screen object-cover   hidden lg:block lg:scale-x-[-1]"
      />
      <img
        src={HeroImage2}
        alt="HeroImage"
        className="w-full h-screen block lg:hidden   object-cover lg:object-right  lg:scale-x-[-1"
      />
      <div className="w-full h-screen absolute top-0 left-0  bg-white/50 ">
        <div className="max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800 ">
            I'm Muhammad Isa
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                "Backend Developer",
                2000,
                "Frontend Developer",
                2000,
                "Fullstack Web Developer",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[150px] w-full">
            <FaTwitter size={20} className="cursor-pointer" />
            <FaInstagram size={20} />
            <FaLinkedinIn size={20} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
