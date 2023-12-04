import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import Header from "@components/Header"
import Home from "@layouts/Home"
import AboutMe from "@layouts/AboutMe"
import Skill from "@layouts/Skill"
import Projects from "@layouts/Projects"
import Experience from "@layouts/Experience"
import Education from "@layouts/Education"
import Contact from "@layouts/Contact"
import Footer from "@components/Footer"
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
