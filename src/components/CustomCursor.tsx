
import { useEffect, useState } from 'react';

interface CustomCursorProps {
  mousePosition: { x: number; y: number };
}

const CustomCursor = ({ mousePosition }: CustomCursorProps) => {
  const [isClicking, setIsClicking] = useState(false);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    let moveTimeout: NodeJS.Timeout;
    const handleMouseMove = () => {
      setIsMoving(true);
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => setIsMoving(false), 100);
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(moveTimeout);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className={`fixed w-6 h-6 pointer-events-none z-[9999] transition-all duration-100 ${
          isClicking ? 'scale-75' : isMoving ? 'scale-125' : 'scale-100'
        }`}
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `translate(0, 0) scale(${isClicking ? 0.75 : isMoving ? 1.25 : 1})`,
        }}
      >
        <div className={`w-full h-full rounded-full border-2 transition-all duration-200 ${
          isClicking 
            ? 'border-red-400 bg-red-400/30 shadow-lg shadow-red-400/50' 
            : isMoving 
            ? 'border-purple-400 bg-purple-400/20 shadow-md shadow-purple-400/30'
            : 'border-white bg-white/10'
        }`} />
      </div>

      {/* Cursor trail */}
      <div
        className="fixed w-2 h-2 bg-white/60 rounded-full pointer-events-none z-[9998] transition-all duration-300"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
        }}
      />
    </>
  );
};

export default CustomCursor;
