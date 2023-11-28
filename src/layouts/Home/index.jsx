import React from "react"
import HeroImage1 from "../../assets/hero-image.jpg"
import HeroImage2 from "../../assets/hero2.jpg"
import { TypeAnimation } from "react-type-animation"
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { MdOutlineContactPage } from "react-icons/md"
import { SocialList } from "../../components/SocialList"
import HeroList from "../../components/HeroList"
const Home = () => {
  const socialData = [
    {
      title: "Twitter",
      link: "https://twitter.com/muhammadisa226",
      target: "_blank",
      icon: <FaTwitter size={30} className="cursor-pointer dark:text-light" />,
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/muhissaa/",
      target: "_blank",
      icon: (
        <FaInstagram size={30} className="cursor-pointer dark:text-light" />
      ),
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/muhammad-isa-n/",
      target: "_blank",
      icon: (
        <FaLinkedinIn size={30} className="cursor-pointer dark:text-light" />
      ),
    },
    {
      title: "My Resume",
      target: "_self",
      link: "https://docs.google.com/uc?export=download&id=1IFpr2MOad5GhwM40AOcMjrxd4W5sa_Or",
      icon: (
        <MdOutlineContactPage
          size={30}
          className="cursor-pointer dark:text-light"
        />
      ),
    },
  ]
  const dataTyping = [
    "Student",
    2000,
    "Backend Developer",
    2000,
    "Frontend Developer",
    2000,
    "Fullstack Web Developer",
    2000,
  ]
  return (
    <div id="home">
      <HeroList heroImage1={HeroImage1} heroImage2={HeroImage2} />
      <div className="absolute top-0 left-0 w-full h-screen bg-light/50 dark:bg-dark/50">
        <div className="max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="text-4xl font-bold text-dark sm:text-5xl dark:text-light font-pacifico">
            I'm Muhammad Isa
          </h1>
          <h2 className="flex pt-4 text-2xl text-dark sm:text-3xl dark:text-light font-monserrat">
            I'm a
            <TypeAnimation
              sequence={dataTyping}
              cursor={true}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[150px] w-full">
            {socialData.map((item, index) => (
              <SocialList
                key={index}
                target={item.target}
                linkHref={item.link}
                title={item.title}
              >
                {item.icon}
              </SocialList>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
