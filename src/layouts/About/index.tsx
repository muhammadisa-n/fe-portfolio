import { useTranslation } from "react-i18next";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Loading from "../../components/Loading";
import { dummyTools } from "../../data/tools";
import noImageDefault from "../../assets/no_image.png";

export interface Tool {
  id: number;
  name: string;
  description: string;
  image_url: string;
  tool_url: string;
  dad?: number;
  type?: string;
  sort_order?: number;
}

const AboutSection = () => {
  const { t } = useTranslation();
  const [tools, setTools] = useState<Tool[]>([]);
  const [initialLoading, setInitialLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [take, setTake] = useState(8);
  const [totalData, setTotalData] = useState(0);
  const [totalDataProjects, setTotalDataProjects] = useState(0);
  const toolsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const fetchTools = async (takeCount: number) => {
      const isInitial = tools.length === 0;
      try {
        if (isInitial) {
          setInitialLoading(true);
        } else {
          setLoadingMore(true);
        }

        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/public/tools?take=${takeCount}`,
          {
            headers: { "x-api-key": import.meta.env.VITE_API_KEY },
          }
        );
        if (response.data.status && response.data.data?.data) {
          setTools(response.data.data.data);
          setTotalData(response.data.data.total_data);
        }
      } catch (error) {
        console.error("Error fetching tools:", error);
        const fallbackTools = dummyTools
          .filter((tool) => tool.show)
          .slice(0, takeCount);

        setTools(fallbackTools);

        setTotalData(dummyTools.filter((tool) => tool.show).length);
      } finally {
        setInitialLoading(false);
        setLoadingMore(false);
      }
    };

    const fetchTotalProjects = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/public/projects/count`,
          {
            headers: {
              "x-api-key": import.meta.env.VITE_API_KEY,
            },
          }
        );
        if (res.data.status) {
          setTotalDataProjects(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching total projects:", error);
        setTotalDataProjects(3);
      }
    };
    fetchTools(take);
    fetchTotalProjects();
  }, [take]);

  // const handleLoadMore = () => {
  //   setTake((prev) => prev + 8);
  // };

  // const handleLessMore = () => {
  //   setTake(8);
  // };
  const startCareer = new Date(2025, 0, 1);
  const getExperienceValue = (startDate: Date) => {
    const now = new Date();
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    if (years === 0) {
      return months.toString(); // contoh "7"
    } else if (years >= 1 && months === 0) {
      return years.toString(); // contoh "1" atau "2"
    } else {
      return `${years}+`; // contoh "1+" atau "2+"
    }
  };
  const getExperienceLabelKey = (startDate: Date) => {
    const now = new Date();
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    return years === 0 ? "aboutP3Months" : "aboutP3Years";
  };

  const experienceValue = getExperienceValue(startCareer);
  const experienceLabelKey = getExperienceLabelKey(startCareer);

  const formatProjectCount = (count: number) => {
    if (count <= 5) return count.toString();

    const step = 10;
    if (count < 10) {
      // khusus antara 6-9, patokannya 5
      return "5+";
    }

    const base = Math.floor(count / step) * step;
    return count === base ? base.toString() : `${base}+`;
  };

  const handleLessMore = () => {
    toolsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setTimeout(() => {
      setTake((prev) => Math.max(8, prev - 8));
    }, 300);
  };

  const getToolTypeLabel = (type?: string) => {
    if (!type) return "";

    return t(`tool.type.${type}`);
  };
  return (
    <div id="about" className="about mt-32 py-10">
      <div
        className="xl:w-2/3 lg:w3/4 w-full mx-auto dark:bg-zinc-800 bg-zinc-400 rounded-lg p-7"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <p className="text-base/loose mb-10 text-light ">{t("aboutP1")}</p>
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-6">
            <div>
              <h1 className="text-4xl mb-1  text-light">
                {formatProjectCount(totalDataProjects)}
              </h1>
              <p className=" text-light">{t("aboutP2")}</p>
            </div>
            <div>
              <h1 className="text-4xl mb-1 text-light">
                {experienceValue} <span className="text-secondary"></span>
              </h1>
              <p className=" text-light">{t(experienceLabelKey)}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="tools mt-32 " ref={toolsRef}>
        <h1
          className="text-4xl/snug font-bold mb-4 "
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          {t("toolsH1")}
        </h1>
        <p
          className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full  text-base/loose dark:opacity-50 opacity-80"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          {t("toolsP4")}
        </p>
        {initialLoading && <Loading fullscreen={false} />}

        {!initialLoading && (
          <>
            <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              {tools.map((tool) => (
                <a
                  key={tool.id}
                  href={tool.tool_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={tool.dad}
                  data-aos-once="true"
                >
                  <div className="group flex items-center gap-2 p-3 border dark:border-zinc-600 border-zinc-300 rounded-md dark:hover:bg-zinc-800 hover:bg-zinc-300">
                    <img
                      src={tool.image_url || noImageDefault}
                      alt="Tools Image"
                      className="w-14 bg-zinc-700 p-1 group-hover:bg-zinc-800"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-semibold dark:font-bold">
                        {tool.name}
                      </h4>
                      <p className="dark:opacity-50 opacity-60">
                        {getToolTypeLabel(tool.type)}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex justify-center gap-4 mt-5">
              {take < totalData && (
                <button
                  disabled={loadingMore}
                  onClick={() => setTake((prev) => prev + 8)}
                  className="px-4 py-2 rounded-md bg-rose-500 dark:bg-primary dark:hover:bg-secondary hover:bg-rose-300 text-light disabled:opacity-50"
                >
                  {loadingMore ? "Loading..." : "Load More"}
                </button>
              )}

              {take > 8 && (
                <button
                  disabled={loadingMore}
                  onClick={handleLessMore}
                  className="px-4 py-2 rounded-md bg-zinc-500 dark:bg-zinc-700 dark:hover:bg-zinc-400 hover:bg-zinc-300 text-light hover:text-dark disabled:opacity-50"
                >
                  {loadingMore ? "Loading..." : "Less More"}
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AboutSection;
