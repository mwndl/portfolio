'use client';
import i18n from '../../config/i18n';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Image from 'next/image';

const changeLanguage = (lng: string) => {
  i18n.changeLanguage(lng);
};

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'pt' : 'en';
    changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <button onClick={toggleLanguage} className="p-2 rounded-full flex items-center">
      {language === 'en' ? (
        <Image src="/br_flag.svg" alt="Português" width={24} height={24} />
      ) : (
        <Image src="/us_flag.svg" alt="English" width={24} height={24} />
      )}
    </button>
  );
};

export default LanguageToggle;