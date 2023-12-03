import HeroImage1 from "../../assets/hero1.jpg"
import HeroImage2 from "../../assets/hero2.jpg"
import { TypeAnimation } from "react-type-animation"
import HeroList from "../../components/HeroList"
const Home = () => {
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
        <div className="max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center ">
          <h1 className="-mt-32 text-4xl font-bold text-primary_light sm:text-5xl dark:text-primary_dark font-pacifico md:-mt-0">
            {"I'm Muhammad Isa"}
          </h1>
          <h2 className="flex pt-4 text-2xl text-dark sm:text-3xl dark:text-light font-monserrat">
            {"I'm a"}
            <TypeAnimation
              sequence={dataTyping}
              cursor={true}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Home
