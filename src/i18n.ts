// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ChainedBackend from "i18next-chained-backend";
import HttpBackend from "i18next-http-backend";

export const i18nReady = i18n
  .use(ChainedBackend)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      backends: [HttpBackend, HttpBackend],
      backendOptions: [
        {
          loadPath: `${
            import.meta.env.VITE_API_BASE_URL
          }/public/translations?lang={{lng}}`,
          customHeaders: {
            "x-api-key": import.meta.env.VITE_API_KEY,
          },
        },
        {
          loadPath: "/locales/{{lng}}.json",
        },
      ],
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
