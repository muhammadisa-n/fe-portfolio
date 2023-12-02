const ExperienceItem = ({ year, title, details, duration }) => {
  return (
    <ul
      className="relative flex flex-col border-l md:flex-row border-dark dark:border-light"
      data-aos="fade-down"
      data-aos-duration={1000}
      data-aos-delay={500}
    >
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-primary_light rounded-full mt-1.5 -left-1.5 border-primary_light dark:bg-primary_dark dark:border-primary_dark" />
        <p className="flex flex-row flex-wrap items-center justify-start gap-4 text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold rounded-md text-light2 bg-primary_light dark:bg-primary_dark dark:text-light">
            {year}
          </span>
          <span className="text-lg font-semibold text-primary_light dark:text-primary_dark">
            {title}
          </span>
          <span className="my-1 text-sm font-normal leading-none dark:text-secondary_light text-secondary_dark">
            {duration}
          </span>
        </p>
        <p className="my-2 text-base font-normal text-dark dark:text-light">
          {details}
        </p>
      </li>
    </ul>
  )
}

export default ExperienceItem
