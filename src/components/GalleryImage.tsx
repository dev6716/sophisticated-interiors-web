
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

  return (
    <>
      <div 
        className={cn("cursor-pointer overflow-hidden", className)} 
        onClick={() => setIsOpen(true)}
      >
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
        />
      </div>
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-5xl w-[calc(100%-2rem)] p-1 bg-transparent border-none">
          <img 
            src={src} 
            alt={alt} 
            className="w-full h-auto max-h-[80vh] object-contain" 
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GalleryImage;
