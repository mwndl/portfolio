'use client';

import styles from './styles.module.css';
import { useTranslation } from 'react-i18next';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Skills() {
  const { t } = useTranslation();
  const [containerRef, isVisible] = useIntersectionObserver();

  const skillsSections = [
    { titleKey: 'a_title', skillsKeys: ['a1', 'a2', 'a3', 'a4'] },
    { titleKey: 'b_title', skillsKeys: ['b1', 'b2', 'b3', 'b4'] },
    { titleKey: 'c_title', skillsKeys: ['c1', 'c2', 'c3', 'c4'] },
  ];

  console.log('skills visible: ', isVisible);

  return (
    <section id="skills" className={styles.section}>
      <div ref={containerRef} className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        {skillsSections.map((section, sectionIndex) => {
          const sectionDelay = 0.2 + sectionIndex * 0.2;
          return (
            <div
              key={section.titleKey}
              className={`${styles.skillsContainer} ${isVisible ? styles.fadeInUp : ''}`}
              style={{ animationDelay: `${sectionDelay}s` }}
            >
              <h2
                className={styles.title}
                style={{ animationDelay: `${sectionDelay}s` }}
              >
                {t(`skills.${section.titleKey}`)}
              </h2>
              <div className={styles.skills}>
                {section.skillsKeys.map((skillKey, skillIndex) => {
                  const skillDelay = sectionDelay + 0.2 + skillIndex * 0.2;
                  return (
                    <h3
                      key={skillKey}
                      className={styles.skill}
                      style={{ animationDelay: `${skillDelay}s` }}
                    >
                      {t(`skills.${skillKey}`)}
                    </h3>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
