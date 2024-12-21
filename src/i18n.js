import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// Cấu hình i18n
i18n
  .use(HttpBackend) // Load file ngôn ngữ
  .use(LanguageDetector) // Phát hiện ngôn ngữ
  .use(initReactI18next) // Tích hợp với React
  .init({
    fallbackLng: "en", // Ngôn ngữ mặc định
    debug: true, // Bật log cho dev
    interpolation: {
      escapeValue: false, // React đã tự xử lý XSS
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Đường dẫn tới file ngôn ngữ
    },
  });

export default i18n;
