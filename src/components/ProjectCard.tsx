interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
  }
  
  const ProjectCard = ({ title, description, link }: ProjectCardProps) => {
    return (
      <div className="border p-4 rounded-md shadow-lg hover:shadow-xl transition duration-300">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
        <a href={link} target="_blank" className="text-primary mt-4 block">
          Ver projeto
        </a>
      </div>
    );
  };
  
  export default ProjectCard;
  