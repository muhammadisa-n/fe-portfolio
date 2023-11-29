const ProjectItem = ({ img, title, type_project }) => {
  return (
    <div className="relative flex items-center justify-center w-full h-auto transition duration-300 ease-in shadow-lg shadow-secondary_light rounded-xl group dark:shadow-secondary_dark hover:bg-gradient-to-r from-light to-primary_dark">
      <img
        src={img}
        alt={title}
        className="transition-all duration-300 rounded-xl group-hover:opacity-10"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold tracking-wider text-center text-dark dark:text-light">
          {title}
        </h3>
        <p className="pt-2 pb-4 font-semibold text-center text-light dark:text-dark">
          {type_project}
        </p>
        <a href="/">
          <p className="p-1 text-lg font-bold text-center rounded-full cursor-pointer bg-primary_light text-light dark:text-light dark:bg-primary_dark">
            More Info
          </p>
        </a>
      </div>
    </div>
  )
}

export default ProjectItem
