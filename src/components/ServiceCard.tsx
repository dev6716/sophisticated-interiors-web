
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  featured?: boolean;
}

const ServiceCard = ({ title, description, icon: Icon, featured = false }: ServiceCardProps) => {
  return (
    <div className={`p-8 bg-white shadow-sm transition-all duration-300 hover:shadow-md ${featured ? 'border-t-4 border-ks-yellow' : ''} group`}>
      <div className="p-4 bg-ks-lightGray rounded-full inline-flex items-center justify-center mb-6 group-hover:bg-ks-yellow transition-colors">
        <Icon className="w-6 h-6 text-ks-gray group-hover:text-ks-darkGray" />
      </div>
      <h3 className="font-serif text-xl font-medium mb-4">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default ServiceCard;
