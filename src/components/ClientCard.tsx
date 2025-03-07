
import { cn } from "@/lib/utils";

interface ClientCardProps {
  name: string;
  logo: string;
  description?: string;
  className?: string;
}

const ClientCard = ({ name, logo, description, className }: ClientCardProps) => {
  return (
    <div className={cn(
      "p-8 bg-white shadow-sm transition-all duration-300 hover:shadow-md flex flex-col items-center", 
      className
    )}>
      <img 
        src={logo} 
        alt={name} 
        className="h-16 object-contain mb-6 grayscale hover:grayscale-0 transition-all duration-300" 
      />
      <h3 className="font-serif text-xl font-medium mb-2 text-center">{name}</h3>
      {description && <p className="text-sm text-muted-foreground text-center">{description}</p>}
    </div>
  );
};

export default ClientCard;
