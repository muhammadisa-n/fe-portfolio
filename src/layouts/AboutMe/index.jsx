import { SocialList } from "@components/SocialList"
import { FaInstagram, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa"
const AboutMe = () => {
  const socialData = [
    {
      title: "Twitter",
      link: "https://twitter.com/muhammadisa226",
      icon: <FaTwitter size={30} className="cursor-pointer dark:text-light" />,
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/muhissaa/",
      icon: (
        <FaInstagram size={30} className="cursor-pointer dark:text-light" />
      ),
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/muhammad-isa-n/",
      icon: (
        <FaLinkedinIn size={30} className="cursor-pointer dark:text-light" />
      ),
    },
    {
      title: "My Github",

      link: "https://github.com/muhammadisa226",
      icon: <FaGithub size={30} className="cursor-pointer dark:text-light" />,
    },
  ]
  return (
    <div
      id="aboutme"
      className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 md:pr-20 lg:pr-0"
    >
      <h1 className="mt-5 mb-10 text-4xl font-bold text-center lg:mb-20 lg:mt-10 text-primary_light dark:text-primary_dark">
        About Me
      </h1>
      <div className="container">
        <div className="flex flex-wrap">
          <div
            className="w-full px-4 mb-10 lg:w-1/2"
            data-aos="fade-right"
            data-aos-duration={1000}
            data-aos-delay={300}
          >
            <h4 className="mb-3 text-lg font-bold uppercase text-primary_light dark:text-primary_dark">
              About Me
            </h4>
            <p className="max-w-xl text-base font-medium text-dark dark:text-light lg:text-lg">
              As a Web Developer, I have experience in developing end-to-end web
              applications. I have expertise in frontend development using HTML,
              CSS, and JavaScript, along with proficiency in CSS frameworks like
              Bootstrap and Tailwind CSS. On the backend side, I am skilled in
              programming languages such as Python and PHP, with experience in
              building APIs using Flask and creating websites using Laravel.
            </p>
          </div>
          <div
            className="w-full px-4 mt-1 lg:w-1/2"
            data-aos="fade-left"
            data-aos-duration={1000}
            data-aos-delay={500}
          >
            <h4 className="mb-3 text-lg font-bold uppercase text-primary_light dark:text-primary_dark">
              Connect With Me
            </h4>
            <p className="max-w-xl font-medium text-basetext-dark dark:text-light lg:text-lg">
              {
                "I'm delighted to connect with you and discuss everything related to technology, software development, or any other interesting topics. Please feel free to contact me through the social media profiles listed below.Let's collaborate, share ideas, and build beneficial relationships together! I'm looking forward to hearing from you soon."
              }
            </p>
            <div className="flex items-center mt-3 dark:text-white">
              {socialData.map((item, index) => (
                <SocialList key={index} title={item.title} linkHref={item.link}>
                  {item.icon}
                </SocialList>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
