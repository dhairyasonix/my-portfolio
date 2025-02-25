import React, { useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const AnimatedCircle = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 150, damping: 20 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.set(event.clientX - 8); // Adjust to center the 12px circle
      mouseY.set(event.clientY - 8); // Adjust to center the 12px circle
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-coustomGreen rounded-full pointer-events-none  shadow-[0_0_5px_theme('colors.coustomGreen')] "
      style={{ x, y }}
    />
  );
};

export default AnimatedCircle;
