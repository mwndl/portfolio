import styles from './Skills.module.css';

interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export default function Skills() {
  const skills: Skill[] = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'TypeScript', level: 85 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Python', level: 75 },
  ];

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.grid}>
          {skills.map((skill) => (
            <div key={skill.name} className={styles.skillCard}>
              <h3 className={styles.skillName}>{skill.name}</h3>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className={styles.progressText}>{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 