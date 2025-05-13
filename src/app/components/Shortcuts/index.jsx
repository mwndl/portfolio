'use client';

import styles from './styles.module.css';
import { useTranslation } from 'react-i18next';

export default function AboutMe() {
    const { t } = useTranslation();

    return (
    <section id="about" className={styles.section}>
        <div className={styles.container}>
            <div className={styles.shortcutsLeft}>
                <a className={styles.shortcut} href={t('shortcuts.resume_url')} target="_blank">{t('shortcuts.resume')}</a>
                <a className={styles.shortcut} href="https://www.linkedin.com/in/marcoswiendl/" target="_blank">{t('shortcuts.linkedin')}</a>
            </div>
            <div className={styles.shortcutsRight}>
                <a className={styles.shortcut} href="https://github.com/mwndl" target="_blank">{t('shortcuts.github')}</a>
                <a className={styles.shortcut} href="mailto:contato@marcoswiendl.com" target="_blank">{t('shortcuts.email')}</a>
            </div>
        </div>
    </section>
    );
} 