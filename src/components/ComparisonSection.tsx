import { motion } from 'framer-motion';
import { Check, X, Crown } from 'lucide-react';

const features = [
  { name: 'Static Drawdown', fundedHero: true, competitor1: false, competitor2: false, competitor3: false },
  { name: 'No Time Limits', fundedHero: true, competitor1: false, competitor2: true, competitor3: false },
  { name: 'Up to 95% Profit Split', fundedHero: true, competitor1: false, competitor2: false, competitor3: false },
  { name: 'Fast Payouts (~7hrs)', fundedHero: true, competitor1: false, competitor2: false, competitor3: false },
  { name: 'News Trading Allowed', fundedHero: true, competitor1: false, competitor2: true, competitor3: false },
  { name: 'Weekend Holding', fundedHero: true, competitor1: true, competitor2: false, competitor3: true },
  { name: 'EA/Bots Allowed', fundedHero: true, competitor1: true, competitor2: true, competitor3: false },
  { name: 'Free First Payout', fundedHero: true, competitor1: false, competitor2: false, competitor3: false },
  { name: 'Refundable Fee', fundedHero: true, competitor1: false, competitor2: true, competitor3: false },
  { name: 'Copy Trading Allowed', fundedHero: true, competitor1: false, competitor2: false, competitor3: true },
  { name: 'Consistency Rules', fundedHero: false, competitor1: true, competitor2: true, competitor3: true },
  { name: 'Unlimited Retakes', fundedHero: true, competitor1: false, competitor2: false, competitor3: true },
];

const companies = [
  { name: 'FundedHero', color: 'gold', highlight: true },
  { name: 'Competitor A', color: 'gray', highlight: false },
  { name: 'Competitor B', color: 'gray', highlight: false },
  { name: 'Competitor C', color: 'gray', highlight: false },
];

export default function ComparisonSection() {
  return (
    <section className="py-32 relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold/20 to-gold-light/20 border border-gold/40 rounded-full mb-6"
          >
            <Crown className="w-5 h-5 text-gold" />
            <span className="text-gold font-bold text-sm">INDUSTRY LEADING</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Why Choose FundedHero?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Compare our features with other prop firms and see why traders choose FundedHero
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="glass-ultra rounded-3xl overflow-hidden backdrop-blur-2xl border border-white/10">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-6 px-6 text-left">
                      <span className="text-gray-400 font-semibold text-sm">FEATURES</span>
                    </th>
                    {companies.map((company, index) => (
                      <th key={company.name} className="py-6 px-6 text-center min-w-[140px]">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          {company.highlight ? (
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gold via-gold-light to-gold rounded-xl shadow-lg">
                              <Crown className="w-4 h-4 text-black" />
                              <span className="font-bold text-black text-sm">{company.name}</span>
                            </div>
                          ) : (
                            <span className="font-semibold text-gray-500 text-sm">
                              {company.name}
                            </span>
                          )}
                        </motion.div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <motion.tr
                      key={feature.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      whileHover={{ backgroundColor: 'rgba(255, 200, 0, 0.05)', scale: 1.01 }}
                      className="border-b border-white/5 transition-all duration-300 hover:border-gold/20"
                    >
                      <td className="py-5 px-6">
                        <span className="text-white font-medium">{feature.name}</span>
                      </td>
                      <td className="py-5 px-6 text-center">
                        {feature.fundedHero ? (
                          <motion.div
                            whileHover={{ scale: 1.3, rotate: 360 }}
                            transition={{ duration: 0.5, type: "spring" }}
                            className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br from-success to-success/80 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(78,203,113,0.6)]"
                          >
                            <Check className="w-5 h-5 text-white" />
                          </motion.div>
                        ) : (
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: -90 }}
                            transition={{ duration: 0.4 }}
                            className="inline-flex items-center justify-center w-8 h-8 bg-danger/20 rounded-full"
                          >
                            <X className="w-5 h-5 text-danger" />
                          </motion.div>
                        )}
                      </td>
                      <td className="py-5 px-6 text-center">
                        {feature.competitor1 ? (
                          <motion.div
                            whileHover={{ scale: 1.15 }}
                            className="inline-flex items-center justify-center w-8 h-8 bg-gray-700 rounded-full"
                          >
                            <Check className="w-5 h-5 text-gray-400" />
                          </motion.div>
                        ) : (
                          <motion.div
                            whileHover={{ scale: 1.15, rotate: -45 }}
                            className="inline-flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full"
                          >
                            <X className="w-5 h-5 text-gray-600" />
                          </motion.div>
                        )}
                      </td>
                      <td className="py-5 px-6 text-center">
                        {feature.competitor2 ? (
                          <motion.div
                            whileHover={{ scale: 1.15 }}
                            className="inline-flex items-center justify-center w-8 h-8 bg-gray-700 rounded-full"
                          >
                            <Check className="w-5 h-5 text-gray-400" />
                          </motion.div>
                        ) : (
                          <motion.div
                            whileHover={{ scale: 1.15, rotate: -45 }}
                            className="inline-flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full"
                          >
                            <X className="w-5 h-5 text-gray-600" />
                          </motion.div>
                        )}
                      </td>
                      <td className="py-5 px-6 text-center">
                        {feature.competitor3 ? (
                          <motion.div
                            whileHover={{ scale: 1.15 }}
                            className="inline-flex items-center justify-center w-8 h-8 bg-gray-700 rounded-full"
                          >
                            <Check className="w-5 h-5 text-gray-400" />
                          </motion.div>
                        ) : (
                          <motion.div
                            whileHover={{ scale: 1.15, rotate: -45 }}
                            className="inline-flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full"
                          >
                            <X className="w-5 h-5 text-gray-600" />
                          </motion.div>
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="fhx-button px-12 py-5 rounded-2xl text-lg font-bold"
            >
              <span className="static-text-glow">Start Your Challenge Now</span>
            </motion.button>
            <p className="text-gray-400 mt-4 text-sm">
              Join 10,000+ traders who chose the better way to get funded
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
