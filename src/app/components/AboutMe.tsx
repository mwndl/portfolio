'use client';

import Image from 'next/image';
import styles from './AboutMe.module.css';
import TypewriterText from '../../components/TypewriterText/TypewriterText';

export default function AboutMe() {
  
    const paragraphs = [
        "Olá! Sou Marcos Wiendl, desenvolvedor full stack focado em criar soluções digitais que unem interfaces intuitivas a back-ends robustos. Gosto de resolver problemas com criatividade e entregar valor real aos usuários.",
        "Formado em Sistemas para Internet e cursando MBA em Full Stack Web Development, estou sempre evoluindo. No tempo livre, exploro novas tecnologias, crio projetos pessoais e acompanho as tendências do setor."
    ];
      
    return (
    <section id="about" className={styles.section}>
        <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
            <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
                <Image
                src="/profile_picture.jpeg"
                alt="Profile picture"
                fill
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