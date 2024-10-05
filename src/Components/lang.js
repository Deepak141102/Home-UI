// i18n.js
import { Login } from '@mui/icons-material';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation files
const resources = {
  en: {
    translation: {
      home: "Home",
      education: "Education",
      about: "About",
      contactUs: "Contact Us",
      searchbar:"Search",
      login:"Log In",
      signup:"Sign Up",
      all:"All",
      edu:"Education",
      course:"Courses",
      Branches:"Branches",
      More:"More"
      // Add more translations for English
    },
  },
  hi: {
    translation: {
      home: "मुख्य पृष्ठ",
      education: "शिक्षा",
      about: "हमारे बारे में",
      contactUs: "संपर्क करें",
      login:"लॉंगिन",
      signup:"साइन अप ",
      searchbar:"खोजे",
      all:"सभी",
      edu:"शिक्षा",
      course:"पाठ्यक्रम",
      Branches:"सखाये",
      More:"अधिक जाने"
    },
},
ko: {
    translation: {
        home: "홈",
        education: "교육",
        about: "소개",
        contactUs: "문의하기",
        login:"로그인",
        signup:"가입하다",
        searchbar:"찾다",
        all:"모두",
        edu:"교육",
        course:"행동",
        Branches:"가지",
        More:"더"
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
