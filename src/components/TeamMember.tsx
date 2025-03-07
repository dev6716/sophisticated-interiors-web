
import { cn } from "@/lib/utils";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio?: string;
  className?: string;
}

const TeamMember = ({ name, role, image, bio, className }: TeamMemberProps) => {
  return (
    <div className={cn("group", className)}>
      <div className="relative overflow-hidden mb-6">
        <img 
          src={image} 
          alt={name} 
          className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <h3 className="font-serif text-xl font-medium mb-2">{name}</h3>
      <p className="text-ks-gray mb-3">{role}</p>
      {bio && <p className="text-muted-foreground text-sm">{bio}</p>}
    </div>
  );
};

export default TeamMember;
