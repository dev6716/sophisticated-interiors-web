
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface GalleryImageProps {
  src: string;
  alt: string;
  className?: string;
}

const GalleryImage = ({ src, alt, className }: GalleryImageProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Ensure image URL is properly formatted
  const imageSrc = src.startsWith('http') ? src : `/lovable-uploads/${src}`;

  return (
    <>
      <div 
        className={cn("cursor-pointer overflow-hidden", className)} 
        onClick={() => setIsOpen(true)}
      >
        <img 
          src={imageSrc} 
          alt={alt} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
          onError={(e) => {
            // Fallback to placeholder on error
            const target = e.target as HTMLImageElement;
            target.src = "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800";
          }}
        />
      </div>
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-5xl w-[calc(100%-2rem)] p-1 bg-transparent border-none">
          <img 
            src={imageSrc} 
            alt={alt} 
            className="w-full h-auto max-h-[80vh] object-contain" 
            onError={(e) => {
              // Fallback to placeholder on error
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800";
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GalleryImage;
