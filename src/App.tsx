import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HomeApp from "../src/router/index";
import './App.css';
import ar from "./i18/ar.json";
import en from "./i18/en.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      ar: {
        translation: ar
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

function App() {
  return (
    <div className="">
      <HomeApp />
    </div>
  );
}

export default App;
