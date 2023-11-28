import React from "react"
import ProjectItem from "../ProjectItem"
import porto1 from "../../assets/porto.png"
import porto2 from "../../assets/porto2.png"
import porto3 from "../../assets/porto3.png"
import porto4 from "../../assets/porto4.png"
const Projects = () => {
  return (
    <div
      id="projects"
      className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 dark:bg-[#001b5e]"
    >
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="py-8 text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
        alias corrupti a quos modi, suscipit amet ullam quis magnam repellendus,
        maiores, natus praesentium debitis expedita consectetur laudantium
        similique ex rerum!
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
