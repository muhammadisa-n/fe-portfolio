import { FaArrowDown, FaDownload } from "react-icons/fa";
import HeroImage from "../../assets/hero.png";
import { useTranslation } from "react-i18next";
const HomeSection = () => {
  const { t } = useTranslation();
  return (
    <div
      className="hero grid md:grid-cols-2 pt-12 items-center xl:gap-0 gap-6 grid-cols-1"
      id="home"
    >
      <div>
        <div className="flex items-center gap-3 mb-6 dark:bg-zinc-700 bg-zinc-500 w-fit p-4 rounded-2xl text-light ">
          <img
            src={HeroImage}
            alt="Hero Image"
            className="w-10 rounded-md"
            loading="lazy"
          />
          <q>{t("homeQuote")}</q>
        </div>
        <h1 className="text-5xl/tight font-bold mb-6">{t("homeWelcome")}</h1>
        <p className="text-base/loose mb-6 opacity-70 text-dark dark:text-light dark:opacity-50 ">
          {t("homeParagraph")}
        </p>
        <div className="flex items-center sm:gap-4 gap-2 ">
          <a
            href="#"
            className="bg-zinc-600 p-4 rounded-2xl hover:bg-zinc-500 dark:bg-primary dark:hover:bg-rose-400 flex text-light"
          >
            {t("linkHome1")}
            <FaDownload className="text-sm mt-1 mx-2" />
          </a>
          <a
            href="#projects"
            className="bg-primary p-4 rounded-2xl hover:bg-rose-400 dark:bg-zinc-500 dark:hover:bg-zinc-500 flex text-light"
          >
            {t("linkHome2")}
            <FaArrowDown className="text-sm mt-1 mx-2" />
          </a>
        </div>
      </div>
      <img
        src={HeroImage}
        alt="Hero Image"
        className="w-[500px] md:ml-auto"
        loading="lazy"
      />
    </div>
  );
};

export default HomeSection;
