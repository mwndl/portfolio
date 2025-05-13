'use client';

import { useState } from 'react';
import styles from './styles.module.css';
import { useTranslation } from 'react-i18next';
import ContactPopup from '../ContactPopup';

export default function Contact() {
    const { t } = useTranslation();
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
    <section id="contact" className={styles.section}>
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.title}>{t('contact.title')}</h2>
                <p className={styles.description}>{t('contact.description1')}</p>
                <p className={styles.description}>{t('contact.description2')}</p>
            </div>
            <button 
                className={styles.contactButton}
                onClick={() => setIsPopupOpen(true)}
            >
                {t('contact.buttonText')}
            </button>
            
            <ContactPopup 
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
            />
        </div>
    </section>
    );
} 