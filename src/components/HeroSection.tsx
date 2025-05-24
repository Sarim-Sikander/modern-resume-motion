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
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-6 animate-float relative group">
              <Star className="h-4 w-4 text-red-400 animate-pulse" />
              <span className="text-sm font-medium text-white glow-text cursor-pointer">Available for new opportunities</span>
              
              {/* Hover tooltip for job titles */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
                <div className="bg-black/90 backdrop-blur-sm border border-purple-500/50 rounded-lg px-4 py-3 text-sm text-white shadow-lg shadow-purple-500/20 whitespace-nowrap">
                  <div className="text-purple-400 font-semibold mb-1">Looking for:</div>
                  <div className="space-y-1 text-gray-300">
                    <div>• Mid/Senior Python Developer</div>
                    <div>• Data Engineer</div>
                    <div>• Data Scientist</div>
                    <div>• Machine learning engineer</div>
                  </div>
                  {/* Arrow pointing up */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-purple-500/50"></div>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 text-gradient leading-tight glow-text">
              Data
              <br />
              <span className="text-gradient-purple">Engineer/Scientist</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed glow-text">
              Engineering intelligent data solutions that transform business insights with modern technologies.
              <span className="text-gradient-red"> Specialized in Python, Analytics, Big Data, Machine Learning, and cloud architecture.</span>
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
          <div className="flex justify-center lg:justify-end items-center">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 overflow-hidden">
              
              {/* STEP 1: REMOVE/COMMENT OUT THIS ENTIRE PLACEHOLDER SECTION */}
              {/* 
              <div className="absolute right-0 top-0 w-full h-full bg-gradient-to-l from-purple-500/20 to-transparent rounded-full border border-purple-500/30 flex items-center justify-center">
                <div className="text-center text-white/60">
                  <div className="text-lg mb-2">Your Photo Here</div>
                  <div className="text-sm">Add your transparent image</div>
                  <div className="text-xs mt-2 px-4">Upload a transparent PNG with your face centered for best results</div>
                </div>
              </div>
              */}
              
              {/* STEP 2: UNCOMMENT AND MODIFY THIS IMAGE SECTION */}
              <img 
                src="/image.png" 
                alt="Sarim Sikander - Data Engineer/Scientist" 
                className="absolute right-0 top-0 w-full h-full object-cover object-center"
                style={{ clipPath: 'inset(0 0 0 100%)' }}
              />
              
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