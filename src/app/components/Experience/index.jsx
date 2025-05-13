'use client';

import styles from './styles.module.css';
import { useTranslation } from 'react-i18next';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Experience() {
  const { t } = useTranslation();
  const [containerRef, isVisible] = useIntersectionObserver();

  const items = ['item1', 'item2'];

  console.log('Experience visible:', isVisible);

  return (
    <section id="experience" className={styles.section}>
      <div
        ref={containerRef}
        className={`${styles.container} ${isVisible ? styles.visible : ''}`}
      >
        {items.map((itemKey, index) => {
          const leftDelay = 0.2 + index * 0.3;
          const rightDelay = leftDelay + 0.1;

          return (
            <div key={itemKey} className={styles.experienceItem}>
              <div
                className={`${styles.experienceLeft} ${isVisible ? styles.fadeInUp : ''}`}
                style={{ animationDelay: `${leftDelay}s` }}>
                <h4
                  className={`${styles.experienceItemCompany} ${
                    isVisible ? styles.fadeInUp : ''
                  }`}
                  style={{
                    animationDelay: `${leftDelay + 0.2}s`,
                  }}
                >
                  {t(`experience.${itemKey}.company`)}
                </h4>
                <p
                  className={`${styles.experienceItemDate} ${
                    isVisible ? styles.fadeInUp : ''
                  }`}
                  style={{
                    animationDelay: `${leftDelay + 0.4}s`,
                  }}
                >
                  {t(`experience.${itemKey}.date`)}
                </p>
              </div>

              <div
                className={`${styles.experienceRight} ${
                  isVisible ? styles.fadeInUp : ''
                }`}
                style={{ animationDelay: `${rightDelay}s` }}
              >
                <h3
                  className={`${styles.experienceItemRole} ${
                    isVisible ? styles.fadeInUp : ''
                  }`}
                  style={{
                    animationDelay: `${rightDelay + 0.2}s`,
                  }}
                >
                  {t(`experience.${itemKey}.role`)}
                </h3>
                <p
                  className={`${styles.experienceItemDescription} ${
                    isVisible ? styles.fadeInUp : ''
                  }`}
                  style={{
                    animationDelay: `${rightDelay + 0.4}s`,
                  }}
                >
                  {t(`experience.${itemKey}.description`)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
