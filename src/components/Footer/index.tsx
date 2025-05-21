import { useTranslation } from "react-i18next";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
      <h1 className="text-2xl font-bold dark:hover:text-primary hover:text-secondary">
        <a href="#home"> {t("titleNavbar")}</a>
      </h1>
      <div className="flex flex-column  gap-7">
        <a
          href="#home"
          title={t("menu1")}
          className="dark:hover:text-primary hover:text-secondary"
        >
          {t("menu1")}
        </a>
        <a
          href="#about"
          title={t("menu2 ")}
          className="dark:hover:text-primary hover:text-secondary"
        >
          {t("menu2")}
        </a>
        <a
          href="#projects"
          title={t("menu3")}
          className="dark:hover:text-primary hover:text-secondary"
        >
          {t("menu3")}
        </a>
      </div>
      <div className="flex items-center gap-3">
        <a
          href="https://github.com/muhammadisa-n"
          target="_blank"
          title="Github"
          className="dark:hover:text-primary hover:text-secondary"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-isa-n"
          target="_blank"
          title="Linkedin"
          className="dark:hover:text-primary hover:text-secondary"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://www.instagram.com/muhisa.n"
          target="_blank"
          title="Instagram"
          className="dark:hover:text-primary hover:text-secondary"
        >
          <FaInstagram size={30} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
