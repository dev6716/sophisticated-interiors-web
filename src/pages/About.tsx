
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";

interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  caption?: string;
  timestamp: string;
}

const About = () => {
  const [instagramPosts, setInstagramPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

  // For demonstration, we'll use placeholder images since we can't access the Instagram API directly
  useEffect(() => {
    // Mocked Instagram posts
    const mockInstagramPosts = [
      {
        id: "1",
        media_url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=400",
        permalink: "https://www.instagram.com/p/somepost1/",
        caption: "Beautiful living room design with natural light #interiordesign #homedecor",
        timestamp: "2023-10-15T10:00:00Z"
      },
      {
        id: "2",
        media_url: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=400",
        permalink: "https://www.instagram.com/p/somepost2/",
        caption: "Minimalist kitchen design #kitchendesign #minimal",
        timestamp: "2023-10-10T09:30:00Z"
      },
      {
        id: "3",
        media_url: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=400",
        permalink: "https://www.instagram.com/p/somepost3/",
        caption: "Cozy bedroom makeover #bedroom #cozyhome",
        timestamp: "2023-10-05T14:20:00Z"
      },
      {
        id: "4",
        media_url: "https://images.unsplash.com/photo-1648294813487-c3a14b329abc?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=400",
        permalink: "https://www.instagram.com/p/somepost4/",
        caption: "Modern office space design #officedesign #workspace",
        timestamp: "2023-09-28T11:15:00Z"
      },
      {
        id: "5",
        media_url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=400",
        permalink: "https://www.instagram.com/p/somepost5/",
        caption: "Bathroom renovation complete! #bathroomdesign #renovation",
        timestamp: "2023-09-20T08:45:00Z"
      },
      {
        id: "6",
        media_url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=400",
        permalink: "https://www.instagram.com/p/somepost6/",
        caption: "Elegant dining room setup #diningroom #interiordesign",
        timestamp: "2023-09-15T16:30:00Z"
      }
    ];

    // Simulate loading from API
    setTimeout(() => {
      setInstagramPosts(mockInstagramPosts);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Layout>
      <Hero
        title="About KS Design"
        image="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1200"
      />
      
      {/* Our Story Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle 
              title="Our Story"
              centered={true}
            />
            
            <div className="prose prose-lg max-w-none">
              <p>
                Founded in 2015, KS Design has established itself as a premier interior design studio in Ahmedabad, Gujarat. What began as a small team with a passion for transforming spaces has evolved into a comprehensive design practice known for its innovative approach and meticulous attention to detail.
              </p>
              <p>
                Our journey has been marked by a commitment to excellence and a deep understanding of how thoughtfully designed spaces can enhance the quality of life. We believe that good design goes beyond aesthetics—it should improve functionality, reflect personal values, and create meaningful experiences.
              </p>
              <p>
                Over the years, we've had the privilege of working on diverse projects across residential, commercial, and hospitality sectors, each with its unique challenges and opportunities. These experiences have enriched our design perspective and strengthened our ability to deliver spaces that truly resonate with our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="section-padding bg-ks-lightGray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-3xl font-semibold mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                At KS Design, our mission is to create thoughtfully designed spaces that enrich lives and reflect the unique identities of our clients. We strive to balance aesthetics with functionality, ensuring that every project not only looks beautiful but also enhances the way people live, work, and interact with their environments.
              </p>
              <p className="text-muted-foreground">
                We are committed to sustainable practices, innovative solutions, and a collaborative approach that places our clients at the center of the design process. Through our work, we aim to contribute positively to the built environment and the communities we serve.
              </p>
            </div>
            
            <div>
              <h2 className="font-serif text-3xl font-semibold mb-6">Our Values</h2>
              <ul className="space-y-4">
                <li className="flex">
                  <span className="w-6 h-6 rounded-full bg-ks-yellow flex items-center justify-center mr-3 flex-shrink-0 mt-1">1</span>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Client-Centric Design</h3>
                    <p className="text-muted-foreground">We prioritize understanding our clients' needs, preferences, and lifestyle to create spaces that authentically reflect who they are.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="w-6 h-6 rounded-full bg-ks-yellow flex items-center justify-center mr-3 flex-shrink-0 mt-1">2</span>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Creativity & Innovation</h3>
                    <p className="text-muted-foreground">We embrace creative thinking and innovative solutions, pushing boundaries to achieve exceptional design outcomes.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="w-6 h-6 rounded-full bg-ks-yellow flex items-center justify-center mr-3 flex-shrink-0 mt-1">3</span>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Attention to Detail</h3>
                    <p className="text-muted-foreground">We believe the smallest details make the biggest difference, and we're committed to excellence at every scale.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="w-6 h-6 rounded-full bg-ks-yellow flex items-center justify-center mr-3 flex-shrink-0 mt-1">4</span>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Integrity & Transparency</h3>
                    <p className="text-muted-foreground">We uphold the highest standards of professionalism, honesty, and transparency in all our interactions.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Instagram Feed Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Follow Us on Instagram"
            subtitle="Get inspired by our latest projects and design ideas"
            centered={true}
          />
          
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-ks-yellow"></div>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {instagramPosts.map((post) => (
                <a 
                  href="https://www.instagram.com/ksdesign_ahmedabad/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  key={post.id} 
                  className="group overflow-hidden rounded-lg relative"
                >
                  <img 
                    src={post.media_url} 
                    alt="Instagram post" 
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-3">
                      <span className="text-xs line-clamp-3">{post.caption}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
          
          <div className="text-center mt-8">
            <a 
              href="https://www.instagram.com/ksdesign_ahmedabad/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-ks-yellow text-ks-darkGray font-medium rounded hover:bg-opacity-90 transition-colors"
            >
              View Our Instagram Feed
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="section-padding bg-ks-lightGray">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Meet Our Team"
            subtitle="A dedicated group of professionals passionate about creating exceptional interiors."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative mb-6 mx-auto overflow-hidden rounded-lg w-64 h-80">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=500" 
                  alt="Samkit - Founder & Principal Designer" 
                  className="w-full h-full object-cover object-center hover-scale"
                />
              </div>
              <h3 className="font-medium text-xl mb-2">Samkit</h3>
              <p className="text-ks-gray">Founder & Principal Designer</p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-6 mx-auto overflow-hidden rounded-lg w-64 h-80">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=500" 
                  alt="Priya - Senior Interior Designer" 
                  className="w-full h-full object-cover object-center hover-scale"
                />
              </div>
              <h3 className="font-medium text-xl mb-2">Priya</h3>
              <p className="text-ks-gray">Senior Interior Designer</p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-6 mx-auto overflow-hidden rounded-lg w-64 h-80">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=500" 
                  alt="Rahul - Project Manager" 
                  className="w-full h-full object-cover object-center hover-scale"
                />
              </div>
              <h3 className="font-medium text-xl mb-2">Rahul</h3>
              <p className="text-ks-gray">Project Manager</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Process */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Design Process"
            subtitle="A collaborative approach that ensures exceptional results for every project."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-ks-yellow text-ks-darkGray flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="font-serif text-xl font-medium mb-4">Discovery</h3>
              <p className="text-muted-foreground">We begin by understanding your needs, preferences, and vision through in-depth consultations.</p>
            </div>
            
            <div className="bg-white p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-ks-yellow text-ks-darkGray flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="font-serif text-xl font-medium mb-4">Concept Development</h3>
              <p className="text-muted-foreground">We create detailed design concepts that align with your vision and address spatial challenges.</p>
            </div>
            
            <div className="bg-white p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-ks-yellow text-ks-darkGray flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="font-serif text-xl font-medium mb-4">Design Refinement</h3>
              <p className="text-muted-foreground">We refine the selected concept based on your feedback, finalizing all design elements.</p>
            </div>
            
            <div className="bg-white p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-ks-yellow text-ks-darkGray flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                4
              </div>
              <h3 className="font-serif text-xl font-medium mb-4">Implementation</h3>
              <p className="text-muted-foreground">We oversee the implementation process, ensuring every detail is executed to perfection.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
