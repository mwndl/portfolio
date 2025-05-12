'use client';

import { useEffect, useRef } from 'react';
import styles from './TypewriterText.module.css';

interface TypewriterTextProps {
  text: string | string[];
  speed?: number; // palavras por minuto
  onComplete?: () => void;
  startAnimation?: boolean;
}

export default function TypewriterText({ text, speed = 200, onComplete, startAnimation = true }: TypewriterTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startAnimation) return;

    const container = containerRef.current;
    if (!container) return;

    // Limpa o conteúdo anterior
    container.innerHTML = '';

    const texts = Array.isArray(text) ? text : [text];

    // Primeiro, cria todos os parágrafos e palavras
    const paragraphs = texts.map(textContent => {
      const words = textContent.split(' ');
      const paragraph = document.createElement('p');
      paragraph.className = styles.paragraph;
      container.appendChild(paragraph);
      
      words.forEach(word => {
        const span = document.createElement('span');
        span.textContent = word + ' ';
        span.className = styles.word;
        paragraph.appendChild(span);
      });

      return paragraph;
    });

    // Depois, anima as palavras de cada parágrafo em sequência
    const animateText = async (paragraph: HTMLParagraphElement) => {
      const spans = paragraph.getElementsByTagName('span');
      let currentWordIndex = 0;

      return new Promise<void>((resolve) => {
        const interval = setInterval(() => {
          if (currentWordIndex < spans.length) {
            spans[currentWordIndex].classList.add(styles.highlighted);
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
  }, [text, speed, startAnimation, onComplete]);

  return <div ref={containerRef} className={styles.container} />;
} 