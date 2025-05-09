'use client';
import i18n from '../../config/i18n';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const changeLanguage = (lng: string) => {
  i18n.changeLanguage(lng);
};

const LanguageToggle = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'pt' : 'en';
    changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <button onClick={toggleLanguage} className="p-2 rounded-full flex items-center">
      {language === 'en' ? (
        <img src="/br_flag.svg" alt="Português" className="w-6 h-6" />
      ) : (
        <img src="/us_flag.svg" alt="English" className="w-6 h-6" />
      )}
    </button>
  );
};

export default LanguageToggle;