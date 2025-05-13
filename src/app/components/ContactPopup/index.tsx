'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './styles.module.css';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

emailjs.init("BtmQzTDXym-Uy_Hjn");

interface ContactPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            await emailjs.send(
                "service_z4m65nj",
                "template_tb29quk",
                {
                    from_name: formData.name,
                    reply_to: formData.email,
                    message: formData.message,
                }
            );

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });

            setTimeout(() => {
                setStatus('idle');
                onClose();
            }, 2000);
        } catch (error) {
            console.error('Error sending email:', error);
            setStatus('error');

            setTimeout(() => {
                setStatus('idle');
            }, 3000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    if (!isOpen) return null;

    const popupContent = (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.popup} onClick={e => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>×</button>
                <h2 className={styles.title}>{t('contact.popup.formTitle')}</h2>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={t('contact.popup.namePlaceholder')}
                            required
                            className={styles.input}
                            disabled={status === 'loading'}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder={t('contact.popup.emailPlaceholder')}
                            required
                            className={styles.input}
                            disabled={status === 'loading'}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder={t('contact.popup.messagePlaceholder')}
                            required
                            className={styles.textarea}
                            disabled={status === 'loading'}
                        />
                    </div>

                    <button
                        type="submit"
                        className={`${styles.button} ${status === 'loading' ? styles.loading : ''}`}
                        disabled={status === 'loading'}
                    >
                        {status === 'loading' ? t('contact.popup.sending') :
                            status === 'success' ? t('contact.popup.sent') :
                                status === 'error' ? t('contact.popup.error') :
                                    t('contact.popup.send')}
                    </button>
                </form>
            </div>
        </div>
    );

    return typeof window !== 'undefined' ? createPortal(popupContent, document.body) : null;
}
