import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CountdownTimerProps {
  targetDate: Date;
  onComplete?: () => void;
}

export default function CountdownTimer({ targetDate, onComplete }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        onComplete?.();
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <motion.div
        key={value}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-14 h-14 md:w-16 md:h-16 glass-premium rounded-xl flex items-center justify-center"
      >
        <span className="text-2xl md:text-3xl font-display font-bold text-white">
          {value.toString().padStart(2, '0')}
        </span>
      </motion.div>
      <span className="text-xs text-gray-400 mt-2 uppercase tracking-wider">{label}</span>
    </div>
  );

  return (
    <div className="flex items-center gap-3 md:gap-4">
      <TimeBlock value={timeLeft.days} label="Days" />
      <span className="text-2xl text-gold font-bold mb-6">:</span>
      <TimeBlock value={timeLeft.hours} label="Hrs" />
      <span className="text-2xl text-gold font-bold mb-6">:</span>
      <TimeBlock value={timeLeft.minutes} label="Min" />
      <span className="text-2xl text-gold font-bold mb-6">:</span>
      <TimeBlock value={timeLeft.seconds} label="Sec" />
    </div>
  );
}
