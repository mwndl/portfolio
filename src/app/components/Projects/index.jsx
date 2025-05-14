'use client';

import styles from './styles.module.css';
import { useTranslation } from 'react-i18next';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  const { t } = useTranslation();
  const [containerRef, isVisible] = useIntersectionObserver();

  const projectKeys = ['project1', 'project2', 'project3'];

  return (
    <section id="projects" className={styles.section}>
      <div
        ref={containerRef}
        className={`${styles.container} ${isVisible ? styles.visible : ''}`}
      >
        <h2
          className={`${styles.sectionTitle} ${isVisible ? styles.fadeInUp : ''}`}
          style={{ animationDelay: `0.2s` }}
        >
          {t('projects.title')}
        </h2>

        <div
          className={`${styles.projectsContainer} ${isVisible ? styles.fadeInUp : ''}`}
          style={{ animationDelay: `0.2s` }}
        >
          {projectKeys.map((key, index) => {
            const delay = 0.2 + index * 0.3;
            const title = t(`projects.${key}.title`);
            const description = t(`projects.${key}.description`);
            const github = t(`projects.${key}.github`);
            const link = t(`projects.${key}.link`);

            const hasGithub = github && github !== `projects.${key}.github`;
            const hasLink = link && link !== `projects.${key}.link`;

            return (
              <div
                key={key}
                className={`${styles.projectCard} ${isVisible ? styles.fadeInUp : ''}`}
                style={{ animationDelay: `${delay}s` }}
              >
                <div className={styles.textContainer}>
                  <h2 className={styles.title}>{title}</h2>
                  <p className={styles.description}>{description}</p>
                </div>

                <div className={styles.links}>
                  {hasGithub && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.iconLink}
                      aria-label="GitHub"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                  {hasLink && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.iconLink}
                      aria-label="External link"
                    >
                      <FaExternalLinkAlt size={20} />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
