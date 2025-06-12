'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import styles from './styles.module.css';

export default function ProjectDetailsDialog({ projectKey, onClose }) {
  const { t } = useTranslation();
  const dialogRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const mockImages = [
    '/images/authkit_mock1.png',
    '/images/authkit_mock2.png',
    '/images/authkit_mock3.png',
  ];

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? mockImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === mockImages.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrevious();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e) => {
      if (dialogRef.current && !dialogRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const details = t(`projects.${projectKey}.details`, { returnObjects: true });
  const hasDemo = projectKey === 'project1';
  const demoUrl = t(`projects.${projectKey}.demoUrl`);

  return (
    <div className={styles.dialogOverlay} onClick={onClose}>
      <div ref={dialogRef} className={styles.dialog} onClick={e => e.stopPropagation()}>
        <button
          onClick={onClose}
          className={styles.closeButton}
          aria-label="Close dialog"
        >
          ×
        </button>

        <div className={styles.dialogHeader}>
          <h2 className={styles.dialogTitle}>{details.title}</h2>
          <div className={styles.dialogDescription}>
            {t(`projects.${projectKey}.details.description`)}
          </div>
        </div>

        {projectKey === 'project1' && (
          <div className={styles.mockImages}>
            <div className={styles.mockImageContainer}>
              <Image
                src={mockImages[currentImageIndex]}
                alt="AuthKit Screenshot"
                fill
                className={styles.mockImage}
                priority
              />
            </div>
            <button
              className={`${styles.navButton} ${styles.prevButton}`}
              onClick={handlePrevious}
              aria-label="Previous image"
            >
              <FaChevronLeft />
            </button>
            <button
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={handleNext}
              aria-label="Next image"
            >
              <FaChevronRight />
            </button>
            <div className={styles.imageDots}>
              {mockImages.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${currentImageIndex === index ? styles.active : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        <div className={styles.featuresSection}>
          <h3 className={styles.techStackTitle}>{t(`projects.${projectKey}.details.features.title`)}</h3>
          <div className={styles.featuresGrid}>
            {Object.entries(t(`projects.${projectKey}.details.features`, { returnObjects: true }))
              .filter(([key]) => key !== 'title')
              .map(([category, data]) => (
              <div key={category} className={styles.featureCategory}>
                <h4 className={styles.categoryTitle}>{data.title}</h4>
                <ul className={styles.featureList}>
                  {data.items.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      <span className={styles.featureIcon}>•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.techStackSection}>
          <h3 className={styles.techStackTitle}>{details.techStack.title}</h3>
          <div className={styles.techStack}>
            {Object.entries(details.techStack)
              .filter(([key]) => key !== 'title')
              .map(([key, value]) => (
                <div key={key} className={styles.techStackItem}>
                  <div className={styles.techStackCategory}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </div>
                  <div className={styles.techStackList}>
                    {value.split(', ').map((tech, index) => (
                      <span key={index} className={styles.techStackTech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>

        {hasDemo && (
          <div className={styles.dialogActions}>
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.demoButton}
            >
              {t('projects.project1.demo')}
            </a>
          </div>
        )}
      </div>
    </div>
  );
} 