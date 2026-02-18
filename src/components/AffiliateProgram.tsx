import { motion } from 'framer-motion';
import { Check, TrendingUp, Users, Award } from 'lucide-react';
import { useState } from 'react';
import { URLS } from '../constants/urls';

export default function AffiliateProgram() {
  const [referrals, setReferrals] = useState(500);

  const calculateEarnings = (refs: number) => {
    return (refs * 42).toLocaleString();
  };

  const tiers = [
    {
      name: 'Tier 1',
      commission: '10%',
      subsequentSales: '5%',
      discount: '10%',
      features: [
        'Commission 10%',
        '5% Subsequent Sales',
        '10% Affiliate Discount Link',
        'Starting Tier'
      ],
      highlight: false
    },
    {
      name: 'Tier 2',
      commission: '12.5%',
      subsequentSales: '5%',
      discount: '10%',
      features: [
        'Commission 12.5%',
        '5% Subsequent Sales',
        '10% Affiliate Discount Link',
        'Challenge Giveaway Package'
      ],
      highlight: true
    },
    {
      name: 'Tier 3',
      commission: '15%',
      subsequentSales: '5%',
      discount: '15%',
      features: [
        'Commission 15%',
        '5% Subsequent Sales',
        '15% Affiliate Discount Link and Custom Code',
        'Personal & Giveaway Challenges Available Upon Request'
      ],
      highlight: false
    }
  ];

  return (
    <section id="affiliate" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 animated-gradient-bg opacity-30"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkQ3MDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl lg:text-6xl font-display font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gradient-premium">Welcome to FundedHero</span>
            <br />
            <span className="text-white">Trader's New Affiliate Program</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-gray-300 mb-8"
          >
            Start earning today
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <motion.a
              href={URLS.AFFILIATE_ENROLL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-gold via-gold-light to-gold text-black rounded-xl font-bold text-lg gold-glow-strong shadow-2xl"
            >
              Enroll Now!
            </motion.a>
            <motion.a
              href={URLS.AFFILIATE_DASHBOARD}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 glass-premium text-white rounded-xl font-semibold text-lg hover:glass-ultra transition-all duration-300"
            >
              Login
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h3 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Grow Your Community <span className="text-gradient-premium">Earn Big!</span>
          </h3>
          <p className="text-xl text-gray-300">
            Funded Hero Trader's Affiliate Program allows you to earn big!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative overflow-hidden rounded-3xl p-8 ${
                tier.highlight
                  ? 'bg-gradient-to-br from-gold/20 via-dark/80 to-dark/90 border-2 border-gold shadow-[0_0_50px_rgba(255,200,0,0.3)]'
                  : 'glass-ultra border border-white/10'
              }`}
            >
              {tier.highlight && (
                <motion.div
                  className="absolute top-0 right-0 bg-gradient-to-r from-gold to-gold-light text-black px-6 py-2 text-sm font-bold rounded-bl-2xl"
                  initial={{ x: 100 }}
                  whileInView={{ x: 0 }}
                  viewport={{ once: true }}
                >
                  POPULAR
                </motion.div>
              )}

              <div className="text-center mb-8">
                <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-gold/20 to-transparent mb-4">
                  {index === 0 && <Users className="w-12 h-12 text-gold" />}
                  {index === 1 && <Award className="w-12 h-12 text-gold" />}
                  {index === 2 && <TrendingUp className="w-12 h-12 text-gold" />}
                </div>
                <h4 className="text-3xl font-bold text-white mb-2">{tier.name}</h4>
                <div className="text-5xl font-bold text-gradient-premium mb-2">
                  {tier.commission}
                </div>
                <p className="text-gray-400">Commission Rate</p>
              </div>

              <div className="space-y-4">
                {tier.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-gold to-gold-light flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-gray-300 leading-relaxed">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-ultra rounded-3xl p-12 border border-white/10">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-display font-bold text-white mb-4">
                What's your <span className="text-gradient-premium">earning potential?</span>
              </h3>
              <p className="text-xl text-gray-300">
                Achieving your ideal profits from trading without putting your capital at risk is now a reality!
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-lg font-semibold text-white">Referrals</label>
                  <span className="text-3xl font-bold text-gradient-premium">{referrals}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={referrals}
                  onChange={(e) => setReferrals(parseInt(e.target.value))}
                  className="w-full h-3 rounded-full appearance-none cursor-pointer slider-gold"
                  style={{
                    background: `linear-gradient(to right, #E4B833 0%, #E4B833 ${(referrals / 1000) * 100}%, rgba(255,255,255,0.1) ${(referrals / 1000) * 100}%, rgba(255,255,255,0.1) 100%)`
                  }}
                />
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>0</span>
                  <span>1000</span>
                </div>
              </div>

              <motion.div
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-gold/10 via-transparent to-transparent border border-gold/20"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-lg text-gray-300 mb-2">Estimated Average Earnings</p>
                <p className="text-6xl font-bold text-gradient-premium">
                  ${calculateEarnings(referrals)}
                </p>
              </motion.div>

              <motion.a
                href={URLS.AFFILIATE_ENROLL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="block w-full px-10 py-5 bg-gradient-to-r from-gold via-gold-light to-gold text-black rounded-xl font-bold text-xl gold-glow-strong shadow-2xl text-center"
              >
                Enroll Now!
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
