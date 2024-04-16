import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from "../locales/en.json"
import fr from "../locales/fr.json";
import es from "../locales/es.json";


i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            fr: { translation: fr },
            es: { translation: es },
        },
        lng: 'fr',
        interpolation: {
            escapeValue: false, // This ensures raw HTML in translations (if needed)
        },
        fallbackLng: "en",
        compatibilityJSON: 'v3',
    });

export default i18n