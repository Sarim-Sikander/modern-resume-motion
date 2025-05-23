
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg shadow-purple-500/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-playfair text-2xl font-bold text-gradient glow-text">
            Portfolio
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['home', 'skills', 'projects', 'experience', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-white hover:text-purple-400 transition-colors duration-200 capitalize font-medium glow-text hover:scale-110 transform"
              >
                {item}
              </button>
            ))}
          </div>

          <Button
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-purple-600 to-red-600 hover:from-purple-700 hover:to-red-700 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 glow-text shadow-lg shadow-purple-500/30"
          >
            Let's Talk
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
