'use client';

import styles from './styles.module.css';
import { useTranslation } from 'react-i18next';

export default function Experience() {
    const { t } = useTranslation();

    return (
    <section id="experience" className={styles.section}>
        <div className={styles.container}>
            <div className={styles.experienceItem}>
                <div className={styles.experienceLeft}>
                    <h4 className={styles.experienceItemCompany}>{t('experience.item1.company')}</h4>
                    <p className={styles.experienceItemDate}>{t('experience.item1.date')}</p>
                </div>
                <div className={styles.experienceRight}>
                <h3 className={styles.experienceItemRole}>{t('experience.item1.role')}</h3>
                    <p className={styles.experienceItemDescription}>{t('experience.item1.description')}</p>
                </div>
            </div>
            <div className={styles.experienceItem}>
                <div className={styles.experienceLeft}>
                    <h4 className={styles.experienceItemCompany}>{t('experience.item2.company')}</h4>
                    <p className={styles.experienceItemDate}>{t('experience.item2.date')}</p>
                </div>
                <div className={styles.experienceRight}>
                <h3 className={styles.experienceItemRole}>{t('experience.item2.role')}</h3>
                    <p className={styles.experienceItemDescription}>{t('experience.item2.description')}</p>
                </div>
            </div>
        </div>
    </section>
    );
} 