import { motion } from 'framer-motion';
import { ArrowRight, CreditCard, Bitcoin } from 'lucide-react';
import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { URLS } from '../constants/urls';

export default function Footer() {
  const [email, setEmail] = useState('');

  const socialLinks = [
    { href: URLS.INSTAGRAM, label: 'Instagram', icon: '📷' },
    { href: URLS.FACEBOOK, label: 'Facebook', icon: '📘' },
    { href: URLS.TWITTER, label: 'X (Twitter)', icon: '𝕏' },
    { href: URLS.DISCORD, label: 'Discord', icon: '💬' },
    { href: URLS.TELEGRAM, label: 'Telegram', icon: '✈️' },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup would integrate with their existing system
    window.open(`https://fundedhero.com/?newsletter=${encodeURIComponent(email)}`, '_blank');
  };

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient-bg opacity-70"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkQ3MDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-ultra rounded-2xl p-6 mb-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-display font-bold text-gradient-premium mb-2">
                Subscribe to our newsletter
              </h3>
              <p className="text-sm text-gray-300">
                Get a summary of what we've shipped during the last month, behind the scenes updates, and team picks.
              </p>
            </div>
            <div>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                <motion.input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  whileFocus={{ scale: 1.02 }}
                  className="flex-1 px-4 py-3 glass-premium rounded-xl text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/30 transition-all duration-300"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, y: -2, boxShadow: "0 0 30px rgba(255, 200, 0, 0.6)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-gold via-gold-light to-gold text-black rounded-xl font-bold flex items-center gap-2 gold-glow whitespace-nowrap text-sm transition-all duration-300"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <img
                src="/funded-hero-3_(1) copy.png"
                alt="FundedHero Logo"
                className="h-14 w-auto object-contain mb-4 drop-shadow-[0_0_15px_rgba(255,200,0,0.4)]"
              />
            </motion.div>
            <p className="text-gray-300 leading-relaxed mb-6 text-sm">
              Trade with our capital, keep up to 90% of your profits, and scale your success risk-free.
            </p>

            <LanguageSwitcher />
          </div>

          <div>
            <h3 className="text-white font-display font-bold text-base mb-4">Legal</h3>
            <div className="space-y-2">
              <motion.a
                href={URLS.TERMS}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className="block text-gray-300 hover:text-gold transition-all duration-200 text-sm"
              >
                Terms and Conditions
              </motion.a>
              <motion.a
                href={URLS.PRIVACY}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className="block text-gray-300 hover:text-gold transition-all duration-200 text-sm"
              >
                Privacy Policy
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-display font-bold text-base mb-4">Follow us</h3>
            <div className="flex items-center gap-3 mb-6">
              {socialLinks.map(({ href, label, icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.15,
                    y: -4,
                    boxShadow: "0 0 20px rgba(255, 200, 0, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 glass-premium rounded-lg flex items-center justify-center hover:glass-ultra transition-all duration-300 group hover:border-gold/30"
                  aria-label={label}
                >
                  <span className="text-sm group-hover:scale-110 transition-transform">{icon}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-display font-bold text-base mb-4">Quick Links</h3>
            <div className="space-y-2">
              <motion.a
                href="#plans"
                whileHover={{ x: 4 }}
                className="block text-gray-300 hover:text-gold transition-all duration-200 text-sm"
              >
                Get Funded
              </motion.a>
              <motion.a
                href={URLS.HELP_CENTER}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className="block text-gray-300 hover:text-gold transition-all duration-200 text-sm"
              >
                Rules & FAQ
              </motion.a>
              <motion.a
                href={URLS.LOGIN}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className="block text-gray-300 hover:text-gold transition-all duration-200 text-sm"
              >
                Login
              </motion.a>
              <motion.a
                href={URLS.DISCORD}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className="block text-gray-300 hover:text-gold transition-all duration-200 text-sm"
              >
                Join Discord
              </motion.a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-4">
            <p className="text-gray-400 text-xs text-center lg:text-left">
              © 2026 FundedHero. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-xs">We Accept</span>
              <div className="flex items-center gap-3">
                <div className="w-8 h-6 glass-premium rounded flex items-center justify-center" title="Visa">
                  <CreditCard className="w-4 h-4 text-white" />
                </div>
                <div className="w-8 h-6 glass-premium rounded flex items-center justify-center" title="Mastercard">
                  <CreditCard className="w-4 h-4 text-white" />
                </div>
                <div className="w-8 h-6 glass-premium rounded flex items-center justify-center" title="Bitcoin">
                  <Bitcoin className="w-4 h-4 text-gold" />
                </div>
                <div className="w-8 h-6 glass-premium rounded flex items-center justify-center" title="Ethereum">
                  <span className="text-gold text-xs font-bold">Ξ</span>
                </div>
                <div className="w-8 h-6 glass-premium rounded flex items-center justify-center" title="USDT">
                  <span className="text-gold text-xs font-bold">₮</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-6 pt-6 border-t border-white/5">
            <p className="text-gray-500 text-xs leading-relaxed max-w-4xl mx-auto">
              <strong className="text-gray-400">DISCLAIMER:</strong> Funded Hero offers a simulated trading environment intended solely for educational and evaluation purposes. All trading within this environment is simulated and does not involve real financial transactions. Performance and pricing may not reflect actual market conditions and can be affected by factors such as high volatility, seasonal changes, and geopolitical events. Simulated trading is a valuable tool for learning and strategy development, but it does not eliminate trading risks or ensure success in live markets. Past performance in the simulation does not guarantee future results. Funded Hero does not provide financial, investment, or trading advice. All trading decisions and outcomes are the sole responsibility of the user.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
