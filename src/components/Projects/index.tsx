import { listProyek } from "../../data";
import { useTranslation } from "react-i18next";
const ProjectsSection = () => {
  const { t } = useTranslation();
  return (
    <div className="projects mt-32 py-10" id="projects">
      <h1 className="text-center text-4xl font-bold mb-2 ">
        {t("titleProject")}
      </h1>
      <p className="text-base/loose text-center opacity-50">{t("projectP1")}</p>
      <div className="projects-box m-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4">
        {listProyek.map((project) => (
          <div key={project.id} className="p-4 bg-zinc-800 rounded-md">
            <img
              src={project.gambar}
              alt="Project Image"
              className=""
              loading="lazy"
            />
            <div className="">
              <h1 className="text-2xl font-bold my-4">{project.nama}</h1>
              <p className="text-base/loose">{project.desk}</p>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, index) => (
                  <p
                    key={index}
                    className="py-1 px-3 border border-zinc-500 rounded-md font-semibold bg-zinc-600"
                  >
                    {tool}
                  </p>
                ))}
              </div>
              <div className=" mt-8 text-center ">
                <a
                  href={project.url_demo}
                  className="bg-primary p-3 rounded-lg block border border-zinc-600 hover:bg-secondary"
                  target="_blank"
                >
                  {t("projecta1")}
                </a>
              </div>
              <div className=" mt-2 text-center ">
                <a
                  href={project.url_project}
                  className="bg-primary p-3 rounded-lg block border border-zinc-600 hover:bg-secondary"
                  target="_blank"
                >
                  {t("projecta2")}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
