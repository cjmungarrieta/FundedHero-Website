import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import es from './locales/es.json';
import ru from './locales/ru.json';
import pt from './locales/pt.json';
import it from './locales/it.json';
import de from './locales/de.json';
import fr from './locales/fr.json';
import nl from './locales/nl.json';
import zh from './locales/zh.json';
import ar from './locales/ar.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      ru: { translation: ru },
      pt: { translation: pt },
      it: { translation: it },
      de: { translation: de },
      fr: { translation: fr },
      nl: { translation: nl },
      zh: { translation: zh },
      ar: { translation: ar },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
