
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => {
  return (
    <div className="p-8 bg-white shadow-sm transition-all duration-300 hover:shadow-md group">
      <div className="p-4 bg-ks-lightGray rounded-full inline-flex items-center justify-center mb-6 group-hover:bg-ks-yellow transition-colors">
        <Icon className="w-6 h-6 text-ks-gray" />
      </div>
      <h3 className="font-serif text-xl font-medium mb-4">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default ServiceCard;
