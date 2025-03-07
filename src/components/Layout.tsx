
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const Layout = ({ children, className = "", fullWidth = false }: LayoutProps) => {
  return (
    <div className={`flex flex-col min-h-screen ${className}`}>
      <Navbar />
      <main className={`flex-grow ${fullWidth ? '' : 'container mx-auto px-4'}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
