import { motion } from 'framer-motion';
import { Users, DollarSign, Clock, Star } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const stats = [
  {
    icon: Users,
    number: 10000,
    suffix: '+',
    label: 'Traders Funded Worldwide',
    animated: true,
  },
  {
    icon: DollarSign,
    number: 2300000,
    prefix: '$',
    suffix: '+',
    label: 'Total Paid to Traders',
    animated: true,
    format: 'M',
  },
  {
    icon: Clock,
    number: 7,
    prefix: '~',
    suffix: ' Hours',
    label: 'Avg Payout Processing',
    animated: true,
  },
  {
    icon: Star,
    number: 4.8,
    suffix: '/5',
    label: 'TrustScore (1,000+ Reviews)',
    animated: true,
    decimals: 1,
  },
];

export default function Statistics() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-2">
            Why Traders Trust FundedHero
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const displayNumber = stat.format === 'M' ? stat.number / 1000000 : stat.number;
            const displaySuffix = stat.format === 'M' ? 'M' + (stat.suffix || '') : (stat.suffix || '');

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`text-center ${index % 2 === 0 ? 'animate-float' : 'animate-float-delay'}`}
              >
                <div className="flex justify-center mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="w-14 h-14 bg-gradient-to-br from-gold via-gold-light to-gold rounded-2xl flex items-center justify-center shadow-xl hover:shadow-2xl hover:shadow-gold/50 transition-shadow duration-300"
                  >
                    <Icon className="w-7 h-7 text-black" />
                  </motion.div>
                </div>
                <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                  {stat.animated ? (
                    <AnimatedCounter
                      end={displayNumber}
                      prefix={stat.prefix}
                      suffix={displaySuffix}
                      decimals={stat.decimals || 0}
                      duration={2.5}
                    />
                  ) : (
                    `${stat.prefix || ''}${displayNumber}${displaySuffix}`
                  )}
                </div>
                <div className="text-text-muted font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
