
import { useState } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";

// Sample project data (in a real app, this would come from a database)
const projects = [
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
  },
  {
    id: "4",
    title: "Boutique Cafe Design",
    category: "Hospitality",
    imageUrl: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "5",
    title: "Minimalist Home Styling",
    category: "Residential",
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "6",
    title: "Contemporary Retail Store",
    category: "Commercial",
    imageUrl: "https://images.unsplash.com/photo-1582037928769-71e7293df6f6?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "7",
    title: "Luxury Hotel Suite",
    category: "Hospitality",
    imageUrl: "https://images.unsplash.com/photo-1631049552057-ce19745ff521?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "8",
    title: "Urban Loft Conversion",
    category: "Residential",
    imageUrl: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "9",
    title: "Tech Startup Headquarters",
    category: "Commercial",
    imageUrl: "https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Residential", "Commercial", "Hospitality"];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <Layout>
      <Hero
        title="Our Projects"
        subtitle="Explore our portfolio of thoughtfully designed spaces across residential, commercial, and hospitality sectors."
        image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1200"
      />
      
      <section className="section-padding">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setFilter(category)}
                variant={filter === category ? "default" : "outline"}
                className={filter === category 
                  ? "bg-ks-yellow text-black hover:bg-ks-gray hover:text-white" 
                  : "border-ks-gray text-ks-gray hover:bg-ks-yellow hover:text-black hover:border-ks-yellow"
                }
              >
                {category}
              </Button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                category={project.category}
                imageUrl={project.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
