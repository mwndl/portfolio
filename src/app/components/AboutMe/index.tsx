'use client';

import Image from 'next/image';
import styles from './styles.module.css';
import TypewriterText from '../../../components/TypewriterText/TypewriterText';
import { useTranslation } from 'react-i18next';
import { PROFILE_BLUR_DATA } from './constants';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function AboutMe() {
    const { t } = useTranslation();
    const [containerRef, isVisible] = useIntersectionObserver();

    const paragraphs = [
        t('aboutMe.paragraph1'),
        t('aboutMe.paragraph2'),
    ];
      
    return (
    <section id="about" className={styles.section}>
        <div 
            ref={containerRef}
            className={`${styles.container} ${isVisible ? styles.visible : ''}`}
        >
            <div className={styles.content}>
            <div
                className={`${styles.imageContainer} ${isVisible ? styles.fadeInRightToLeft : ''}`}
                style={{ animationDelay: '0s' }}
            >
                <div className={styles.imageWrapper}>
                    <Image
                        src="https://www.gravatar.com/avatar/d87fbc718cafb7c4a7ce26efd1f227cc?s=1920"
                        placeholder="blur"
                        width={1920}
                        height={1920}
                        blurDataURL={PROFILE_BLUR_DATA}
                        alt="Profile picture"
                        priority
                        className={`${styles.image} ${isVisible ? styles.zoomIn : ''}`}
                        style={{ animationDelay: '0.15s' }}
                    />
                </div>
                <h3 className={`${styles.name} ${isVisible ? styles.fadeInUp : ''}`} style={{ animationDelay: '0.3s' }}>
                {t('aboutMe.name')}
                </h3>
                <h4 className={`${styles.role} ${isVisible ? styles.fadeInUp : ''}`} style={{ animationDelay: '0.45s' }}>
                {t('aboutMe.role')}
                </h4>
            </div>

            <div
                className={`${styles.textContainer} ${isVisible ? styles.fadeInRightToLeft : ''}`}
                style={{ animationDelay: '0.5s' }}
            >
                <h2 className={`${styles.title} ${isVisible ? styles.fadeInUp : ''}`} style={{ animationDelay: '0.65s' }}>
                {t('aboutMe.title')}
                </h2>

                <div className={`${styles.text} ${isVisible ? styles.fadeInUp : ''}`} style={{ animationDelay: '0.90s' }}>
                    <TypewriterText text={paragraphs} speed={400} />
                </div>
            </div>
            </div>

        </div>
    </section>
    );
} 