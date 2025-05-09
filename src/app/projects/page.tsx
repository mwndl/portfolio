import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    title: 'FinApp',
    description: 'App para controle de investimentos e metas financeiras.',
    link: 'https://github.com/yourusername/finapp',
  },
  {
    title: 'Reconhecimento Facial',
    description: 'Integração de reconhecimento facial em tempo real.',
    link: 'https://github.com/yourusername/face-recognition',
  },
];

export default function Projects() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">Meus Projetos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}
