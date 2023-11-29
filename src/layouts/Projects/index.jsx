// import  { useState } from "react"
import ProjectItem from "../../components/ProjectItem"
import porto1 from "../../assets/clone_trello.png"
import porto2 from "../../assets/hackjog.png"
import porto3 from "../../assets/digital-library.png"
import porto4 from "../../assets/crime-detection.png"
import porto5 from "../../assets/ratetol.png"
const Projects = () => {
  // const [showModal, setShowModal] = useState(false)
  const dataProject = [
    {
      id: 1,
      title: "Clone Trello App",
      type_project: "Personal Project",
      img: porto1,
    },
    {
      id: 2,
      title: "Hackjog ",
      type_project: "Company Project",
      img: porto2,
    },
    {
      id: 3,
      title: "Digital Library",
      type_project: "Personal Project",
      img: porto3,
    },
    {
      id: 4,
      title: "Crime Detection Api",
      type_project: "Personal Project",
      img: porto4,
    },
    {
      id: 4,
      title: "Determining Toll Rates Based on Vehicle Types",
      type_project: "Personal Project",
      img: porto5,
    },
  ]
  const page1 = dataProject.slice(0, 4)
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
        {page1.map((item) => (
          <ProjectItem
            img={item.img}
            title={item.title}
            type_project={item.type_project}
            key={item.id}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
