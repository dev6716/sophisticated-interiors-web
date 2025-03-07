
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  className?: string;
}

const CategoryFilter = ({ 
  categories, 
  activeCategory, 
  onCategoryChange, 
  className 
}: CategoryFilterProps) => {
  return (
    <div className={cn("flex flex-wrap gap-4 mb-12", className)}>
      <button
        onClick={() => onCategoryChange("All")}
        className={cn(
          "px-4 py-2 text-sm font-medium transition-all duration-300",
          activeCategory === "All" 
            ? "bg-ks-yellow text-ks-darkGray" 
            : "bg-transparent text-ks-gray hover:text-ks-darkGray border border-ks-gray hover:border-ks-yellow"
        )}
      >
        All
      </button>
      
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "px-4 py-2 text-sm font-medium transition-all duration-300",
            activeCategory === category 
              ? "bg-ks-yellow text-ks-darkGray" 
              : "bg-transparent text-ks-gray hover:text-ks-darkGray border border-ks-gray hover:border-ks-yellow"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
