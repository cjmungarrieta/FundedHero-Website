import { motion, useScroll, useTransform } from 'framer-motion';

export default function FloatingOrbs() {
  const { scrollY } = useScroll();

  const orb1Y = useTransform(scrollY, [0, 1000], [0, -200]);
  const orb2Y = useTransform(scrollY, [0, 1000], [0, 150]);
  const orb3Y = useTransform(scrollY, [0, 1000], [0, -100]);
  const orb4Y = useTransform(scrollY, [0, 1000], [0, 180]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 2 }}>
      <motion.div
        style={{ y: orb1Y }}
        animate={{
          x: [0, 100, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 left-10 w-[500px] h-[500px] bg-gold/20 rounded-full blur-[120px]"
      />

      <motion.div
        style={{ y: orb2Y, background: 'radial-gradient(circle, rgba(0, 0, 0, 0.6) 0%, transparent 70%)' }}
        animate={{
          x: [0, -80, 0],
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute top-1/3 right-20 w-[600px] h-[600px] rounded-full blur-[140px]"
      />

      <motion.div
        style={{ y: orb3Y }}
        animate={{
          x: [0, 60, 0],
          scale: [1, 1.1, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
        className="absolute bottom-40 left-1/4 w-[450px] h-[450px] bg-gold/15 rounded-full blur-[100px]"
      />

      <motion.div
        style={{ y: orb4Y, background: 'radial-gradient(circle, rgba(255, 215, 0, 0.12) 0%, transparent 70%)' }}
        animate={{
          x: [0, -90, 0],
          scale: [1, 1.25, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 6,
        }}
        className="absolute bottom-20 right-1/3 w-[550px] h-[550px] rounded-full blur-[130px]"
      />
    </div>
  );
}
