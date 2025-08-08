import { FaArrowDown, FaDownload } from "react-icons/fa";
import HeroImage from "../../assets/hero.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";
const HomeSection = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const cvUrl =
    lang === "id"
      ? `${
          import.meta.env.VITE_API_BASE_URL
        }/public/files/download/CV Resume Muhammad Isa - IND Version`
      : `${
          import.meta.env.VITE_API_BASE_URL
        }/public/files/download/CV Resume Muhammad Isa - ENG Version`;

  const [imgSrc, setImgSrc] = useState(
    `${import.meta.env.VITE_API_BASE_URL}/images/hero.png`
  );
  return (
    <div
      className="hero grid md:grid-cols-2 pt-12 items-center xl:gap-0 gap-6 grid-cols-1"
      id="home"
    >
      <div className="animate__animated animate__fadeInUp animate__delay-2s">
        <h1 className="text-5xl/tight font-bold mb-6">{t("homeWelcome")}</h1>
        <p className="text-base/loose mb-6 opacity-70 text-dark dark:text-light dark:opacity-50 ">
          {t("homeParagraph")}
        </p>
        <div className="flex items-center sm:gap-4 gap-2 ">
          <a
            href={cvUrl}
            className=" p-4 rounded-2xl bg-zinc-600 hover:bg-zinc-500 dark:bg-primary dark:hover:bg-rose-400 flex text-light"
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
        src={imgSrc}
        alt="Hero Image"
        className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-3s"
        loading="lazy"
        title="Hero Image"
        onError={() => setImgSrc(HeroImage)}
      />
    </div>
  );
};

export default HomeSection;
