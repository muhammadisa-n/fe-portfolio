const ProjectItem = ({ img, title, type_project, handleClick }) => {
  return (
    <div className="relative flex items-center justify-center w-full h-auto transition duration-300 ease-in shadow-lg shadow-secondary_light rounded-xl group dark:shadow-secondary_dark hover:bg-gradient-to-r from-light to-primary_dark">
      <img
        src={img}
        alt={title}
        className="transition-all duration-300 rounded-xl group-hover:opacity-10"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-hidden">
        <h3 className="mt-2 text-base font-bold tracking-wider text-center lg:text-2xl text-dark dark:text-light md:text-lg ">
          {title}
        </h3>
        <p className="mt-2 mb-4 font-semibold text-center text-primary_light dark:text-primary_dark font-pacifico">
          {type_project}
        </p>
        <button
          className="w-full px-4 mx-auto mb-5 font-medium rounded-full bg-primary_light dark:bg-primary_dark text-light_button_text dark:text-dark_button_text"
          onClick={handleClick}
        >
          More Info
        </button>
      </div>
    </div>
  )
}

export default ProjectItem
