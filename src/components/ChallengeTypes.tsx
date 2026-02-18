import { motion } from 'framer-motion';
import { Zap, Target, TrendingUp, Award, Rocket, BarChart3, CheckCircle } from 'lucide-react';

const challenges = [
  {
    icon: Zap,
    name: '1 Step Hero',
    description: 'Fastest path to funding',
    target: '10% Profit Target',
    drawdown: '12% Max Drawdown',
    time: 'No Time Limit',
    payout: 'Up to 95% Profit Split',
    popular: true,
  },
  {
    icon: Target,
    name: '2 Step Hero',
    description: 'Balanced evaluation process',
    target: '8% + 5% Targets',
    drawdown: '12% Static Drawdown',
    time: 'No Time Limit',
    payout: 'Up to 90% Profit Split',
    popular: false,
  },
  {
    icon: TrendingUp,
    name: '3 Step Hero',
    description: 'Gradual progression path',
    target: '6% + 5% + 5% Targets',
    drawdown: '10% Static Drawdown',
    time: 'No Time Limit',
    payout: 'Up to 90% Profit Split',
    popular: false,
  },
  {
    icon: Award,
    name: 'Fowks 1',
    description: 'Single phase challenge',
    target: '10% Profit Target',
    drawdown: '10% Max Drawdown',
    time: 'No Time Limit',
    payout: 'Up to 90% Profit Split',
    popular: false,
  },
  {
    icon: Rocket,
    name: 'Fowks 2',
    description: 'Two phase evaluation',
    target: '8% + 5% Targets',
    drawdown: '10% Static Drawdown',
    time: 'No Time Limit',
    payout: 'Up to 90% Profit Split',
    popular: false,
  },
  {
    icon: BarChart3,
    name: 'Futures',
    description: 'Futures trading focused',
    target: '8% Profit Target',
    drawdown: '12% Max Drawdown',
    time: 'No Time Limit',
    payout: 'Up to 90% Profit Split',
    popular: false,
  },
  {
    icon: CheckCircle,
    name: 'Evaluation',
    description: 'Standard evaluation',
    target: '10% Profit Target',
    drawdown: '12% Static Drawdown',
    time: 'No Time Limit',
    payout: 'Up to 90% Profit Split',
    popular: false,
  },
];

export default function ChallengeTypes() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Choose Your Challenge Type
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Multiple evaluation paths designed for different trading styles. All with static drawdown and no time limits.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <motion.div
                key={challenge.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-premium rounded-3xl p-6 backdrop-blur-2xl relative group cursor-pointer"
                style={{
                  background: challenge.popular
                    ? 'linear-gradient(135deg, rgba(255, 200, 0, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)'
                    : 'rgba(0, 0, 0, 0.6)',
                }}
              >
                {challenge.popular && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute -top-3 -right-3 bg-gradient-to-r from-gold via-gold-light to-gold text-black text-xs font-bold px-4 py-1.5 rounded-full shadow-lg"
                  >
                    MOST POPULAR
                  </motion.div>
                )}

                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-to-br from-gold via-gold-light to-gold rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:shadow-gold/50 transition-shadow duration-300"
                  >
                    <Icon className="w-8 h-8 text-black hover-rotate-icon" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white mb-1">
                      {challenge.name}
                    </h3>
                    <p className="text-sm text-gray-400">{challenge.description}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between py-2 border-b border-white/5">
                    <span className="text-sm text-gray-400">Profit Target</span>
                    <span className="text-sm font-semibold text-white">{challenge.target}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-white/5">
                    <span className="text-sm text-gray-400">Max Drawdown</span>
                    <span className="text-sm font-semibold text-white">{challenge.drawdown}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-white/5">
                    <span className="text-sm text-gray-400">Time Limit</span>
                    <span className="text-sm font-semibold text-success">{challenge.time}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-gray-400">Profit Split</span>
                    <span className="text-sm font-semibold text-gold">{challenge.payout}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-gradient-to-r from-gold to-gold-light text-black font-bold rounded-xl hover:shadow-2xl hover:shadow-gold/50 transition-all duration-300"
                >
                  View Details
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
