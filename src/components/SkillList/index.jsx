const SkillList = ({ imageUrl, title, data }) => {
  return (
    <div
      className="relative w-full px-5 py-4 mt-20 border shadow-sm dark:border-secondary_dark border-secondary_light"
      data-aos="zoom-in"
      data-aos-duration={700}
      data-aos-delay={300}
    >
      <div className="w-20 h-20 absolute flex text-center -top-12 lg:right-[35%] rounded-full bg-primary_light hover:opacity-50 transition-all ease-in duration-200 dark:bg-primary_dark md:right-[31%] right-[38%]">
        <img src={imageUrl} alt={`${title} Icon Image`} className="p-4" />
      </div>
      <h4 className="mt-5 mb-3 font-bold text-center text-primary_light dark:text-primary_dark">
        {title}
      </h4>
      <ul className="relative mx-auto font-medium ">
        {data.map((item, index) => (
          <li
            className="mb-2 ml-4 text-primary_dark dark:text-primary_light"
            key={index}
          >
            <div className="absolute w-3 h-3 bg-primary_light rounded-full mt-1.5 -left-1.5 border-primary_light dark:bg-primary_dark dark:border-primary_dark" />
            <p className="flex flex-row flex-wrap items-center justify-start text-xl font-medium md:text-base ">
              {item.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SkillList
