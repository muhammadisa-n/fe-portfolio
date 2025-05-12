import { useTranslation } from "react-i18next";
const ProjectsSection = () => {
  const { t } = useTranslation();
  return (
    <div className="projects mt-32 py-10" id="projects">
      <h1 className="text-center text-4xl font-bold mb-2 ">
        {t("titleProject")}
      </h1>
      <p> {t("projectP1")}</p>
    </div>
  );
};

export default ProjectsSection;
