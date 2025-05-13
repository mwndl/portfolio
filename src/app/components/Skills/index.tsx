'use client';

import styles from './styles.module.css';
import { useTranslation } from 'react-i18next';

export default function Skills() {
    const { t } = useTranslation();

    return (
    <section id="skills" className={styles.section}>
        <div className={styles.container}>
            <div className={styles.skillsContainer}>
                <h2 className={styles.title}>{t('skills.a_title')}</h2>
                <div className={styles.skills}>
                    <h3 className={styles.skill}>{t('skills.a1')}</h3>
                    <h3 className={styles.skill}>{t('skills.a2')}</h3>
                    <h3 className={styles.skill}>{t('skills.a3')}</h3>
                    <h3 className={styles.skill}>{t('skills.a4')}</h3>
                </div>
            </div>
            <div className={styles.skillsContainer}>
                <h2 className={styles.title}>{t('skills.b_title')}</h2>
                <div className={styles.skills}>
                    <h3 className={styles.skill}>{t('skills.b1')}</h3>
                    <h3 className={styles.skill}>{t('skills.b2')}</h3>
                    <h3 className={styles.skill}>{t('skills.b3')}</h3>
                    <h3 className={styles.skill}>{t('skills.b4')}</h3>
                </div>
            </div>
            <div className={styles.skillsContainer}>
                <h2 className={styles.title}>{t('skills.c_title')}</h2>
                <div className={styles.skills}>
                    <h3 className={styles.skill}>{t('skills.c1')}</h3>
                    <h3 className={styles.skill}>{t('skills.c2')}</h3>
                    <h3 className={styles.skill}>{t('skills.c3')}</h3>
                    <h3 className={styles.skill}>{t('skills.c4')}</h3>
                </div>
            </div>
        </div>
    </section>
    );
} 