import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  activePage: string;
  onPageChange: (page: string) => void;
}

export const Layout = ({ children, activePage, onPageChange }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-surface selection:bg-primary-container selection:text-on-primary-container">
      <Navbar activePage={activePage} onPageChange={onPageChange} />
      <div className="pt-24 md:pt-32 max-w-[1440px] mx-auto px-6 md:px-12 w-full transition-all duration-500">
        {children}
      </div>
      <div className={activePage === "contact" ? "hidden md:block" : ""}>
        <Footer />
      </div>
    </div>
  );
};
