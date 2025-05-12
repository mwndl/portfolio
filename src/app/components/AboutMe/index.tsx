'use client';

import Image from 'next/image';
import styles from './styles.module.css';
import TypewriterText from '../../../components/TypewriterText/TypewriterText';
import { useTranslation } from 'react-i18next';
import { PROFILE_BLUR_DATA } from './constants';

export default function AboutMe() {
    const { t } = useTranslation();

    const paragraphs = [
        t('aboutMe.paragraph1'),
        t('aboutMe.paragraph2'),
    ];
      
    return (
    <section id="about" className={styles.section}>
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.imageContainer}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="https://www.gravatar.com/avatar/d87fbc718cafb7c4a7ce26efd1f227cc?s=1920"
                            placeholder="blur"
                            width={1920}
                            height={1920}
                            blurDataURL={PROFILE_BLUR_DATA}
                            alt="Profile picture"
                            priority
                            className={styles.image}
                        />
                    </div>
                    <h3 className={styles.name}>{t('aboutMe.name')}</h3>
                    <h4 className={styles.role}>{t('aboutMe.role')}</h4>
                </div>
                <div className={styles.textContainer}>
                    <h2 className={styles.title}>{t('aboutMe.title')}</h2>
                    <TypewriterText text={paragraphs} speed={400} />
                </div>
            </div>
        </div>
    </section>
    );
} 