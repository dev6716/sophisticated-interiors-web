
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import { Palette, Ruler, Codesandbox, LayoutIcon, Home, Briefcase, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
  },
  {
    title: "Project Management",
    description: "Comprehensive project management ensuring your design is executed flawlessly from concept to completion.",
    icon: Briefcase
  },
  {
    title: "Design Consultation",
    description: "Expert advice and guidance for those seeking professional design input without a full-service engagement.",
    icon: Clock
  }
];

const process = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We begin with a detailed discussion to understand your needs, preferences, budget, and timeline. This foundational conversation helps us align our design approach with your vision."
  },
  {
    number: "02",
    title: "Concept Development",
    description: "Based on our initial consultation, we develop preliminary design concepts that address your requirements while introducing creative solutions and innovative ideas."
  },
  {
    number: "03",
    title: "Design Refinement",
    description: "After your feedback on the initial concepts, we refine the selected design direction, finalizing spatial layouts, material selections, color schemes, and other design elements."
  },
  {
    number: "04",
    title: "Detailed Documentation",
    description: "We create comprehensive design documentation including detailed drawings, specifications, and schedules to ensure clear communication with contractors and vendors."
  },
  {
    number: "05",
    title: "Implementation & Oversight",
    description: "Throughout the construction and installation phase, we provide regular site supervision and coordinate with contractors to ensure the design is executed according to specifications."
  },
  {
    number: "06",
    title: "Final Styling & Reveal",
    description: "Once construction is complete, we handle the final styling details—from furniture arrangement to accessory placement—creating a finished space that exceeds expectations."
  }
];

const Services = () => {
  return (
    <Layout>
      <Hero
        title="Our Services"
        subtitle="Comprehensive design solutions tailored to meet your unique needs."
        image="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1200"
      />
      
      {/* Services Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="What We Offer"
            subtitle="From initial concept to final implementation, we provide a complete range of interior design services."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Process */}
      <section className="section-padding bg-ks-lightGray">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Design Process"
            subtitle="A structured approach that ensures exceptional results for every project."
          />
          
          <div className="space-y-8">
            {process.map((step, index) => (
              <div 
                key={index} 
                className="bg-white p-8 md:p-10 flex relative overflow-hidden group"
              >
                <div className="absolute right-0 top-0 text-[180px] font-bold text-ks-yellow opacity-10 leading-none">
                  {index + 1}
                </div>
                <div className="w-20 h-20 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-ks-yellow text-ks-darkGray flex items-center justify-center font-bold text-xl">
                    {step.number}
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="font-serif text-2xl font-medium mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project and discover how our design services can enhance your space.
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

export default Services;
