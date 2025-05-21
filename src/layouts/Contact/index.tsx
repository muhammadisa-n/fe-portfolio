import { useTranslation } from "react-i18next";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
const ContactSection = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState<number>(0);
  useEffect(() => {
    const lastSent = localStorage.getItem("lastContactSubmit");
    if (lastSent) {
      const diff = Date.now() - parseInt(lastSent);
      const remaining = 120000 - diff;
      if (remaining > 0) {
        setCooldown(Math.floor(remaining / 1000));
      }
    }
  }, []);
  useEffect(() => {
    if (cooldown <= 0) return;

    const interval = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [cooldown]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (cooldown > 0) {
      Swal.fire({
        icon: "warning",
        title: "Please Wait",
        text: `You can send another message in ${cooldown} seconds.`,
      });
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_BASE_URL + `/messages`,
        form
      );
      if (response.status === 201) {
        localStorage.setItem("lastContactSubmit", Date.now().toString());
        setCooldown(120);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: response.data.message || "Success",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const responseData = error.response?.data;
        if (
          responseData?.status_code === 400 &&
          Array.isArray(responseData?.errors)
        ) {
          const errorMessages = responseData.errors
            .map(
              (err: { field: string; message: string }) => `• ${err.message}`
            )
            .join("<br>");
          Swal.fire({
            icon: "error",
            title: "Validation Error",
            html: errorMessages,
          });
        } else if (responseData?.status_code === 403) {
          Swal.fire({
            icon: "warning",
            title: "Warning",
            html: responseData?.message,
          });
        } else if (responseData?.status_code === 401) {
          Swal.fire({
            icon: "error",
            title: "Error",
            html: responseData?.message,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            html: responseData?.message,
          });
        }
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="contact mt-32 sm:p-10 p-0" id="contact">
      {loading ? <Loading /> : ""}
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
        onSubmit={handleSubmit}
        className="dark:bg-zinc-800 bg-zinc-200 p-10 sm:w-fit w-full mx-auto rounded-md"
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
              value={form.fullName}
              onChange={handleChange}
              className="border dark:border-zinc-500 border-zinc-400 p-2 rounded-md"
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
              value={form.email}
              onChange={handleChange}
              autoComplete="off"
              className="border dark:border-zinc-500 border-zinc-400 p-2 rounded-md"
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
              value={form.message}
              onChange={handleChange}
              placeholder={t("contactf3")}
              className="border dark:border-zinc-500 border-zinc-400  p-2 rounded-md"
              required
            ></textarea>
          </div>
          <div className="text-center ">
            <button
              type="submit"
              disabled={loading || cooldown > 0}
              className="bg-secondary dark:bg-primary p-3 rounded-lg w-full cursor-pointer border dark:border-zinc-500 border-zinc-400 dark:hover:bg-secondary hover:bg-primary"
            >
              {loading
                ? t("contactf5")
                : cooldown > 0
                ? `Wait ${cooldown}s`
                : t("contactf4")}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactSection;
