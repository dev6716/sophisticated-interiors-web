
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = true,
  className 
}: SectionTitleProps) => {
  return (
    <div className={cn(
      "mb-10 md:mb-16",
      centered && "text-center",
      className
    )}>
      <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-3xl mx-auto text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
