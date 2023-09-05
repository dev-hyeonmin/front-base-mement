import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import tranKo from './locales/ko';
import tranEn from './locales/en';

const resources = {
  ko: tranKo,
  en: tranEn,
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ko', // 현재 선택된 언어
  fallbackLng: 'ko', // 선택된 언어가 해당 리소스에 없을 경우 사용할 기본 폴백 언어
  debug: true,
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
