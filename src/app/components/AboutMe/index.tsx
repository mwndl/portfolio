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
        <h2 className={styles.title}>{t('aboutMe.title')}</h2>
        <div className={styles.content}>
            <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
                <Image
                src="https://www.gravatar.com/avatar/d87fbc718cafb7c4a7ce26efd1f227cc"
                placeholder="blur"
                blurDataURL={PROFILE_BLUR_DATA}
                alt="Profile picture"
                width={500}
                height={500}
                priority
                className={styles.image}
                />
            </div>
            </div>
            <div className={styles.textContainer}>
            <TypewriterText text={paragraphs} speed={400} />
            </div>
        </div>
        </div>
    </section>
    );
} 