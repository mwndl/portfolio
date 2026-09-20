'use client';

import { useState } from 'react';
import styles from './styles.module.css';
import { useTranslation } from 'react-i18next';
import ContactPopup from '../ContactPopup';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Contact() {
    const { t } = useTranslation();
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const [ref, isVisible] = useIntersectionObserver();

    console.log(isVisible)

    return (
        <section id="contact" className={styles.section} ref={ref}>
            <div className={`${styles.container} ${isVisible ? styles.fadeInRightToLeft : ''}`}>
                <div className={styles.textContainer}>
                    <h2 className={`${styles.title} ${isVisible ? styles.fadeInRightToLeft : ''}`}
                        style={{ animationDelay: '0.3s' }}
                    >
                        {t('contact.title')}
                    </h2>
                    <p className={`${styles.description} ${isVisible ? styles.fadeInRightToLeft : ''}`}
                        style={{ animationDelay: '0.5s' }}>
                        {t('contact.description1')}
                    </p>
                    <p className={`${styles.description} ${isVisible ? styles.fadeInRightToLeft : ''}`}
                        style={{ animationDelay: '0.7s' }}
                    >
                        {t('contact.description2')}
                    </p>
                </div>
                <button 
                    className={`${styles.contactButton} ${isVisible ? styles.fadeInUp : ''}`}
                    onClick={() => setIsPopupOpen(true)}
                    style={{ animationDelay: '0.9s' }}
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
