
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import GalleryImage from "@/components/GalleryImage";

// Sample gallery images (in a real app, this would come from a database)
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800",
    alt: "Modern living room with natural light",
    span: "row-span-1 col-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800",
    alt: "Contemporary kitchen design",
    span: "row-span-1 col-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1632210702485-e1841e30752a?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800",
    alt: "Minimalist bathroom with natural elements",
    span: "row-span-1 col-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800",
    alt: "Luxury bedroom design",
    span: "row-span-1 col-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1618219941286-ada0825a89f3?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800",
    alt: "Office space with wooden elements",
    span: "row-span-1 col-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800",
    alt: "Restaurant interior with ambient lighting",
    span: "row-span-1 col-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1595526051245-4506e0005bd0?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800",
    alt: "Elegant dining area",
    span: "row-span-1 col-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800",
    alt: "Modern retail space design",
    span: "row-span-1 col-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800",
    alt: "Home office with clean lines",
    span: "row-span-1 col-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800",
    alt: "Contemporary living space",
    span: "row-span-1 col-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800",
    alt: "Terrace garden design",
    span: "row-span-1 col-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800",
    alt: "Luxurious bathroom design",
    span: "row-span-1 col-span-1"
  }
];

const Gallery = () => {
  return (
    <Layout>
      <Hero
        title="Our Gallery"
        subtitle="A visual showcase of our design aesthetic and attention to detail."
        image="https://images.unsplash.com/photo-1588854337236-6889d631faa8?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1200"
      />
      
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="masonry-grid">
            {galleryImages.map((image, index) => (
              <div key={index} className="masonry-item">
                <GalleryImage
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
