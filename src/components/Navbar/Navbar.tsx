'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.css';
import LanguageToggle from '../LanguageToggler/LanguageToggler';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <Link href="#home" className={styles.brandLink}>
          {t('navbar.brand')}
        </Link>
      </div>
      <div className={styles.navbarRight}>
        <div className={styles.navLinks}>
          <Link href="#skills" className={styles.link}>
            {t('navbar.skills')}
          </Link>
          <Link href="#experience" className={styles.link}>
            {t('navbar.experience')}
          </Link>
          <Link href="#projects" className={styles.link}>
            {t('navbar.projects')}
          </Link>
          <Link href="#contact" className={styles.link}>
            {t('navbar.contact')}
          </Link>
        </div>
        <LanguageToggle />
      </div>
    </nav>
  );
};

export default Navbar;