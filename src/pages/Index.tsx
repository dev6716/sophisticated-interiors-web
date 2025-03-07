
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import TestimonialCard from "@/components/TestimonialCard";
import ServiceCard from "@/components/ServiceCard";
import { ArrowRight, Palette, Ruler, Layout as LayoutIcon, Home, Codesandbox } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const featuredProjects = [
  {
    id: "1",
    title: "Modern Apartment Interior",
    category: "Residential",
    imageUrl: "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "2",
    title: "Luxury Villa Redesign",
    category: "Residential",
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "3",
    title: "Corporate Office Space",
    category: "Commercial",
    imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800"
  }
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Homeowner",
    content: "Working with KS Design transformed our home in ways we couldn't imagine. Their attention to detail and understanding of our lifestyle created a space that truly reflects who we are.",
  },
  {
    name: "Rahul Patel",
    role: "CEO, Ahmedabad Tech",
    content: "Our office redesign by KS Design has completely changed our work environment. The team perfectly balanced functionality with aesthetics, creating a space that inspires creativity and productivity.",
  },
  {
    name: "Meera Desai",
    role: "Restaurant Owner",
    content: "The ambiance KS Design created for our restaurant has been praised by every customer. Their understanding of spatial dynamics and lighting has given our space a unique identity.",
  }
];

const services = [
  {
    title: "Interior Design",
    description: "Full-service interior design solutions tailored to your unique style and needs, creating spaces that are both beautiful and functional.",
    icon: Palette
  },
  {
    title: "Space Planning",
    description: "Strategic space planning to optimize flow and functionality while maximizing the potential of your space.",
    icon: Ruler
  },
  {
    title: "3D Visualization",
    description: "Realistic 3D renderings that bring your design concepts to life before implementation begins.",
    icon: Codesandbox
  },
  {
    title: "Commercial Design",
    description: "Specialized design solutions for offices, retail spaces, restaurants, and other commercial environments.",
    icon: LayoutIcon
  },
  {
    title: "Residential Design",
    description: "Custom designs for homes that reflect your personality and enhance your lifestyle.",
    icon: Home
  }
];

const Index = () => {
  return (
    <Layout>
      <Hero
        title="Transforming Spaces Into Extraordinary Experiences"
        subtitle="KS Design creates thoughtful, sophisticated interiors that reflect your personal style and elevate everyday living."
        image="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1200"
        ctaLink="/contact"
        ctaText="Start Your Project"
        isHomepage={true}
      />
      
      {/* About Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800"
                alt="KS Design Team"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
                Elevating Interiors Since 2015
              </h2>
              <p className="text-muted-foreground mb-6">
                KS Design is a premier interior design studio based in Ahmedabad, specializing in creating spaces that balance aesthetics with functionality. Our approach combines innovative design solutions with meticulous attention to detail, resulting in interiors that resonate with our clients' vision and lifestyle.
              </p>
              <p className="text-muted-foreground mb-8">
                With a diverse portfolio spanning residential, commercial, and hospitality projects, we've established ourselves as a trusted name in the design community, known for our commitment to excellence and client satisfaction.
              </p>
              <Link to="/about">
                <Button className="bg-transparent hover:bg-ks-yellow text-black border border-ks-gray hover:border-ks-yellow flex items-center gap-2 px-6 py-3">
                  About Us <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="section-padding bg-ks-lightGray">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Featured Projects"
            subtitle="Explore some of our most notable interior design projects showcasing our expertise and unique aesthetic."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                category={project.category}
                imageUrl={project.imageUrl}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/projects">
              <Button className="bg-ks-yellow hover:bg-ks-gray text-black hover:text-white px-8 py-6">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Services"
            subtitle="Comprehensive design solutions tailored to meet your unique needs and aspirations."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button className="bg-transparent hover:bg-ks-yellow text-black border border-ks-gray hover:border-ks-yellow flex items-center gap-2 px-6 py-3">
                All Services <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section-padding bg-ks-lightGray">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Client Testimonials"
            subtitle="Hear what our clients have to say about their experience working with KS Design."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1400)",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's collaborate to create interiors that reflect your style and elevate your everyday experiences.
            </p>
            <Link to="/contact">
              <Button className="bg-ks-yellow hover:bg-white text-black px-8 py-6">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
