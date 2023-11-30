// import  { useState } from "react"
import ProjectItem from "../../components/ProjectItem"
import porto1 from "../../assets/clone_trello.png"
import porto2 from "../../assets/hackjog.png"
import porto3 from "../../assets/digital-library.png"
import porto4 from "../../assets/crime-detection.png"
import porto5 from "../../assets/ratetol.png"
import expressImage from "../../assets/expressjs.png"
import reactImage from "../../assets/react.png"
import mysqlImage from "../../assets/mysql.png"
import nodeJsImage from "../../assets/nodejs.png"
import vueImage from "../../assets/Vue.png"
import flutterImage from "../../assets/flutter.png"
import laravelImage from "../../assets/laravel.png"
import phpImage from "../../assets/php.png"
import pythonImage from "../../assets/python.png"
import flaskImage from "../../assets/flask.png"
import { IoMdClose } from "react-icons/io"
import { useEffect, useState } from "react"
import { data } from "autoprefixer"
const Projects = () => {
  const dataProject = [
    {
      id: 1,
      title: "Clone Trello App",
      type_project: "Personal Project",
      img: porto1,
      details:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolores atque sapiente labore fugiat, soluta optio rerum deserunt quisquam odio? Commodi, perferendis ab sunt accusamus voluptatibus dolore optio ex quis fuga sit distinctio similique incidunt itaque voluptatum quaerat? Perspiciatis, quia labore aspernatur temporibus numquam voluptas sed, atque perferendis incidunt accusamus earum praesentium doloremque consequuntur iste ad impedit molestiae repudiandae.",
      tech_use: [reactImage, expressImage, mysqlImage],
    },

    {
      id: 2,
      title: "Hackjog ",
      type_project: "Company Project",
      img: porto2,
      details:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolores atque sapiente labore fugiat, soluta optio rerum deserunt quisquam odio? Commodi,.",
      tech_use: [vueImage, expressImage, mysqlImage],
    },
    {
      id: 3,
      title: "Digital Library",
      type_project: "Personal Project",
      img: porto3,
      details:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolores atque sapiente labore fugiat, soluta optio rerum deserunt quisquam odio? Commodi,.",
      tech_use: [phpImage, laravelImage, mysqlImage],
    },
    {
      id: 4,
      title: "Crime Detection Api",
      type_project: "Personal Project",
      img: porto4,
      details:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolores atque sapiente labore fugiat, soluta optio rerum deserunt quisquam odio? Commodi,Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolores atque sapiente labore fugiat, soluta optio rerum deserunt quisquam odio? Commodi,.",
      tech_use: [flutterImage, pythonImage, flaskImage, mysqlImage],
    },
    {
      id: 5,
      title: "Determining Toll Rates Based on Vehicle Types",
      type_project: "Personal Project",
      img: porto5,
      details:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolores atque sapiente labore fugiat, soluta optio rerum deserunt quisquam odio? Commodi,Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolores atque sapiente labore fugiat, soluta optio rerum deserunt quisquam odio? Commodi,.",
      tech_use: [flutterImage, pythonImage, flaskImage, mysqlImage],
    },
  ]
  const [selectedData, setSelectedData] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const showSingleData = (data) => {
    setShowModal(true)
    setSelectedData(data)
  }
  const closeModal = () => {
    setShowModal(false)
    setSelectedData(null)
  }
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
            handleClick={() => showSingleData(item)}
          />
        ))}
      </div>
      {showModal && (
        <div className="h-screen fixed inset-0 flex items-center justify-center bg-white dark:bg-dark bg-opacity-30 backdrop-blur z-[10] overflow-y-auto transition-all ease-in-out duration-500">
          <div className="container relative pt-36">
            <div className="md:w-[500px] w-[300px] px-4 mx-auto ">
              <img
                src={selectedData.img}
                alt={selectedData.img}
                className="w-full mx-auto mt-28 md:mt-0"
              />
              <div
                className="absolute lg:right-0 right-5 top-[25%]  md:top-[15%] text-light cursor-pointer md:right-[5%]"
                onClick={closeModal}
              >
                <IoMdClose size={30} className="text-dark dark:text-light" />
              </div>
            </div>
            <div className="w-full px-4 mx-auto mt-10 mb-4 text-dark dark:text-light">
              <h1 className="mb-10 text-2xl font-semibold">
                Project Background
              </h1>
              <p className="mb-6 text-base font-medium">
                {selectedData.details}
              </p>
              <h1 className="text-2xl font-semibold">Technology Used</h1>
              <div className="flex flex-wrap items-center justify-start mb-10 ">
                {selectedData.tech_use.map((item, index) => (
                  <a
                    key={index}
                    href="/"
                    className="max-w-[100px] mx-2 py-2   transition duration-300 hover:grayscale-0 hover:opacity-100 lg:mx-4 xl:mx-6 "
                  >
                    <img src={item} alt="HTML" />
                  </a>
                ))}
              </div>
              <div className="my-10">
                <a
                  href=""
                  className="p-3 mt-6 font-semibold rounded-full bg-primary_light hover:bg-primary_dark ring-1 text-dark"
                >
                  Link Project
                </a>
                <a
                  href=""
                  className="p-3 mx-6 mt-6 font-semibold rounded-full bg-primary_light hover:bg-primary_dark ring-1 text-dark"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects
