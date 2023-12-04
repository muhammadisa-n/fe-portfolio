import ExperienceItem from "@components/ExperienceItem"
const Experience = () => {
  const dataExperience = [
    {
      year: 2023,
      title: "HackGov - FrontEnd Developer",
      duration: "3 Month",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fuga harum blanditiis maiores earum aliquam error eligendi corrupti neque, hic nam ullam rem numquam, dicta doloribus modi consectetur nihil molestias!",
    },
  ]
  return (
    <div
      id="experience"
      className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 md:pr-20 lg:pr-0  "
    >
      <div>
        <h1 className="mb-10 text-4xl font-bold text-center text-primary_light dark:text-primary_dark">
          Work Experience
        </h1>
        {dataExperience.map((item, idx) => (
          <ExperienceItem
            key={idx}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  )
}

export default Experience
