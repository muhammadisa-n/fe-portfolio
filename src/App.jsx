import { useEffect } from "react"
import Header from "./components/Header"
import Contact from "./layouts/Contact"
import Home from "./layouts/Home"
import Projects from "./layouts/Projects"
import Experience from "./layouts/Experience"
import AOS from "aos"
import "aos/dist/aos.css"
import AboutMe from "./layouts/AboutMe"
import Footer from "./components/Footer"
import Education from "./layouts/Education"
import Skill from "./layouts/Skill"
function App() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <div>
        <Header />
        <Home />
        <AboutMe />
        <Skill />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
