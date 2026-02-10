import { motion } from 'framer-motion';

export function CommunityGuardian() {
  return (
    <div className="relative w-20 h-20 mx-auto mb-6">
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gold/45 rounded-full blur-xl"
      />

      <svg viewBox="0 0 80 80" className="w-full h-full relative z-10">
        <defs>
          <linearGradient id="communityGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8df51" />
            <stop offset="50%" stopColor="#e4b833" />
            <stop offset="100%" stopColor="#b89328" />
          </linearGradient>
          <linearGradient id="communityLight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF8DC" />
            <stop offset="100%" stopColor="#DAA520" />
          </linearGradient>
          <filter id="communityGlow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.circle
          cx="40"
          cy="40"
          r="36"
          fill="none"
          stroke="url(#communityGold)"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "40px 40px" }}
        />

        <path
          d="M40 12 L58 26 L58 48 Q58 60 40 68 Q22 60 22 48 L22 26 Z"
          fill="#1a1a1a"
          stroke="url(#communityGold)"
          strokeWidth="2.5"
          filter="url(#communityGlow)"
        />

        <path
          d="M40 18 L52 28 L52 46 Q52 55 40 61 Q28 55 28 46 L28 28 Z"
          fill="none"
          stroke="url(#communityLight)"
          strokeWidth="1"
          opacity="0.4"
        />

        <motion.circle
          cx="40"
          cy="40"
          r={10}
          fill="url(#communityGold)"
          filter="url(#communityGlow)"
          initial={{ scale: 1 }}
          animate={{ scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "40px 40px" }}
        />
        <circle cx="37" cy="37" r="3" fill="white" opacity="0.55" />
      </svg>
    </div>
  );
}
