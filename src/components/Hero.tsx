import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, TrendingUp, Target, DollarSign, Clock } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { URLS } from '../constants/urls';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [currentProfit, setCurrentProfit] = useState(5420);

  useEffect(() => {
    const profitInterval = setInterval(() => {
      setCurrentProfit(prev => prev + Math.random() * 40 - 20);
    }, 3000);

    return () => {
      clearInterval(profitInterval);
    };
  }, []);

  const scrollToPlans = () => {
    document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="relative min-h-[100vh] flex items-center justify-center overflow-x-clip circuit-pattern pt-[166px]">
      <div className="light-beam light-beam-1"></div>
      <div className="light-beam light-beam-2"></div>
      <div className="light-beam light-beam-3"></div>

      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 animated-gradient-bg noise-texture"
      >
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-20 w-[600px] h-[600px] bg-gold/20 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 right-20 w-[700px] h-[700px] bg-black/40 rounded-full blur-[120px]"
          />
        </div>

        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkQ3MDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display fhx-heading mb-6 text-white leading-tight"
            >
              Prop Trading With Static Drawdown & No Time Limits
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 leading-relaxed"
            >
              Trade up to $200K with rules that don't move. Keep up to 95% of profits. Payouts processed in ~7 hours once approved.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="text-base text-gray-400 mb-8 leading-relaxed"
            >
              Built for serious traders who want funding without games.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                  >
                    <div className="w-5 h-5 text-gold fill-gold">★</div>
                  </motion.div>
                ))}
              </div>
              <a
                href={URLS.TRUSTPILOT}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col hover:opacity-80 transition-opacity"
              >
                <span className="text-white font-bold text-lg">4.8/5</span>
                <span className="text-gray-400 text-xs">27,573 reviews on Trustpilot</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={scrollToPlans}
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="fhx-button px-10 py-5 rounded-2xl text-lg flex items-center justify-center gap-3 group"
              >
                <span className="flex items-center gap-3 static-text-glow">
                  Start Your Challenge
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </motion.button>

              <motion.button
                onClick={scrollToHowItWorks}
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="px-10 py-5 glass-premium text-white rounded-2xl font-semibold text-lg transition-all duration-500 backdrop-blur-2xl flex items-center justify-center gap-3 group"
              >
                See How It Works
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative perspective-card"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="lens-flare"
              style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="glass-ultra rounded-[28px] p-6 md:p-8 backdrop-blur-2xl premium-shadow-lg noise-texture relative"
              style={{ zIndex: 2 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex items-center justify-between mb-6"
              >
                <h3 className="text-xl md:text-2xl font-display font-bold text-white">FundedHero Account</h3>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.15, 1], opacity: [1, 0.8, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="px-3 py-1.5 bg-success/20 text-success rounded-full text-xs md:text-sm font-bold border border-success/40 flex items-center gap-2 backdrop-blur-xl"
                  >
                    <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
                    LIVE
                  </motion.div>
                </motion.div>
              </motion.div>

              <div className="space-y-3 mb-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  whileHover={{ x: 4, scale: 1.02 }}
                  className="glass-premium rounded-xl p-4 hover:glass-ultra transition-all duration-500 animate-float"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs md:text-sm text-gray-400">Account Size</span>
                    <DollarSign className="w-4 h-4 text-gold" />
                  </div>
                  <div className="text-2xl md:text-3xl font-display font-bold text-white">$100,000</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  whileHover={{ x: 4, scale: 1.02 }}
                  className="glass-premium rounded-xl p-4 hover:glass-ultra transition-all duration-500 animate-float-delay"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs md:text-sm text-gray-400">Profit Target</span>
                    <Target className="w-4 h-4 text-gold" />
                  </div>
                  <div className="text-2xl md:text-3xl font-display font-bold text-white">$8,000</div>
                  <div className="text-xs md:text-sm text-gray-400 mt-1">8% target to pass</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  whileHover={{ x: 4, scale: 1.02 }}
                  className="glass-premium rounded-xl p-4 hover:glass-ultra transition-all duration-500 animate-float"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs md:text-sm text-gray-400">Max Drawdown</span>
                    <Target className="w-4 h-4 text-danger" />
                  </div>
                  <div className="text-2xl md:text-3xl font-display font-bold text-white">$12,000</div>
                  <div className="text-xs md:text-sm text-gray-400 mt-1">Static drawdown (12%)</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  whileHover={{ x: 4, scale: 1.02 }}
                  className="glass-premium rounded-xl p-4 hover:glass-ultra transition-all duration-500 border-2 border-success/30 animate-float-delay"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs md:text-sm text-gray-400">Current Profit</span>
                    <TrendingUp className="w-4 h-4 text-success" />
                  </div>
                  <motion.div
                    key={Math.floor(currentProfit)}
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    className="text-2xl md:text-3xl font-display font-bold text-success"
                  >
                    +${currentProfit.toFixed(0)}
                  </motion.div>
                  <div className="text-xs md:text-sm text-success mt-1">+{(currentProfit / 1000).toFixed(2)}% gain</div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="glass rounded-xl p-4 bg-gradient-to-r from-gold/10 to-gold-light/10 border border-gold/30"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-gold" />
                  <div className="text-xs md:text-sm text-gray-300">Last Payout</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xl md:text-2xl font-display font-bold text-white mb-0.5">$4,850</div>
                    <div className="text-xs md:text-sm text-gold font-semibold">Paid in 6.5 hours</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.div
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-br from-gold/30 to-gold-light/20 rounded-full blur-[100px] pointer-events-none"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <motion.div
                animate={{
                  y: [0, 30, 0],
                  rotate: [0, -10, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 w-64 h-64 bg-gradient-to-br from-black/40 to-gold/20 rounded-full blur-[100px] pointer-events-none"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
