import { useState, useEffect } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import idFlag from "../../assets/id.png";
import enFlag from "../../assets/en.png";
const Navbar = () => {
  const [active, setActive] = useState(false);
  const [dark, setDark] = useState(false);
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "en");
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const darkModeHandler = () => {
    const newDarkMode = !dark;
    setDark(newDarkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  };
  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang) {
      i18n.changeLanguage(storedLang);
      setLanguage(storedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "id" : "en";
    i18n.changeLanguage(newLang);
    setLanguage(newLang);
    localStorage.setItem("lang", newLang); // simpan ke localStorage
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="navbar py-7 flex items-center justify-between ">
      <div className="logo">
        <h1 className="text-3xl font-bold bg-dark dark:bg-light text-light dark:text-dark  p-1 md:bg-transparent md:text-dark dark:md:text-light dark:md:bg-transparent ">
          {t("titleNavbar")}
        </h1>
      </div>
      <ul
        className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0 md:opacity-100 bg-light/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl ${
          active ? "top-0 opacity-100 " : "-top-10 opacity-0 md:bg-transparent"
        }`}
      >
        <li>
          <a
            href="#home"
            className="sm:text-lg text-base font-medium dark:hover:text-primary hover:text-secondary"
          >
            {t("menu1")}
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="sm:text-lg  text-base font-medium dark:hover:text-primary hover:text-secondary"
          >
            {t("menu2")}
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="sm:text-lg text-base font-medium dark:hover:text-primary hover:text-secondary"
          >
            {t("menu3")}
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="sm:text-lg text-base font-medium dark:hover:text-primary hover:text-secondary"
          >
            {t("menu4")}
          </a>
        </li>
        <li>
          <a
            className="sm:text-lg text-base font-medium dark:hover:text-primary hover:text-secondary"
            onClick={darkModeHandler}
          >
            {dark && <IoSunny />}
            {!dark && <IoMoon />}
          </a>
        </li>
        <li>
          <img
            src={`${language === "en" ? idFlag : enFlag}`}
            alt="Toggle Language"
            className="w-full h-6 cursor-pointer hover:opacity-70 hidden md:block"
            onClick={toggleLanguage}
            loading="lazy"
          />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
