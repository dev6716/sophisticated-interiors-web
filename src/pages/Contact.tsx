
import { useEffect } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    // This would be replaced with actual Google Maps integration
    console.log("Google Maps would be loaded here");
  }, []);

  return (
    <Layout>
      <Hero
        title="Contact Us"
        subtitle="Let's discuss how we can bring your vision to life."
        image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1200"
      />
      
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-3xl font-semibold mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                <div className="flex">
                  <div className="w-12 h-12 bg-ks-yellow rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                    <MapPin className="text-ks-darkGray" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Our Location</h3>
                    <p className="text-muted-foreground">
                      714/ One World West, Besides Bopal Approach BRTS Stand, Iscon Ambali Road, Bopal, Ahmedabad – 380058
                    </p>
                    <a 
                      href="https://maps.app.goo.gl/J7rXmCCRJWGyDJcU7" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-ks-yellow hover:underline inline-block mt-2"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 bg-ks-yellow rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                    <Phone className="text-ks-darkGray" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Phone</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+919327008774" className="hover:text-ks-yellow">+91 93270 08774</a>
                    </p>
                    <p className="text-muted-foreground">
                      <a href="tel:+918735975757" className="hover:text-ks-yellow">+91 87359 75757</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 bg-ks-yellow rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                    <Mail className="text-ks-darkGray" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:samkit@ksdesign.co.in" className="hover:text-ks-yellow">
                        samkit@ksdesign.co.in
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 bg-ks-yellow rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                    <Instagram className="text-ks-darkGray" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Social Media</h3>
                    <p className="text-muted-foreground">
                      <a 
                        href="https://www.instagram.com/ksdesign_ahmedabad/" 
                        target="_blank" 
                        rel="noreferrer"
                        className="hover:text-ks-yellow"
                      >
                        @ksdesign_ahmedabad
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Office Hours */}
              <div className="mt-12">
                <h3 className="text-lg font-medium mb-4">Office Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-3xl font-semibold mb-8">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="h-[500px] relative bg-gray-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.0085477737256!2d72.46726!3d23.0320055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b422b3da92d%3A0x9fdffd4cf33ca7b0!2sOne%20World%20West%2C%20Iscon%20Ambali%20Rd%2C%20Bopal%2C%20Ahmedabad%2C%20Gujarat%20380058!5e0!3m2!1sen!2sin!4v1715453687701!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="KS Design Office Location"
        ></iframe>
      </section>
    </Layout>
  );
};

export default Contact;
