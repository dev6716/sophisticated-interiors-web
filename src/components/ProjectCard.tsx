
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

const ProjectCard = ({ id, title, category, imageUrl }: ProjectCardProps) => {
  return (
    <Link to={`/projects/${id}`} className="group block overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-[350px] object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <span className="text-xs uppercase tracking-wider font-medium text-ks-yellow mb-2 block">
            {category}
          </span>
          <h3 className="text-xl font-serif font-medium">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
