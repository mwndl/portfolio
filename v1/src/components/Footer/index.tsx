'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 text-center text-sm text-muted-foreground">
      <p>{t('footer.copyright', { year: currentYear })}</p>
    </footer>
  );
};

export default Footer;
