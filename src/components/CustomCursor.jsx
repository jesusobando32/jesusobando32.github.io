import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  useEffect(() => {
    const handleMouseOver = (e) => {
      // Check if hovering over interactive elements
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.classList.contains('interactive')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full hidden md:block"
      style={{
        x: mouseX,
        y: mouseY,
        translateX: '-50%',
        translateY: '-50%',
        border: '2px solid #38BDF8', // accent color
      }}
      animate={{
        width: isHovered ? 40 : 24,
        height: isHovered ? 40 : 24,
        backgroundColor: isHovered ? 'rgba(56, 189, 248, 0.2)' : 'transparent',
        borderColor: isHovered ? 'rgba(56, 189, 248, 0.5)' : '#38BDF8',
      }}
      transition={{
        width: { type: 'spring', stiffness: 300, damping: 20 },
        height: { type: 'spring', stiffness: 300, damping: 20 },
        backgroundColor: { duration: 0.2 }
      }}
    />
  );
};

export default CustomCursor;
