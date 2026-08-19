"use client";

import { motion } from "framer-motion";

const SEED: Array<{ x: number; y: number; size: number; duration: number; delay: number }> = [
  { x: 12, y: 25, size: 2.2, duration: 7, delay: 0 },
  { x: 34, y: 58, size: 1.5, duration: 9, delay: 1.2 },
  { x: 67, y: 18, size: 3.0, duration: 8, delay: 0.5 },
  { x: 89, y: 42, size: 1.8, duration: 10, delay: 2.1 },
  { x: 23, y: 75, size: 2.5, duration: 7.5, delay: 0.8 },
  { x: 51, y: 33, size: 1.2, duration: 11, delay: 1.8 },
  { x: 78, y: 67, size: 2.8, duration: 8.5, delay: 0.3 },
  { x: 8, y: 50, size: 1.6, duration: 9.5, delay: 2.5 },
  { x: 42, y: 82, size: 2.0, duration: 7, delay: 1.5 },
  { x: 93, y: 15, size: 1.3, duration: 10.5, delay: 0.7 },
  { x: 56, y: 91, size: 2.4, duration: 8, delay: 1.0 },
  { x: 18, y: 40, size: 1.7, duration: 9, delay: 2.0 },
  { x: 72, y: 55, size: 2.1, duration: 7.5, delay: 0.4 },
  { x: 38, y: 12, size: 1.4, duration: 10, delay: 1.6 },
  { x: 85, y: 78, size: 2.6, duration: 8.5, delay: 2.3 },
  { x: 4, y: 63, size: 1.9, duration: 9.5, delay: 0.9 },
  { x: 61, y: 28, size: 2.3, duration: 7, delay: 1.3 },
  { x: 29, y: 88, size: 1.1, duration: 11, delay: 0.2 },
  { x: 76, y: 45, size: 2.7, duration: 8, delay: 2.4 },
  { x: 48, y: 7, size: 1.6, duration: 9, delay: 1.7 },
  { x: 15, y: 93, size: 2.0, duration: 10.5, delay: 0.6 },
  { x: 64, y: 60, size: 1.3, duration: 7.5, delay: 1.1 },
  { x: 91, y: 35, size: 2.4, duration: 8.5, delay: 2.2 },
  { x: 44, y: 70, size: 1.8, duration: 9.5, delay: 0.1 },
  { x: 80, y: 85, size: 2.9, duration: 7, delay: 1.9 },
  { x: 27, y: 20, size: 1.5, duration: 10, delay: 0.8 },
  { x: 58, y: 48, size: 2.2, duration: 8, delay: 1.4 },
  { x: 10, y: 72, size: 1.7, duration: 9, delay: 2.6 },
  { x: 70, y: 10, size: 2.1, duration: 11, delay: 0.5 },
  { x: 35, y: 53, size: 1.4, duration: 7.5, delay: 1.8 },
];

export function FloatingParticles({ count = 25 }: { count?: number }) {
  const particles = SEED.slice(0, count);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/[0.08]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
