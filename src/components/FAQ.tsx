import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { URLS } from '../constants/urls';

const faqs = [
  {
    question: "What funding methods do you accept?",
    answer: "We accept all major payment methods including credit cards (VISA, Mastercard), cryptocurrencies (Bitcoin and other altcoins), and various other payment processors. All payments are processed securely.",
  },
  {
    question: "Is weekend holding allowed?",
    answer: "Yes, weekend holding is allowed on all our challenge types and funded accounts. You can hold positions over the weekend without any restrictions.",
  },
  {
    question: "How often do I get paid?",
    answer: "You can request payouts anytime once you're funded. Our average payout processing time is approximately 7 hours once approved. Most traders receive their funds the same day.",
  },
  {
    question: "Can I trade during news events?",
    answer: "Yes, news trading is fully permitted on all our programs. You can trade during major economic events like NFP, FOMC, CPI, and other news releases without any restrictions.",
  },
  {
    question: "Do you refund the challenge fee?",
    answer: "Yes, once you become a funded trader and receive your first payout, we refund your initial challenge fee. This means your evaluation is essentially free when you succeed.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient-bg opacity-50"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkQ3MDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-[600px] h-[600px] bg-gold/20 rounded-full blur-[150px] pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 glass-premium rounded-full mb-4"
          >
            <HelpCircle className="w-4 h-4 text-gold" />
            <span className="text-sm font-semibold text-gold">Common Questions</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 text-gradient-premium">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            See all rules here
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-ultra rounded-2xl overflow-hidden hover:glass-premium transition-all duration-500"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-300"
              >
                <span className="text-lg font-semibold text-white pr-8">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-gold" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 pt-2">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="glass-ultra rounded-3xl p-8 max-w-2xl mx-auto">
            <MessageCircle className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="text-2xl font-display font-bold text-white mb-3">
              Still have questions?
            </h3>
            <p className="text-gray-300 mb-6">
              View our complete rules and FAQ section
            </p>
            <motion.a
              href={URLS.HELP_CENTER}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-gold via-gold-light to-gold text-black rounded-2xl font-bold gold-glow-strong shadow-2xl"
            >
              View More
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
