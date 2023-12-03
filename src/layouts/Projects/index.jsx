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
import { useState } from "react"
const Projects = () => {
  const dataProject = [
    {
      id: 1,
      title: "Clone Trello App",
      type_project: "Personal Project",
      img: porto1,
      details:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolores atque sapiente labore fugiat, soluta optio rerum deserunt quisquam odio? Commodi, perferendis ab sunt accusamus voluptatibus dolore optio ex quis fuga sit distinctio similique incidunt itaque voluptatum quaerat? Perspiciatis, quia labore aspernatur temporibus numquam voluptas sed, atque perferendis incidunt accusamus earum praesentium doloremque consequuntur iste ad impedit molestiae repudiandae.",
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
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolores atque sapiente labore fugiat, soluta optio rerum deserunt quisquam odio? Commodi,.",
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
      details:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolores atque sapiente labore fugiat, soluta optio rerum deserunt quisquam odio? Commodi,.",
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
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolores atque sapiente labore fugiat, soluta optio rerum deserunt quisquam odio? Commodi,Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolores atque sapiente labore fugiat, soluta optio rerum deserunt quisquam odio? Commodi,.",
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
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolores atque sapiente labore fugiat, soluta optio rerum deserunt quisquam odio? Commodi,Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolores atque sapiente labore fugiat, soluta optio rerum deserunt quisquam odio? Commodi,.",
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
              <p className="text-dark dark:text-light2">
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
