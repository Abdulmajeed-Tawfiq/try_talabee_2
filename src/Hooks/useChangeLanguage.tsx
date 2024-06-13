import { useCallback, useEffect, useState } from "react";
import translationEN from '../translate/en.json';
import translationAR from '../translate/ar.json';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import { TranslateEnum } from "../enums/Translate";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN
    },
    ar: {
      translation: translationAR
    }
  },
  lng: localStorage.getItem('language') ?? 'en', 
  interpolation: {
    escapeValue: false
  }
});

export const useChangeLanguage = () => {
    const { ARABIC, ENGLISH } = TranslateEnum;
    const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('language') ?? ENGLISH);
    const [userSelectedLanguage, setUserSelectedLanguage] = useState(false);
    
    useEffect(() => {
        const storedLanguage = localStorage.getItem('language');

        if (storedLanguage) {
            setCurrentLanguage(storedLanguage);
            setUserSelectedLanguage(true);
        } else {
            const languageMediaQuery = window.matchMedia('(prefers-language: ar)');
            setCurrentLanguage(languageMediaQuery.matches ? ARABIC : ENGLISH);
            setUserSelectedLanguage(false);
        }
    }, []);
  
    useEffect(() => {
        if (userSelectedLanguage) {
            if (currentLanguage === ARABIC) {
                i18n.changeLanguage(ARABIC); 
                document.body.setAttribute('dir', 'rtl');
                document.body.classList.add(ARABIC);
                document.body.classList.remove(ENGLISH);
            } else {
                i18n.changeLanguage(ENGLISH); 
                document.body.setAttribute('dir', 'ltr');
                document.body.classList.add(ENGLISH);
                document.body.classList.remove(ARABIC);
            }

            localStorage.setItem('language', currentLanguage);
        }
    }, [currentLanguage, ARABIC, ENGLISH, userSelectedLanguage]);
  
    const changeLanguage = useCallback((newLanguage: string) => {
        setCurrentLanguage(newLanguage);
        setUserSelectedLanguage(true);
    }, []);
  
    return { currentLanguage, changeLanguage };
};
