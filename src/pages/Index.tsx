
import { useEffect, useState } from 'react';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import Navigation from '@/components/Navigation';
import MouseFollower from '@/components/MouseFollower';
import CustomCursor from '@/components/CustomCursor';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el) => observer.observe(el));

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black cursor-none relative overflow-hidden">
      <CustomCursor mousePosition={mousePosition} />
      <MouseFollower mousePosition={mousePosition} />
      
      <Navigation />
      <HeroSection />
      <div className="section-separator my-4"></div>
      <SkillsSection />
      <div className="section-separator my-4"></div>
      <ProjectsSection />
      <div className="section-separator my-4"></div>
      <ExperienceSection />
      <div className="section-separator my-4"></div>
      <ContactSection />
    </div>
  );
};

export default Index;
