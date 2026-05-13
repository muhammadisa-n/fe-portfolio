import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Loading from "../../components/Loading";
import BlurImage from "../../components/BlurImage";

export interface Tool {
  id: number;
  name: string;
}
export interface ProjectHasTool {
  project_id: number;
  tool_id: number;
  tool: Tool;
}
export interface Project {
  id: number;
  name: string;
  description: string;
  image_id: string;
  image_url: string;
  demo_url: string;
  project_url: string;
  dad: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  project_has_tool: ProjectHasTool[];
}

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [take, setTake] = useState(3);
  const [totalData, setTotalData] = useState(0);
  const { t } = useTranslation();
  const [initialLoading, setInitialLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);

  const fetchProjects = async (takeCount: number) => {
    try {
      if (projects.length === 0) {
        setInitialLoading(true);
      } else {
        setLoadingMore(true);
      }
      const res = await axios.get(
        `${
          import.meta.env.VITE_API_BASE_URL
        }/public/projects?take=${takeCount}`,
        {
          headers: { "x-api-key": import.meta.env.VITE_API_KEY },
        }
      );
      if (res.data.status) {
        setProjects(res.data.data.data);
        setTotalData(res.data.data.total_data);
      }
    } catch (err) {
      console.error("Error fetching projects:", err);
    } finally {
      setInitialLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    fetchProjects(take);
  }, [take]);

  const handleLessMore = () => {
    projectsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setTimeout(() => {
      setTake((prev) => Math.max(3, prev - 3));
    }, 300);
  };
  return (
    <>
      {initialLoading ? (
        <Loading fullscreen={false} />
      ) : (
        <>
          <div className="projects mt-32 py-10" id="projects" ref={projectsRef}>
            <h1 className="text-center text-4xl font-bold mb-2">
              {t("titleProject")}
            </h1>
            <p className="text-base/loose text-center opacity-50">
              {t("projectP1")}
            </p>

            <div className="projects-box m-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-md"
                >
                  <BlurImage src={project.image_url} alt={t(project.name)} />
                  <div>
                    <h1 className="text-2xl font-bold my-4">
                      {t(project.name)}
                    </h1>
                    <p className="text-base/loose dark:text-light text-dark">
                      {t(project.description)}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.project_has_tool.map((tool) => (
                        <p
                          key={tool.tool_id}
                          className="py-1 px-3 border border-zinc-500 rounded-md font-semibold bg-zinc-200 dark:bg-zinc-600 opacity-80 dark:opacity-100"
                        >
                          {tool.tool.name}
                        </p>
                      ))}
                    </div>
                    <div className="mt-8 text-center">
                      <a
                        href={project.demo_url}
                        className="p-3 rounded-lg block border dark:border-zinc-600 border-zinc-500 hover:bg-primary dark:hover:bg-secondary dark:bg-primary bg-secondary font-semibold"
                        target="_blank"
                      >
                        {t("projecta1")}
                      </a>
                    </div>
                    <div className="mt-2 text-center">
                      <a
                        href={project.project_url}
                        className="p-3 rounded-lg block border dark:border-zinc-600 border-zinc-500 hover:bg-primary dark:hover:bg-secondary dark:bg-primary bg-secondary font-semibold"
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

          <div className="flex justify-center gap-4 mt-5">
            {take < totalData && (
              <button
                disabled={loadingMore}
                onClick={() => setTake((prev) => prev + 3)}
                className="px-4 py-2 rounded-md bg-rose-500 dark:bg-primary dark:hover:bg-secondary hover:bg-rose-300 text-light"
              >
                {loadingMore ? "Loading..." : "Load More"}
              </button>
            )}
            {take > 3 && (
              <button
                disabled={loadingMore}
                onClick={handleLessMore}
                className="px-4 py-2 rounded-md bg-zinc-500 dark:bg-zinc-700 dark:hover:bg-zinc-400 hover:bg-zinc-300 text-light hover:text-dark"
              >
                {loadingMore ? "Loading..." : "Less More"}
              </button>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default ProjectsSection;
