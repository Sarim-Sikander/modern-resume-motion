
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-red-900/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-6 animate-float">
              <Star className="h-4 w-4 text-red-400 animate-pulse" />
              <span className="text-sm font-medium text-white glow-text">Available for new opportunities</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 text-gradient leading-tight glow-text">
              Senior Web
              <br />
              <span className="text-gradient-purple">Developer</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed glow-text">
              Crafting exceptional digital experiences with modern technologies. 
              <span className="text-gradient-red"> Specialized in React, Node.js, and cloud architecture.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button
                onClick={() => scrollToSection('projects')}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-red-600 hover:from-purple-700 hover:to-red-700 text-white px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-purple-500/50 glow-text"
              >
                View My Work
              </Button>
              
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                size="lg"
                className="border-2 border-purple-500 hover:border-red-500 text-white hover:text-red-400 bg-transparent hover:bg-red-500/10 px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 glow-text"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="hidden lg:flex justify-end items-center">
            <div className="relative w-96 h-96 overflow-hidden">
              {/* Placeholder for your transparent image */}
              <div className="absolute right-0 top-0 w-full h-full bg-gradient-to-l from-purple-500/20 to-transparent rounded-full border border-purple-500/30 flex items-center justify-center">
                <div className="text-center text-white/60">
                  <div className="text-lg mb-2">Your Photo Here</div>
                  <div className="text-sm">Add your transparent image</div>
                  <div className="text-xs mt-2 px-4">Upload a transparent PNG with your face centered for best results</div>
                </div>
              </div>
              
              {/* You can replace the placeholder above with your actual image like this: */}
              {/* <img 
                src="/path-to-your-image.png" 
                alt="Profile" 
                className="absolute right-0 top-0 w-full h-full object-cover object-center"
                style={{ clipPath: 'inset(0 0 0 50%)' }}
              /> */}
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center glow-text">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
