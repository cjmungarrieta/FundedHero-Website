import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { URLS } from '../constants/urls';

export default function Navigation() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('forex');
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(18, 18, 18, 0)', 'rgba(18, 18, 18, 0.95)']
  );

  const handleForexClick = () => {
    setActiveTab('forex');
    // Stay on current site (forex)
  };

  const handleFuturesClick = () => {
    setActiveTab('futures');
    window.location.href = URLS.FUTURES_SITE;
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{ backgroundColor }}
      className="fixed top-[42px] left-0 right-0 z-50 backdrop-blur-2xl border-b border-white/10 transition-all duration-500"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center gap-10">
            <Link to="/">
              <motion.div
                className="flex items-center gap-3 group cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="/funded-hero-3_(1) copy.png"
                  alt="FundedHero Logo"
                  className="h-16 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,200,0,0.4)]"
                />
              </motion.div>
            </Link>

            <div className="hidden lg:flex items-center gap-2 glass-premium rounded-2xl p-1.5">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleForexClick}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-500 ${
                  activeTab === 'forex'
                    ? 'bg-gradient-to-r from-gold to-gold-light text-black shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {t('nav.forex')}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleFuturesClick}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-500 ${
                  activeTab === 'futures'
                    ? 'bg-gradient-to-r from-gold to-gold-light text-black shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {t('nav.futures')}
              </motion.button>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <Link to="/affiliates">
              <motion.div
                whileHover={{ y: -2 }}
                className="relative text-gray-300 hover:text-white transition-colors font-medium text-base group cursor-pointer"
              >
                {t('nav.affiliate')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-gold-light group-hover:w-full transition-all duration-300"></span>
              </motion.div>
            </Link>
            
            <motion.a
              href="#plans"
              whileHover={{ y: -2 }}
              className="relative text-gray-300 hover:text-white transition-colors font-medium text-base group"
            >
              {t('nav.plans')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-gold-light group-hover:w-full transition-all duration-300"></span>
            </motion.a>
            
            <motion.a
              href={URLS.HELP_CENTER}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="relative text-gray-300 hover:text-white transition-colors font-medium text-base group"
            >
              {t('nav.rules')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-gold-light group-hover:w-full transition-all duration-300"></span>
            </motion.a>
            
            <motion.a
              href={URLS.DISCORD}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="relative text-gray-300 hover:text-white transition-colors font-medium text-base group"
            >
              {t('nav.discord')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-gold-light group-hover:w-full transition-all duration-300"></span>
            </motion.a>
            
            <motion.a
              href="#plans"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-3 bg-gradient-to-r from-gold via-gold-light to-gold text-black rounded-xl font-bold text-base gold-glow-strong shadow-2xl overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/50 to-white/0"
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <span className="relative z-10">{t('nav.startChallenge')}</span>
            </motion.a>
            
            <motion.a
              href={URLS.LOGIN}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 glass-premium text-white rounded-xl font-semibold text-base hover:glass-ultra transition-all duration-500"
            >
              {t('nav.login')}
            </motion.a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 text-white glass-premium rounded-xl hover:glass-ultra transition-all duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden pb-6 space-y-4"
          >
            <div className="flex gap-2 mb-4">
              <button
                onClick={handleForexClick}
                className={`flex-1 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'forex'
                    ? 'bg-gradient-to-r from-gold to-gold-light text-black'
                    : 'glass-premium text-gray-300'
                }`}
              >
                {t('nav.forex')}
              </button>
              <button
                onClick={handleFuturesClick}
                className={`flex-1 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'futures'
                    ? 'bg-gradient-to-r from-gold to-gold-light text-black'
                    : 'glass-premium text-gray-300'
                }`}
              >
                {t('nav.futures')}
              </button>
            </div>
            <Link
              to="/affiliates"
              className="block text-gray-300 hover:text-gold transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.affiliate')}
            </Link>
            <a
              href="#plans"
              className="block text-gray-300 hover:text-gold transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.plans')}
            </a>
            <a
              href={URLS.HELP_CENTER}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-300 hover:text-gold transition-colors font-medium py-2"
            >
              {t('nav.rules')}
            </a>
            <a
              href={URLS.DISCORD}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-300 hover:text-gold transition-colors font-medium py-2"
            >
              {t('nav.discord')}
            </a>
            <a
              href="#plans"
              className="block w-full px-6 py-3 bg-gradient-to-r from-gold to-gold-light text-black rounded-xl font-bold gold-glow text-center"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.startChallenge')}
            </a>
            <a
              href={URLS.LOGIN}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-6 py-3 glass-premium text-white rounded-xl font-semibold text-center"
            >
              {t('nav.login')}
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
