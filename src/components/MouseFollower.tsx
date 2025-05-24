
import { useEffect, useState } from 'react';

interface MouseFollowerProps {
  mousePosition: { x: number; y: number };
  showStars?: boolean;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  delay: number;
  type: 'star' | 'bird';
}

const MouseFollower = ({ mousePosition, showStars = false }: MouseFollowerProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (!showStars) {
      setParticles([]);
      return;
    }

    // Initialize particles only when showStars is true
    const initialParticles: Particle[] = [];
    for (let i = 0; i < 8; i++) {
      initialParticles.push({
        id: i,
        x: mousePosition.x,
        y: mousePosition.y,
        delay: i * 30,
        type: i % 2 === 0 ? 'star' : 'bird'
      });
    }
    setParticles(initialParticles);
  }, [showStars]);

  useEffect(() => {
    if (!showStars || particles.length === 0) return;

    const updateParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: particle.x + (mousePosition.x - particle.x) * 0.3,
        y: particle.y + (mousePosition.y - particle.y) * 0.3,
      })));
    };

    const timer = setInterval(updateParticles, 12);
    return () => clearInterval(timer);
  }, [mousePosition, showStars, particles.length]);

  if (!showStars) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9997]">
      {particles.map((particle, index) => (
        <div
          key={particle.id}
          className="absolute transition-all duration-50 ease-out"
          style={{
            left: particle.x - 8,
            top: particle.y - 8,
            transitionDelay: `${particle.delay}ms`,
          }}
        >
          {particle.type === 'star' ? (
            <div className={`text-lg animate-pulse ${
              index % 3 === 0 ? 'text-white' : 
              index % 3 === 1 ? 'text-purple-400' : 'text-red-400'
            }`}>
              ✦
            </div>
          ) : (
            <div className={`text-sm animate-bounce ${
              index % 3 === 0 ? 'text-white' : 
              index % 3 === 1 ? 'text-purple-400' : 'text-red-400'
            }`}>
              🕊️
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MouseFollower;
