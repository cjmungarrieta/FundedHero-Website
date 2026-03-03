import { motion, AnimatePresence } from 'framer-motion';
import { DollarSign, Clock, CheckCircle, CreditCard, Bitcoin, Building2, Calendar, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

const NAMES = ['Michael R.', 'Sarah C.', 'James T.', 'Emma W.', 'David K.', 'Lisa M.', 'Robert P.', 'Anna S.', 'Alex B.', 'Maria G.', 'Kevin S.', 'Elena P.'];

const initialPayouts = [
  { id: 1, trader: 'Michael R.', date: '2026-03-02', amount: '$8,420', status: 'completed' },
  { id: 2, trader: 'Sarah C.', date: '2026-03-02', amount: '$12,850', status: 'completed' },
  { id: 3, trader: 'James T.', date: '2026-03-02', amount: '$5,200', status: 'completed' },
  { id: 4, trader: 'Emma W.', date: '2026-03-01', amount: '$15,600', status: 'completed' },
  { id: 5, trader: 'David K.', date: '2026-03-01', amount: '$9,340', status: 'completed' },
  { id: 6, trader: 'Lisa M.', date: '2026-02-28', amount: '$7,890', status: 'completed' },
  { id: 7, trader: 'Robert P.', date: '2026-02-28', amount: '$11,250', status: 'completed' },
  { id: 8, trader: 'Anna S.', date: '2026-02-27', amount: '$6,500', status: 'completed' },
];

const withdrawalMethods = [
  {
    icon: Zap,
    name: 'Rise',
    description: 'Fast and secure payouts via Rise platform',
    time: 'Within 24 hours',
    fee: 'Free',
    popular: true,
  },
  {
    icon: Building2,
    name: 'Bank Transfer',
    description: 'Direct deposit to your bank account',
    time: '1-3 business days',
    fee: 'Free',
    popular: false,
  },
  {
    icon: Bitcoin,
    name: 'Cryptocurrency',
    description: 'Bitcoin, Ethereum, USDT supported',
    time: 'Within 24 hours',
    fee: 'Network fee only',
    popular: false,
  },
  {
    icon: CreditCard,
    name: 'Wire Transfer',
    description: 'International wire transfer',
    time: '2-5 business days',
    fee: '$25',
    popular: false,
  },
];

export default function PayoutsPage() {
  const [recentPayouts, setRecentPayouts] = useState(initialPayouts);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPayout = {
        id: Date.now(),
        trader: NAMES[Math.floor(Math.random() * NAMES.length)],
        date: '2026-03-02',
        amount: `$${(Math.floor(Math.random() * 12000) + 2000).toLocaleString()}`,
        status: 'completed',
      };
      setRecentPayouts(prev => [newPayout, ...prev.slice(0, 7)]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToPlans = () => {
    document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-32 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark to-dark"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Manage Your Payouts
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Fast, secure, and transparent payout processing. Get your earnings in as little as 7 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Withdrawal Methods</h2>
            <div className="space-y-4">
              {withdrawalMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.div
                    key={method.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ x: 8, scale: 1.02 }}
                    className="glass-premium rounded-2xl p-6 backdrop-blur-2xl border border-white/10 relative"
                  >
                    {method.popular && (
                      <div className="absolute -top-2 -right-2 bg-gold text-black text-xs font-bold px-3 py-1 rounded-full">
                        MOST POPULAR
                      </div>
                    )}
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-gold/20 to-gold-light/20 rounded-xl flex items-center justify-center border border-gold/30">
                        <Icon className="w-7 h-7 text-gold" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-1">{method.name}</h3>
                        <p className="text-sm text-gray-400 mb-3">{method.description}</p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{method.time}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="w-3 h-3" />
                            <span>{method.fee}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Recent Payouts</h2>
            <div className="glass-premium rounded-2xl backdrop-blur-2xl border border-white/10 overflow-hidden">
              <div className="max-h-[500px] overflow-y-auto">
                <table className="w-full text-left">
                  <thead className="bg-[#0B0A09] sticky top-0 z-10 border-b border-white/10">
                    <tr>
                      <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Trader</th>
                      <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-4 text-right text-xs font-semibold text-gray-400 uppercase tracking-wider">Amount</th>
                      <th className="px-6 py-4 text-center text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <AnimatePresence initial={false}>
                      {recentPayouts.map((payout) => (
                        <motion.tr
                          key={payout.id}
                          layout
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.3 }}
                          className="hover:bg-white/5 transition-colors duration-200"
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-gold/20 to-gold-light/20 rounded-full flex items-center justify-center text-xs font-bold text-gold">
                                {payout.trader.split(' ')[0][0]}{payout.trader.split(' ').length > 1 ? payout.trader.split(' ')[1][0] : ''}
                              </div>
                              <span className="text-white font-medium text-sm">{payout.trader}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-1 text-gray-400 text-sm">
                              <Calendar className="w-3 h-3" />
                              <span>{payout.date}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-right whitespace-nowrap">
                            <span className="text-gold font-bold text-sm tracking-tight">{payout.amount}</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center justify-center gap-1">
                              <CheckCircle className="w-4 h-4 text-success" />
                              <span className="text-success text-xs font-semibold">Paid</span>
                            </div>
                          </td>
                        </motion.tr>
                      ))}
                    </AnimatePresence>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center pt-8 pb-4"
        >
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Request Your Payout?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Withdrawals are processed within 24 hours.
          </p>
          <motion.a
            href="#plans"
            onClick={scrollToPlans}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="fhx-button px-10 py-5 rounded-xl text-lg font-bold inline-block"
          >
            <span className="static-text-glow">Request Payout Now</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
