import { motion } from 'framer-motion';
import { Star, DollarSign, Quote } from 'lucide-react';
import { CommunityGuardian } from './GoldenSentinel';
import { URLS } from '../constants/urls';

const payouts = [
  { name: 'J. R.', country: 'US', amount: 3240 },
  { name: 'M. S.', country: 'UK', amount: 5840 },
  { name: 'K. L.', country: 'CA', amount: 2150 },
  { name: 'A. T.', country: 'AU', amount: 8920 },
  { name: 'T. P.', country: 'DE', amount: 4650 },
  { name: 'L. M.', country: 'BR', amount: 7280 },
];

export default function Community() {
  return (
    <section className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient-bg opacity-50"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkQ3MDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 text-white">
            Connect and Thrive
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Become part of a network of traders who share knowledge, strategies, and success. With access to expert insights and exclusive resources, you'll have everything to take your trading to the next level. Join our community!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto mb-12">
          <motion.a
            href={URLS.TRUSTPILOT}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="glass-ultra rounded-3xl p-10 premium-shadow-lg block cursor-pointer"
          >
            <div className="flex items-start gap-4 mb-6">
              <Quote className="w-10 h-10 text-gold/50 flex-shrink-0" />
              <div>
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                  ))}
                  <span className="text-gold font-bold text-xl ml-2">4.8/5</span>
                </div>
                <p className="text-xl text-gray-200 leading-relaxed italic mb-6">
                  "Static drawdown was the reason I switched. No more worrying about trailing rules changing. Requested payout at 9 AM, had it by 2 PM."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center text-black font-bold">
                    SM
                  </div>
                  <div>
                    <div className="font-bold text-white">Sarah M.</div>
                    <div className="text-sm text-gray-400">$100K Trader · US</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="text-sm text-gray-400 mb-2">Rated on Trustpilot by 27,000+ traders</div>
              <div className="text-gold text-sm font-semibold">Click to read more reviews →</div>
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-display font-bold text-white mb-6">Recent Payouts</h3>
            {payouts.map((payout, index) => (
              <motion.div
                key={payout.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 4 }}
                className="glass-premium rounded-2xl p-5 flex items-center justify-between hover:glass-ultra transition-all duration-500"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center text-black font-bold text-sm">
                    {payout.name.split(' ')[0]}
                  </div>
                  <div>
                    <div className="font-bold text-white">{payout.name} · {payout.country}</div>
                    <div className="text-sm text-gray-400">Recent Payout</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-success" />
                  <span className="text-2xl font-display font-bold text-success">
                    ${payout.amount.toLocaleString()}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="glass-ultra rounded-3xl p-10 max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <CommunityGuardian />
            </div>
            <h3 className="text-3xl font-display font-bold text-white mb-4">
              Join Our Community
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Connect with traders worldwide on X (Twitter), Instagram, Discord, Telegram, and Facebook
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <motion.a
                href={URLS.DISCORD}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-gold via-gold-light to-gold text-black rounded-2xl font-bold text-lg gold-glow-strong shadow-2xl"
              >
                Join Discord
              </motion.a>
              <motion.a
                href={URLS.TWITTER}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass-premium text-white rounded-2xl font-bold text-lg hover:glass-ultra transition-all duration-500"
              >
                Follow on X
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
