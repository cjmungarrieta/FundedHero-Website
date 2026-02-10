import { motion } from 'framer-motion';
import { Target, TrendingUp, DollarSign, ArrowRight } from 'lucide-react';
import OrbConnector from './OrbConnector';

const steps = [
  {
    icon: Target,
    number: '01',
    title: 'Choose Your Challenge',
    description: 'Choose a funding program that suits your goals and demonstrate your skills through our straightforward evaluation process FundedHero.',
  },
  {
    icon: TrendingUp,
    number: '02',
    title: 'FundedHero Prove Your Skills',
    description: 'Trade consistently and achieve the profit target while adhering to risk management rules. FundedHero. Show us your edge in the market.',
  },
  {
    icon: DollarSign,
    number: '03',
    title: 'Get Funded',
    description: 'Once you pass the evaluation, we fund you immediately. Focus on trading while we handle the rest.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient-bg opacity-50"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkQ3MDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-20 w-[600px] h-[600px] bg-gold/20 rounded-full blur-[150px] pointer-events-none"
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
            How to Get Funded
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Add all of our challenge types
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-12 relative">
          {/* Orb Energy Connector */}
          <OrbConnector />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-ultra rounded-3xl p-8 hover:glass-premium transition-all duration-500 group text-center relative overflow-visible"
              >
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 glass-bento-icon rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-gold/30 via-gold/15 to-transparent"></div>
                      <Icon className="w-10 h-10 text-gold relative z-10" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center border-2 border-black shadow-lg">
                      <span className="text-black font-bold text-sm">{step.number}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <motion.button
            onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="fhx-button px-10 py-5 rounded-2xl text-lg flex items-center gap-3 group mx-auto"
          >
            <span className="flex items-center gap-3 static-text-glow">
              Get Funded Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
