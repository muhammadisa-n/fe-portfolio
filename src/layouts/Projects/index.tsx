import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import BlurImage from "../../components/BlurImage";
import noImageDefault from "../../assets/no_image.png";
import { dummyProjects } from "../../data/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from "aos";
import ProjectsSkeleton from "../../components/Skeleton/ProjectsSkeleton";
export interface Tool {
  id: number;
  name: string;
  tool_url: string;
}
export interface ProjectHasTool {
  project_id: number;
  tool_id: number;
  tool: Tool;
}
export interface ProjectImage {
  id: number;
  project_id: number;
  image_id: string;
  image_url: string;
  sort_order: number | null;
}
export interface Project {
  id: number;
  name: string;
  description: string;
  demo_url: string;
  project_url: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  project_has_tool: ProjectHasTool[];
  images: ProjectImage[];
}

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [take, setTake] = useState(3);
  const [totalData, setTotalData] = useState(0);
  const { t } = useTranslation();
  const [initialLoading, setInitialLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [preview, setPreview] = useState<{
    images: ProjectImage[];
    initialIndex: number;
  } | null>(null);

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
        }/public/projects?show=true&take=${takeCount}`,
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
      const fallbackProjects = dummyProjects.slice(0, takeCount);
      setProjects(fallbackProjects);
      setTotalData(dummyProjects.length);
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
  const getProjectDad = (index: number) => {
    return ((index % 3) + 1) * 100;
  };
  useEffect(() => {
    if (!initialLoading) {
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    }
  }, [initialLoading, projects]);
  return (
    <>
      {initialLoading ? (
        <ProjectsSkeleton />
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
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  data-aos="fade-up"
                  data-aos-duration={getProjectDad(index)}
                  className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-md"
                >
                  {project.images && project.images.length > 0 ? (
                    <Swiper
                      modules={[Autoplay, Pagination]}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      pagination={{
                        clickable: true,
                      }}
                      loop={project.images.length > 1}
                      className="rounded-md overflow-hidden"
                    >
                      {project.images.map((image, index) => (
                        <SwiperSlide key={image.id}>
                          <button
                            type="button"
                            onClick={() =>
                              setPreview({
                                images: project.images,
                                initialIndex: index,
                              })
                            }
                            className="block w-full"
                          >
                            <BlurImage
                              src={image.image_url}
                              alt={t(project.name)}
                            />
                          </button>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : (
                    <BlurImage src={noImageDefault} alt={t(project.name)} />
                  )}
                  <div>
                    <h1 className="text-2xl font-bold my-4">
                      {t(project.name)}
                    </h1>
                    <p className="text-base/loose dark:text-light text-dark">
                      {t(project.description)}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.project_has_tool.map((tool) => (
                        <a
                          href={tool.tool.tool_url}
                          key={tool.tool_id}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-1 px-3 border border-zinc-500 rounded-md font-semibold bg-zinc-200 dark:bg-zinc-600 opacity-80 dark:opacity-100"
                        >
                          {tool.tool.name}
                        </a>
                      ))}
                    </div>
                    {project.demo_url ? (
                      <div className="mt-8 text-center">
                        <a
                          href={project.demo_url}
                          className="p-3 rounded-lg block bg-zinc-600 hover:bg-zinc-500 dark:bg-primary dark:hover:bg-rose-400  text-light"
                          target="_blank"
                        >
                          {t("projecta1")}
                        </a>
                      </div>
                    ) : (
                      <></>
                    )}

                    <div className="mt-2 text-center">
                      <a
                        href={project.project_url}
                        className="p-3 rounded-lg block font-semibold bg-primary hover:bg-rose-400 dark:bg-zinc-500 dark:hover:bg-zinc-400 text-light"
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
      {preview && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setPreview(null)}
        >
          <button
            type="button"
            className="absolute top-5 right-5 text-white text-4xl z-50"
            onClick={() => setPreview(null)}
          >
            ×
          </button>

          <div
            className="w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Swiper
              modules={[Navigation, Pagination, Keyboard]}
              initialSlide={preview.initialIndex}
              navigation
              pagination={{
                clickable: true,
              }}
              keyboard={{
                enabled: true,
              }}
              loop={preview.images.length > 1}
              className="rounded-lg"
            >
              {preview.images.map((image) => (
                <SwiperSlide key={image.id}>
                  <div className="flex items-center justify-center">
                    <img
                      src={image.image_url}
                      alt="Project preview"
                      className="max-w-full max-h-[85vh] object-contain rounded-lg"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectsSection;
