import React from "react"

const ProjectItem = ({ img, title }) => {
  return (
    <div className="relative flex items-center justify-center w-full h-auto shadow-lg shadow-secondary_light rounded-xl group dark:shadow-secondary_dark hover:bg-gradient-to-r from-light to-primary_dark dark:hover:bg-gradient-to-l from-dark to-primary_light">
      <img
        src={img}
        alt={title}
        className="rounded-xl group-hover:opacity-10"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold tracking-wider text-center text-light dark:text-dark">
          {title}
        </h3>
        <p className="pt-2 pb-4 font-semibold text-center text-light dark:text-dark">
          React JS
        </p>
        <a href="/">
          <p className="p-3 text-lg font-bold text-center bg-white rounded-lg cursor-pointer text-secondary_light dark:text-secondary_dark">
            More Info
          </p>
        </a>
      </div>
    </div>
  )
}

export default ProjectItem
