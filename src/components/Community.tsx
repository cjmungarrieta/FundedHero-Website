import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { CommunityGuardian } from './GoldenSentinel';
import { URLS } from '../constants/urls';

const TESTIMONIALS_ROW1 = [
  { name: "Marco R.", country: "IT", text: "The static drawdown is a game changer. Best prop firm I've used.", amount: "$100K Account" },
  { name: "Sarah M.", country: "US", text: "Payout received in 4 hours. No issues at all.", amount: "$50K Account" },
  { name: "Yuki H.", country: "JP", text: "Support is exceptional and rules are crystal clear.", amount: "$200K Account" },
  { name: "Elena P.", country: "ES", text: "Fast execution and low spreads. Perfect for my strategy.", amount: "$25K Account" },
  { name: "Chris W.", country: "UK", text: "Finally a firm that respects the trader's time.", amount: "$150K Account" },
  { name: "Zoe L.", country: "SG", text: "Intuitive dashboard and very fast payouts.", amount: "$100K Account" },
];

const TESTIMONIALS_ROW2 = [
  { name: "Alex B.", country: "DE", text: "The best customer service in the industry. Highly recommend.", amount: "$50K Account" },
  { name: "Maria G.", country: "BR", text: "I love the 1-step challenge. It's so fast to get funded.", amount: "$100K Account" },
  { name: "Kevin S.", country: "CA", text: "Managed to get my first payout within 2 weeks!", amount: "$25K Account" },
  { name: "Anna K.", country: "PL", text: "Transparent rules and great community support.", amount: "$200K Account" },
  { name: "Sam T.", country: "AU", text: "Payout process is seamless and very fast.", amount: "$75K Account" },
  { name: "Lucas D.", country: "FR", text: "Competitive fees and great scaling plan.", amount: "$100K Account" },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof TESTIMONIALS_ROW1[0] }) => (
  <div className="glass-premium rounded-2xl p-6 min-w-[350px] mx-4 border border-white/10 hover:border-gold/30 hover:shadow-[0_0_20px_rgba(255,215,0,0.1)] transition-all duration-300">
    <div className="flex items-center gap-2 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-gold fill-gold" />
      ))}
    </div>
    <p className="text-gray-300 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-gold/20 to-gold-light/20 rounded-full flex items-center justify-center text-gold font-bold text-xs border border-gold/30">
          {testimonial.name[0]}
        </div>
        <div>
          <div className="font-bold text-white text-sm">{testimonial.name} · {testimonial.country}</div>
          <div className="text-xs text-gray-500">{testimonial.amount}</div>
        </div>
      </div>
      <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center">
        <Quote className="w-4 h-4 text-success/50" />
      </div>
    </div>
  </div>
);

export default function Community() {
  return (
    <section className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient-bg opacity-50"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkQ3MDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 text-white">
            Connect and Thrive
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Become part of a network of traders who share knowledge, strategies, and success.
          </p>
        </motion.div>
      </div>

      {/* Infinite Testimonial Rows */}
      <div className="relative mb-20">
        {/* Row 1 - Right to Left */}
        <div className="flex mb-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            className="flex"
          >
            {[...TESTIMONIALS_ROW1, ...TESTIMONIALS_ROW1].map((t, i) => (
              <TestimonialCard key={`r1-${i}`} testimonial={t} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Left to Right */}
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            animate={{ x: [-1920, 0] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 45,
                ease: "linear",
              },
            }}
            className="flex"
          >
            {[...TESTIMONIALS_ROW2, ...TESTIMONIALS_ROW2].map((t, i) => (
              <TestimonialCard key={`r2-${i}`} testimonial={t} />
            ))}
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center justify-center gap-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
              <div className="text-sm text-gray-400">Rated 4.8/5 by 27,000+ traders on Trustpilot</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
