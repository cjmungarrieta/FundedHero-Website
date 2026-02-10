import { motion } from 'framer-motion';
import { Clock, DollarSign, Shield, TrendingUp, Users, Check } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Not All Heroes Risk Their Own Capital',
    description: 'Trade with our funds and keep up to 90% of your profits. No personal risk—just pure opportunity.',
  },
  {
    icon: TrendingUp,
    title: 'Supercharge Your Trading Potential',
    description: 'Scale your account as you prove your consistency and unlock higher profit shares along the way',
  },
  {
    icon: DollarSign,
    title: 'Trade Fearlessly with Zero Personal Risk',
    description: 'Access advanced analytics, performance tracking, and top-tier platforms to sharpen your trading edge.',
  },
  {
    icon: Users,
    title: 'Every Hero Needs the Right Support',
    description: 'Pass our evaluation, access funded accounts, and grow your trading career with a firm that has your back.',
  },
  {
    icon: Clock,
    title: 'Instant Access to Your Hard-Earned Profits',
    description: 'No delays, no hidden fees—get paid fast so you can focus on what matters most',
  },
  {
    icon: Check,
    title: 'A Hero\'s Journey is Never Alone',
    description: 'Join a thriving community of funded traders, gain expert insights, and level up your strategies.',
  },
];

export default function Features() {
  return (
    <section className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient-bg opacity-50"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkQ3MDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 right-10 w-[600px] h-[600px] bg-gold/20 rounded-full blur-[150px] pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display fhx-heading mb-4 text-white">
            Why Choose Us
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to succeed as a funded trader
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-ultra rounded-2xl p-6 md:p-8 hover:glass-premium transition-all duration-500 group"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 glass-bento-icon rounded-xl flex items-center justify-center shadow-xl mb-5 group-hover:scale-110 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-gold/10 to-transparent"></div>
                  <Icon className="w-7 h-7 md:w-8 md:h-8 text-gold relative z-10" />
                </div>

                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
