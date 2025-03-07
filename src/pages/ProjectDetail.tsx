
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample project data (in a real app, this would come from a database)
const projectsData = [
  {
    id: "1",
    title: "Modern Apartment Interior",
    location: "Ahmedabad, Gujarat",
    category: "Residential",
    year: "2023",
    description: "A complete interior redesign of a 3-bedroom apartment in central Ahmedabad. The project focused on creating an open, light-filled space that balances contemporary aesthetics with functional living. The neutral color palette is punctuated with strategic pops of color through furniture and accessories.",
    challenge: "The main challenge was to maximize the limited space while maintaining an uncluttered, airy feel. Additionally, the clients requested a design that would accommodate both family living and frequent entertaining.",
    solution: "We implemented a flexible open-plan layout with movable partitions to create separate zones when needed. Custom storage solutions were integrated throughout to maintain a minimal aesthetic while providing ample storage. The selection of multi-functional furniture further optimized the available space.",
    mainImage: "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1200",
    galleryImages: [
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "2",
    title: "Luxury Villa Redesign",
    location: "Bopal, Ahmedabad",
    category: "Residential",
    year: "2022",
    description: "A comprehensive renovation of a 5-bedroom luxury villa in Bopal. The design concept centered around creating a seamless connection between indoor and outdoor spaces while incorporating elements of traditional Indian architecture with contemporary design.",
    challenge: "The existing structure presented several constraints, including outdated compartmentalized spaces and limited natural light in key areas. The clients also requested preservation of specific traditional architectural elements while updating the overall aesthetic.",
    solution: "We reconfigured the floor plan to open up the space and improve flow between rooms. Large windows and strategic removal of non-load-bearing walls increased natural light penetration. Traditional elements like carved wooden columns and jharokha-inspired details were restored and integrated with modern furnishings and finishes.",
    mainImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1200",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "3",
    title: "Corporate Office Space",
    location: "SG Highway, Ahmedabad",
    category: "Commercial",
    year: "2023",
    description: "Design and implementation of a 10,000 sq. ft. office space for a technology company. The project aimed to create a dynamic work environment that fosters collaboration, creativity, and employee wellbeing while reflecting the company's innovative brand identity.",
    challenge: "The primary challenge was to balance the need for collaborative spaces with requirements for privacy and focused work. Additionally, the company was expanding rapidly, necessitating a design that could accommodate future growth.",
    solution: "We developed a flexible layout with a mix of open collaboration zones, private meeting rooms, and focus pods. Modular furniture systems allow for easy reconfiguration as team sizes change. Biophilic design principles were incorporated throughout with living walls, natural materials, and abundant natural light to enhance employee wellbeing.",
    mainImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1200",
    galleryImages: [
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800"
    ]
  }
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.id === id);
  
  if (!project) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-3xl font-semibold mb-4">Project Not Found</h1>
            <p className="mb-8">The project you're looking for doesn't exist or has been removed.</p>
            <Link to="/projects">
              <Button>Back to Projects</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="pt-20 bg-ks-lightGray">
        <div className="container mx-auto px-4 py-12">
          {/* Back to Projects */}
          <Link to="/projects" className="inline-flex items-center mb-8 text-ks-gray hover:text-ks-yellow transition-colors">
            <ArrowLeft size={18} className="mr-2" /> Back to Projects
          </Link>
          
          {/* Project Header */}
          <div className="mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-ks-gray">
              <span>{project.category}</span>
              <span>|</span>
              <span>{project.location}</span>
              <span>|</span>
              <span>{project.year}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Image */}
      <div className="w-full h-[60vh] md:h-[80vh]">
        <img 
          src={project.mainImage} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Project Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-6">Project Overview</h2>
            <p className="text-lg leading-relaxed mb-10">{project.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
              <div>
                <h3 className="font-serif text-xl font-semibold mb-4">The Challenge</h3>
                <p className="text-muted-foreground">{project.challenge}</p>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold mb-4">Our Solution</h3>
                <p className="text-muted-foreground">{project.solution}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Image Gallery */}
      <section className="bg-ks-lightGray py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-10 text-center">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.galleryImages.map((image, index) => (
              <div key={index} className="overflow-hidden">
                <img 
                  src={image} 
                  alt={`${project.title} - Gallery Image ${index + 1}`} 
                  className="w-full h-[400px] object-cover hover-scale"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's collaborate to create a space that reflects your vision and enhances your everyday experience.
          </p>
          <Link to="/contact">
            <Button className="bg-ks-yellow hover:bg-ks-gray text-black hover:text-white px-8 py-6">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
