import React from "react"
import ProjectItem from "../../components/ProjectItem"
import porto1 from "../../assets/porto.png"
import porto2 from "../../assets/porto2.png"
import porto3 from "../../assets/porto3.png"
import porto4 from "../../assets/porto4.png"
const Projects = () => {
  return (
    <div
      id="projects"
      className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 md:pr-20 lg:pr-0"
    >
      <h1 className="text-4xl font-bold text-center text-primary_light dark:text-primary_dark">
        Projects
      </h1>
      <p className="py-8 text-center text-dark dark:text-light">
        Here are some of the recent projects I have worked on
      </p>
      <div className="grid gap-12 sm:grid-cols-2">
        <ProjectItem img={porto1} title="porto title" />
        <ProjectItem img={porto2} title="porto title" />
        <ProjectItem img={porto3} title="porto title" />
        <ProjectItem img={porto4} title="porto title" />
      </div>
    </div>
  )
}

export default Projects
