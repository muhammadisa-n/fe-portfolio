import { useTranslation } from "react-i18next";
import { listTools } from "../../data";

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <div id="about" className="about mt-32 py-10">
      <div className="xl:w-2/3 lg:w3/4 w-full mx-auto dark:bg-zinc-800 bg-zinc-400 rounded-lg p-7">
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
        <h1 className="text-4xl/snug font-bold mb-4 ">{t("aboutH1")}</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full  text-base/loose dark:opacity-50 opacity-80">
          {t("aboutP4")}
        </p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTools.map((tool) => (
            <a
              key={tool.id}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="group flex items-center gap-2 p-3 border dark:border-zinc-600 border-zinc-300 rounded-md dark:hover:bg-zinc-800 hover:bg-zinc-300">
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-14 bg-zinc-700 p-1 group-hover:bg-zinc-800"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold dark:font-bold ">{tool.nama}</h4>
                  <p className="dark:opacity-50 opacity-60">{t(tool.ket)}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
