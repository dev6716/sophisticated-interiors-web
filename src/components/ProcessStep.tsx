
import { cn } from "@/lib/utils";

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  className?: string;
}

const ProcessStep = ({ number, title, description, className }: ProcessStepProps) => {
  return (
    <div className={cn("relative", className)}>
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-ks-yellow flex items-center justify-center text-2xl font-serif font-bold text-ks-darkGray">
          {number}
        </div>
        <div>
          <h3 className="font-serif text-xl font-medium mb-3">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProcessStep;
