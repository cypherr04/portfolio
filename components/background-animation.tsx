"use client";

import { motion } from "framer-motion";

export default function BackgroundAnimation() {
  const particles = [
    { id: 1, size: 400, left: "10%", top: "20%" },
    { id: 2, size: 300, left: "60%", top: "10%" },
    { id: 3, size: 250, left: "80%", top: "60%" },
    { id: 4, size: 350, left: "30%", top: "70%" },
    { id: 5, size: 200, left: "50%", top: "40%" },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full blur-3xl opacity-30"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.left,
            top: particle.top,
            backgroundColor: "hsl(var(--primary))",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          initial={false}
        />
      ))}
    </div>
  );
}
