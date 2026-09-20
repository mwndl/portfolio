'use client';

import styles from './styles.module.css';
import { useTranslation } from 'react-i18next';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Shortcuts() {
    const { t } = useTranslation();
    const [containerRef, isVisible] = useIntersectionObserver();

    const items = [
        { key: 'resume', url: t('shortcuts.resume_url'), label: t('shortcuts.resume') },
        { key: 'linkedin', url: 'https://www.linkedin.com/in/marcoswiendl/', label: t('shortcuts.linkedin') },
        { key: 'github', url: 'https://github.com/mwndl', label: t('shortcuts.github') },
        { key: 'email', url: 'mailto:contato@marcoswiendl.com', label: t('shortcuts.email') },
    ];

    console.log('shortcuts visible: ', isVisible)

    return (
        <section id="shortcuts" className={styles.section}>
            <div ref={containerRef} className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
                <div className={styles.shortcutsLeft}>
                    {items.slice(0, 2).map((item, index) => {
                        const delay = 0.2 + index * 0.2;
                        return (
                            <a
                                key={item.key}
                                className={`${styles.shortcut} ${isVisible ? styles.fadeInUp : ''}`}
                                style={{ animationDelay: `${delay}s` }}
                                href={item.url}
                                target="_blank"
                            >
                                {item.label}
                            </a>
                        );
                    })}
                </div>
                <div className={styles.shortcutsRight}>
                    {items.slice(2).map((item, index) => {
                        const delay = 0.6 + index * 0.2; 
                        return (
                            <a
                                key={item.key}
                                className={`${styles.shortcut} ${isVisible ? styles.fadeInUp : ''}`}
                                style={{ animationDelay: `${delay}s` }}
                                href={item.url}
                                target="_blank"
                            >
                                {item.label}
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
