import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Brain, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/80 backdrop-blur-xl border-b border-border shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <img
              src="/logo.png"
              alt="Data Intelligence Platform Agent Studio"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("profile")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Profile
            </button>
            <button
              onClick={() => scrollToSection("knowledge")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Knowledge
            </button>
            <button
              onClick={() => scrollToSection("toolset")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Toolset
            </button>
            <button
              onClick={() => scrollToSection("behavior")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Behavior
            </button>
            <button
              onClick={() => scrollToSection("testing")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Testing
            </button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link to="/login">
              <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <button
              onClick={() => scrollToSection("profile")}
              className="block w-full text-left py-2 text-foreground/80 hover:text-foreground transition-colors"
            >
              Profile
            </button>
            <button
              onClick={() => scrollToSection("knowledge")}
              className="block w-full text-left py-2 text-foreground/80 hover:text-foreground transition-colors"
            >
              Knowledge
            </button>
            <button
              onClick={() => scrollToSection("toolset")}
              className="block w-full text-left py-2 text-foreground/80 hover:text-foreground transition-colors"
            >
              Toolset
            </button>
            <button
              onClick={() => scrollToSection("behavior")}
              className="block w-full text-left py-2 text-foreground/80 hover:text-foreground transition-colors"
            >
              Behavior
            </button>
            <button
              onClick={() => scrollToSection("testing")}
              className="block w-full text-left py-2 text-foreground/80 hover:text-foreground transition-colors"
            >
              Testing
            </button>
            <div className="pt-4 space-y-2">
              <Link to="/login" className="block">
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link to="/login" className="block">
                <Button className="w-full bg-gradient-primary">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
