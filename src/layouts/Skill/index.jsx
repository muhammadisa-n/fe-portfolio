import BackendIcon from "@assets/backend.png"
import FrontendIcon from "@assets/frontend.png"
import OthersIcon from "@assets/others.png"
import SkillList from "@components/SkillList"
const Skill = () => {
  const data = {
    frontend: [
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "Javascript",
      },
      {
        name: "VueJs",
      },
      {
        name: "ReactJs",
      },
      {
        name: "TailwindCss",
      },
    ],
    backend: [
      {
        name: "PHP",
      },
      {
        name: "laravel",
      },
      {
        name: "NodeJs",
      },
      {
        name: "ExpressJs",
      },
      {
        name: "MySQL",
      },
    ],
    othertools: [
      {
        name: "Visual Studio Code",
      },
    ],
  }
  return (
    <div
      id="skills"
      className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 md:pr-20 lg:pr-0"
    >
      <h1 className="text-4xl font-bold text-center text-primary_light dark:text-primary_dark">
        Skills Overview
      </h1>
      <p className="py-8 text-center text-dark dark:text-light">
        Proficient in various programming tools, showcasing versatile skills and
        expertise
      </p>
      <div className="grid gap-9 sm:grid-cols-3">
        <SkillList
          imageUrl={FrontendIcon}
          title="Frontend"
          data={data.frontend}
        />
        <SkillList imageUrl={BackendIcon} title="Backend" data={data.backend} />
        <SkillList
          imageUrl={OthersIcon}
          title="Others"
          data={data.othertools}
        />
      </div>
    </div>
  )
}

export default Skill
