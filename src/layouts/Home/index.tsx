import { FaArrowDown, FaDownload } from "react-icons/fa";
import HeroImage from "../../assets/hero.png";
import noImageDefault from "../../assets/no_image.png";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import axios from "axios";
const HomeSection = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const apiCvUrl =
    lang === "id"
      ? `${import.meta.env.VITE_API_BASE_URL}/public/files/download/1`
      : `${import.meta.env.VITE_API_BASE_URL}/public/files/download/2`;

  const fallbackCvUrl =
    lang === "id"
      ? "https://drive.google.com/file/d/1VPwIC4Z4Y3g1cnbG7zekayaAWJKb1_Bo/view?usp=sharing"
      : "https://drive.google.com/file/d/1j8mJHMoEbyWBeW9arZKlPjAuPBbxT_YR/view?usp=drive_link";

  const [cvUrl, setCvUrl] = useState(apiCvUrl);

  const [imgSrc, setImgSrc] = useState(
    `${import.meta.env.VITE_BASE_URL}/images/hero.png`
  );

  useEffect(() => {
    const checkCvUrl = async () => {
      try {
        await axios.head(apiCvUrl, {
          headers: {
            "x-api-key": import.meta.env.VITE_API_KEY,
          },
        });

        setCvUrl(apiCvUrl);
      } catch (error) {
        console.error("CV API error, using fallback Google Drive:", error);
        setCvUrl(fallbackCvUrl);
      }
    };

    checkCvUrl();
  }, [apiCvUrl, fallbackCvUrl]);
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
            className="bg-primary p-4 rounded-2xl hover:bg-rose-400 dark:bg-zinc-500 dark:hover:bg-zinc-400 flex text-light"
          >
            {t("linkHome2")}
            <FaArrowDown className="text-sm mt-1 mx-2" />
          </a>
        </div>
      </div>
      <img
        src={imgSrc ? imgSrc : noImageDefault}
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
