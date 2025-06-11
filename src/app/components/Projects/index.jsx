'use client';

import { useState } from 'react';
import styles from './styles.module.css';
import { useTranslation } from 'react-i18next';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { FaExternalLinkAlt, FaGithub, FaInfoCircle } from 'react-icons/fa';
import ProjectDetailsDialog from './ProjectDetailsDialog';

export default function Projects() {
  const { t } = useTranslation();
  const [containerRef, isVisible] = useIntersectionObserver();
  const [selectedProject, setSelectedProject] = useState(null);

  const projectKeys = ['project1', 'project2', 'project3'];

  const handleLearnMore = (projectKey) => {
    setSelectedProject(projectKey);
  };

  const handleCloseDialog = () => {
    setSelectedProject(null);
  };

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
            const baseDelay = 0.3 + index * 0.3;
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
                style={{ animationDelay: `${baseDelay}s` }}
              >
                <div className={styles.textContainer}>
                  <h2
                    className={`${styles.title} ${isVisible ? styles.fadeInRightToLeft : ''}`}
                    style={{ animationDelay: `${baseDelay + 0.2}s` }}
                  >
                    {title}
                  </h2>
                  <p
                    className={`${styles.description} ${isVisible ? styles.fadeInUp : ''}`}
                    style={{ animationDelay: `${baseDelay + 0.4}s` }}
                  >
                    {description}
                  </p>
                </div>

                <div className={styles.links}>
                  <button
                    onClick={() => handleLearnMore(key)}
                    className={`${styles.iconLink} ${isVisible ? styles.fadeInUp : ''}`}
                    style={{ animationDelay: `${baseDelay + 0.3}s` }}
                    aria-label="Learn More"
                  >
                    <FaInfoCircle size={20} />
                  </button>
                  {hasGithub && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.iconLink} ${isVisible ? styles.fadeInUp : ''}`}
                      style={{ animationDelay: `${baseDelay + 0.5}s` }}
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
                      className={`${styles.iconLink} ${isVisible ? styles.fadeInUp : ''}`}
                      style={{ animationDelay: `${baseDelay + 0.7}s` }}
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

      {selectedProject && (
        <ProjectDetailsDialog
          projectKey={selectedProject}
          onClose={handleCloseDialog}
        />
      )}
    </section>
  );
}
