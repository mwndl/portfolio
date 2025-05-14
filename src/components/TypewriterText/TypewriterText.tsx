'use client';

import { useEffect, useRef } from 'react';
import styles from './TypewriterText.module.css';

interface TypewriterTextProps {
  text: string | string[];
  speed?: number; // palavras por minuto
  onComplete?: () => void;
  start?: boolean;
  readColor?: string; // nova prop opcional
}

export default function TypewriterText({
  text,
  speed = 200,
  onComplete,
  start = true,
  readColor,
}: TypewriterTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Limpa o conteúdo anterior
    container.innerHTML = '';

    const texts = Array.isArray(text) ? text : [text];

    const paragraphs = texts.map((textContent) => {
      const words = textContent.split(' ');
      const paragraph = document.createElement('p');
      paragraph.className = styles.paragraph;
      container.appendChild(paragraph);

      words.forEach((word) => {
        const span = document.createElement('span');
        span.textContent = word + ' ';
        span.className = styles.word;
        paragraph.appendChild(span);
      });

      return paragraph;
    });

    if (!start) {
      // Apenas exibe o texto sem animação e sem destaque
      return;
    }

    const animateText = async (paragraph: HTMLParagraphElement) => {
      const spans = paragraph.getElementsByTagName('span');
      let currentWordIndex = 0;

      return new Promise<void>((resolve) => {
        const interval = setInterval(() => {
          if (currentWordIndex < spans.length) {
            const span = spans[currentWordIndex];
            span.classList.add(styles.highlighted);
            if (readColor) {
              span.style.color = readColor;
            }
            currentWordIndex++;
          } else {
            clearInterval(interval);
            resolve();
          }
        }, (60 * 1000) / speed);
      });
    };

    const animateAllTexts = async () => {
      for (const paragraph of paragraphs) {
        await animateText(paragraph);
      }
      if (onComplete) {
        onComplete();
      }
    };

    animateAllTexts();

    return () => {
      container.innerHTML = '';
    };
  }, [text, speed, start, onComplete, readColor]);

  return <div ref={containerRef} className={styles.container} />;
}
