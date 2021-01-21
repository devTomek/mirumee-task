import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";

export const EN = "en";
export const DEFAULT_LANGUAGE = EN;

i18n.use(initReactI18next).init({
	fallbackLng: EN,
	interpolation: {
		escapeValue: false,
	},
	resources: {
		en: {
			translation: en,
		},
	},
	lng: DEFAULT_LANGUAGE,
});

export default i18n;
