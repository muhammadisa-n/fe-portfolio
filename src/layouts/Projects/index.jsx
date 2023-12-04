import ProjectItem from "@components/ProjectItem"
const porto1 = new URL("@assets/clone_trello.png", import.meta.url)
const porto2 = new URL("@assets/hackjog.png", import.meta.url)
const porto3 = new URL("@assets/digital_library.png", import.meta.url)
const porto4 = new URL("@assets/crime_detect.png", import.meta.url)
const porto5 = new URL("@assets/ratetol.png", import.meta.url)
const expressImage = new URL("@assets/expressjs.png", import.meta.url)
const reactImage = new URL("@assets/react.png", import.meta.url)
const mysqlImage = new URL("@assets/mysql.png", import.meta.url)
const nodeJsImage = new URL("@assets/nodejs.png", import.meta.url)
const vueImage = new URL("@assets/Vue.png", import.meta.url)
const flutterImage = new URL("@assets/flutter.png", import.meta.url)
const laravelImage = new URL("@assets/laravel.png", import.meta.url)
const phpImage = new URL("@assets/php.png", import.meta.url)
const pythonImage = new URL("@assets/python.png", import.meta.url)
const flaskImage = new URL("@assets/flask.png", import.meta.url)
import { IoMdClose } from "react-icons/io"
import { useState } from "react"
const Projects = () => {
  const dataProject = [
    {
      id: 1,
      title: "Clone Trello App",
      type_project: "Personal Project",
      img: porto1,
      details:
        "Creating Website Like Trello , Using React JS in Frontend, And Express JS For Backend",
      tech_use: [
        {
          name: "ReactJs",
          img_url: reactImage,
        },
        {
          name: "ExpressJs",
          img_url: expressImage,
        },
        {
          name: "NodeJs",
          img_url: nodeJsImage,
        },
        {
          name: "MySQL",
          img_url: mysqlImage,
        },
      ],
      link_project: "https://github.com/muhammadisa226/fe-clone-trello-app",
      link_demo: false,
    },

    {
      id: 2,
      title: "Hackjog ",
      type_project: "Company Project",
      img: porto2,
      details:
        "Hackjog is a digital industrial ecosystem based on D.I.Y in the form of hexahelix collaboration. Focuses on growing the digital industry and transforming society through Artificial Intelligence. This website contains information about the Hackjog event",
      tech_use: [
        {
          name: "VueJs",
          img_url: vueImage,
        },
        {
          name: "NodeJs",
          img_url: nodeJsImage,
        },
        {
          name: "expressJs",
          img_url: expressImage,
        },
        {
          name: "MySQL",
          img_url: mysqlImage,
        },
      ],
      link_project: "https://github.com/muhammadisa226/hackjog-landingpage",
      link_demo: false,
    },
    {
      id: 3,
      title: "Digital Library",
      type_project: "Personal Project",
      img: porto3,
      details: "Create a digital library system using php Laravel 10 framework",
      tech_use: [
        {
          name: "PHP",
          img_url: phpImage,
        },
        {
          name: "Laravel",
          img_url: laravelImage,
        },
        {
          name: "MySQL",
          img_url: mysqlImage,
        },
      ],
      link_project:
        "https://github.com/muhammadisa226/Digital-Library-Laravel-10",
      link_demo: false,
    },
    {
      id: 4,
      title: "Crime Detection Api",
      type_project: "Personal Project",
      img: porto4,
      details:
        "In this project I worked with a team of 2 people, my task was to make a Rest api using the python flask framework, and create a deep learning model using yolov5",
      tech_use: [
        {
          name: "Flutter",
          img_url: flutterImage,
        },
        {
          name: "Python",
          img_url: pythonImage,
        },
        {
          name: "Flask",
          img_url: flaskImage,
        },
        {
          name: "MySQL",
          img_url: mysqlImage,
        },
      ],
      link_project: "https://github.com/muhammadisa226/crime-detection-api.git",
      link_demo: false,
    },
    {
      id: 5,
      title: "Determining Toll Rates Based on Vehicle Types",
      type_project: "Personal Project",
      img: porto5,
      details:
        "In this project I work with a team of 4 people, my task is to make a rest api using the framework from python flask, and integrate the api with the mobile app",
      tech_use: [
        {
          name: "Flutter",
          img_url: flutterImage,
        },
        {
          name: "Python",
          img_url: pythonImage,
        },
        {
          name: "Flask",
          img_url: flaskImage,
        },
        {
          name: "MySQL",
          img_url: mysqlImage,
        },
      ],
      link_project: "https://github.com/muhammadisa226/RateTol-Flask.git",
      link_demo: false,
    },
  ]
  const [selectedData, setSelectedData] = useState(null)
  const [showModalDetail, setShowModaDetail] = useState(false)
  const [showModalAllProject, setShowModalAllProject] = useState(false)
  const showSingleData = (data) => {
    setShowModaDetail(true)
    setSelectedData(data)
  }
  const handleShowAllProjects = () => {
    setShowModalAllProject(true)
  }

  const page1 = dataProject.slice(0, 4)
  return (
    <>
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
        <div className="flex items-center justify-center w-full mt-10 font-semibold text-light_button_text dark:text-dark_button_text">
          <button
            className="p-3 transition-all duration-300 rounded-sm bg-primary_light hover:bg-primary_dark hover:bg-opacity-80 dark:hover:bg-primary_light dark:hover:bg-opacity-20"
            onClick={() => handleShowAllProjects()}
          >
            View All Projects
          </button>
        </div>

        {showModalAllProject && (
          <div className="h-screen fixed inset-0 flex items-center justify-center bg-light dark:bg-dark bg-opacity-50 dark:bg-opacity-50 backdrop-blur z-[10] overflow-y-auto transition-all ease-in-out duration-500">
            <div className="relative max-w-[1040px] m-auto md:pl-20 p-4 py-16 md:pr-20 lg:pr-0 ">
              <div className="absolute lg:right-0">
                <button
                  onClick={() => setShowModalAllProject(false)}
                  className="absolute top-0 px-1 py-1 rounded-full bg-primary_light text-light_button_text dark:text-dark_button_text"
                >
                  <IoMdClose size={25} className="text-dark dark:text-light" />
                </button>
              </div>
              <h1 className="text-4xl font-bold text-center text-primary_light dark:text-primary_dark">
                All Projects
              </h1>
              <p className="py-8 text-center text-dark dark:text-light">
                Here are some of the recent projects I have worked on
              </p>
              <div className="grid gap-12 sm:grid-cols-2">
                {dataProject.map((item) => (
                  <ProjectItem
                    img={item.img}
                    title={item.title}
                    type_project={item.type_project}
                    key={item.id}
                    handleClick={() => showSingleData(item)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      {showModalDetail && (
        <div className="h-screen fixed inset-0 flex items-center justify-center bg-light dark:bg-dark bg-opacity-50 dark:bg-opacity-50 backdrop-blur z-[10] overflow-y-auto transition-all ease-in-out duration-500">
          <div className="relative px-4 pt-4 my-10">
            <h1 className="mt-20 text-4xl font-bold md:mt-0 text-dark dark:text-light">
              {selectedData.title}
            </h1>
            <button
              onClick={() => setShowModaDetail(false)}
              className="absolute top-0 right-0 hidden px-1 py-1 rounded-full bg-primary_light text-light_button_text dark:text-dark_button_text md:block"
            >
              <IoMdClose size={25} className="text-dark dark:text-light" />
            </button>
            <div className="mt-4 ">
              <a
                href={selectedData.link_project}
                className="px-2 py-1 cursor-pointer bg-primary_light text-light dark:bg-primary_dark"
              >
                Link Project
              </a>
              {selectedData.link_demo ? (
                <a
                  href="/"
                  className="px-2 py-1 ml-4 cursor-pointer bg-primary_light text-light dark:bg-primary_dark"
                >
                  Live Demo
                </a>
              ) : (
                <a className="px-2 py-1 ml-4 cursor-not-allowed bg-slate-600 text-light disabled dark:bg-slate-400">
                  Live Demo
                </a>
              )}
            </div>

            <div className="mt-10 text-xl font-semibold text-dark dark:text-light ">
              <p>Technology Used</p>
            </div>
            <div className="flex gap-2 px-4 pt-4 overflow-x-auto text-color-primary">
              {selectedData.tech_use.map((tech, index) => (
                <div
                  className="flex flex-col items-center justify-center w-20 p-2 border rounded md:w-36 border-primary_light dark:border-primary_dark"
                  key={index}
                >
                  <img
                    src={tech.img_url}
                    alt={tech.img_url}
                    className="w-[40px] md:w-[60px]"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 px-4 pt-4 text-color-primary sm:flex-nowrap">
              <img
                src={selectedData.img}
                alt={selectedData.img}
                className="object-cover  rounded w-[500px] h-[250px] "
              />
              <p className="font-medium text-dark dark:text-light2">
                {selectedData.details}
              </p>
            </div>
            <div className="flex items-center justify-center mt-5 md:hidden">
              <button
                onClick={() => setShowModaDetail(false)}
                className="p-2 text-lg font-medium rounded-lg bg-primary_light text-light_button_text dark:text-dark_button_text dark:bg-primary_dark"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Projects
