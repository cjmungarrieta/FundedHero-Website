import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function OrbConnector() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFC800" stopOpacity="0" />
            <stop offset="20%" stopColor="#FFC800" stopOpacity="0.6" />
            <stop offset="80%" stopColor="#FFD700" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FFC800" stopOpacity="0" />
          </linearGradient>

          <filter id="pathGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Connecting Path between orbs */}
        <motion.path
          d="M 200 50 Q 400 100 600 50 Q 800 0 1000 50"
          fill="none"
          stroke="url(#pathGradient)"
          strokeWidth="2"
          strokeDasharray="10,5"
          filter="url(#pathGlow)"
          style={{
            pathLength,
          }}
          opacity={0.5}
        />

        {/* Energy particles traveling along path */}
        {[0, 0.25, 0.5, 0.75].map((offset, i) => {
          const x = useTransform(
            scrollYProgress,
            [0, 1],
            [200 + offset * 800, 1000]
          );

          return (
            <motion.circle
              key={i}
              cx={x}
              cy="50"
              r={4}
              fill="#FFC800"
              filter="url(#pathGlow)"
              initial={{ opacity: 0.3, scale: 1 }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.75, 1.25, 0.75],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
              style={{ transformOrigin: "center" }}
            />
          );
        })}
      </svg>
    </div>
  );
}
