// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend) // Menggunakan backend untuk fetch dari API
  .use(initReactI18next) // Integrasi dengan React
  .init({
    lng: "en", // Default bahasa
    fallbackLng: "en", // Jika bahasa tidak ditemukan
    interpolation: {
      escapeValue: false, // Tidak perlu escape karena React sudah aman
    },
    backend: {
      loadPath: `${
        import.meta.env.VITE_API_BASE_URL
      }/translations?lang={{lng}}`,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
