import { motion } from "framer-motion";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
       <div className="flex items-center gap-2 text-2xl font-bold font-display text-white tracking-tight" data-testid="logo">
  <img src="/webrs_india_logo.svg" alt="Logo" className="h-9 w-9" />
  WebRS India
</div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm font-medium text-white/80 hover:text-white transition-colors" data-testid="nav-home">Home</button>
          <button onClick={() => scrollTo("pricing")} className="text-sm font-medium text-white/80 hover:text-white transition-colors" data-testid="nav-pricing">Pricing</button>
          <button onClick={() => scrollTo("portfolio")} className="text-sm font-medium text-white/80 hover:text-white transition-colors" data-testid="nav-portfolio">Portfolio</button>
          <button onClick={() => scrollTo("contact")} className="text-sm font-medium text-white/80 hover:text-white transition-colors" data-testid="nav-contact">Contact</button>
        </nav>

        <div className="hidden md:block">
          <a
            href="https://wa.me/918800788654?text=Hi%2C%20I%20want%20a%20free%2024-hour%20demo%20website%20for%20my%20business"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            data-testid="nav-cta"
          >
            Get Demo
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-card border-b border-border/50 p-4 flex flex-col gap-4 shadow-lg md:hidden"
        >
          <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileMenuOpen(false); }} className="text-left py-2 text-white font-medium" data-testid="mobile-nav-home">Home</button>
          <button onClick={() => scrollTo("pricing")} className="text-left py-2 text-white font-medium" data-testid="mobile-nav-pricing">Pricing</button>
          <button onClick={() => scrollTo("portfolio")} className="text-left py-2 text-white font-medium" data-testid="mobile-nav-portfolio">Portfolio</button>
          <button onClick={() => scrollTo("contact")} className="text-left py-2 text-white font-medium" data-testid="mobile-nav-contact">Contact</button>
          <a
            href="https://wa.me/918800788654?text=Hi%2C%20I%20want%20a%20free%2024-hour%20demo%20website%20for%20my%20business"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 mt-2"
            onClick={() => setMobileMenuOpen(false)}
            data-testid="mobile-nav-cta"
          >
            Get Demo
          </a>
        </motion.div>
      )}
    </header>
  );
}
