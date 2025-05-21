import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/Loading";

interface Tool {
  id: number;
  name: string;
  description: string;
  image_url: string;
  tool_url: string;
  dad: number;
}

const AboutSection = () => {
  const { t } = useTranslation();
  const [tools, setTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);
  const [take, setTake] = useState(8);
  const [totalData, setTotalData] = useState(0);
  useEffect(() => {
    const fetchTools = async (takeCount: number) => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/tools?take=${takeCount}`
        );
        if (response.data.status && response.data.data?.data) {
          const newData = response.data.data.data;
          setTools(response.data.data.data);
          setTotalData(response.data.data.total_data);
          setTools(newData);
        }
      } catch (error) {
        console.error("Error fetching tools:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTools(take);
  }, [take]);

  // const handleLoadMore = () => {
  //   setTake((prev) => prev + 8);
  // };

  // const handleLessMore = () => {
  //   setTake(8);
  // };
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
                10 <span className="text-secondary">+</span>
              </h1>
              <p className=" text-light">{t("aboutP2")}</p>
            </div>
            <div>
              <h1 className="text-4xl mb-1 text-light">
                1 <span className="text-secondary">+</span>
              </h1>
              <p className=" text-light">{t("aboutP3")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="tools mt-32 ">
        <h1
          className="text-4xl/snug font-bold mb-4 "
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          {t("aboutH1")}
        </h1>
        <p
          className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full  text-base/loose dark:opacity-50 opacity-80"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          {t("aboutP4")}
        </p>
        {loading ? (
          <Loading />
        ) : (
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
                      src={tool.image_url}
                      alt="Tools Image"
                      className="w-14 bg-zinc-700 p-1 group-hover:bg-zinc-800"
                      // loading="lazy"
                    />
                    <div>
                      <h4 className="font-semibold dark:font-bold ">
                        {tool.name}
                      </h4>
                      <p className="dark:opacity-50 opacity-60">
                        {t(tool.description)}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="flex justify-center gap-4 mt-10">
              {take < totalData && (
                <button
                  onClick={() => setTake((prev) => prev + 8)}
                  className="px-4 py-2 rounded-md bg-rose-500 dark:bg-primary dark:hover:bg-secondary hover:bg-rose-300 text-light"
                >
                  Load More
                </button>
              )}

              {take > 8 && (
                <button
                  onClick={() => setTake((prev) => Math.max(8, prev - 8))}
                  className="px-4 py-2 rounded-md bg-zinc-500 dark:bg-zinc-700 dark:hover:bg-zinc-400 hover:bg-zinc-300 text-light hover:text-dark"
                >
                  Less More
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
