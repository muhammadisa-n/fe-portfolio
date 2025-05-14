import { useTranslation } from "react-i18next";
const ContactSection = () => {
  const { t } = useTranslation();
  return (
    <div className="contact mt-32 sm:p-10 p-0">
      <h1
        className="text-4xl mb-2 font-bold text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        {t("contactTitle")}
      </h1>
      <p
        className="text-base/loose text-center mb-10 opacity-50"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-once="true"
      >
        {t("contactp1")}
      </p>
      <form
        action=""
        className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
        autoComplete="off"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-once="true"
      >
        <div className="flex flex-col gap-6 ">
          <div className="flex flex-col gap-2">
            <label htmlFor="fullName" className="font-semibold">
              {t("contactf1")}
            </label>
            <input
              type="text"
              name="fullName"
              placeholder={t("contactf1")}
              required
              autoComplete="off"
              className="border border-zinc-500 p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold">
              {t("contactf2")}
            </label>
            <input
              type="email"
              name="email"
              placeholder={t("contactf2")}
              required
              autoComplete="off"
              className="border border-zinc-500 p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-semibold">
              {t("contactf3")}
            </label>
            <textarea
              name="message"
              id="message"
              cols={45}
              rows={7}
              placeholder={t("contactf3")}
              className="border border-zinc-500 p-2 rounded-md"
              required
            ></textarea>
          </div>
          <div className="text-center ">
            <button
              type="submit"
              className="bg-primary p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-secondary"
            >
              {t("contactf4")}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactSection;
