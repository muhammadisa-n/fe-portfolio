import { MdFindInPage } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen text-center px-4 bg-white dark:bg-dark">
      <MdFindInPage className="text-7xl mb-4 text-secondary dark:text-primary" />
      <h1 className="text-3xl font-bold mb-2 text-secondary dark:text-primary">
        {t("notFoundTitle")}
      </h1>
      <p className="text-lg dark:text-white text-dark ">{t("notFoundDesc")}</p>
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-secondary dark:bg-primary text-white dark:text-dark  rounded-lg hover:bg-rose-400"
      >
        {t("goHome")}
      </Link>
    </div>
  );
};

export default NotFoundPage;
