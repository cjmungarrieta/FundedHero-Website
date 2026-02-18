import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Clock, CheckCircle, CreditCard, Bitcoin, Building2, Calendar } from 'lucide-react';

const recentPayouts = [
  { id: 1, trader: 'Michael R.', date: '2024-12-23', amount: '$8,420', status: 'completed' },
  { id: 2, trader: 'Sarah C.', date: '2024-12-22', amount: '$12,850', status: 'completed' },
  { id: 3, trader: 'James T.', date: '2024-12-22', amount: '$5,200', status: 'completed' },
  { id: 4, trader: 'Emma W.', date: '2024-12-21', amount: '$15,600', status: 'completed' },
  { id: 5, trader: 'David K.', date: '2024-12-21', amount: '$9,340', status: 'completed' },
  { id: 6, trader: 'Lisa M.', date: '2024-12-20', amount: '$7,890', status: 'completed' },
  { id: 7, trader: 'Robert P.', date: '2024-12-20', amount: '$11,250', status: 'completed' },
  { id: 8, trader: 'Anna S.', date: '2024-12-19', amount: '$6,500', status: 'completed' },
];

const statistics = [
  {
    icon: DollarSign,
    label: 'Total Paid Out',
    value: '$2.4M',
    change: '+$147K this week',
    color: 'from-gold to-gold-light',
  },
  {
    icon: Clock,
    label: 'Pending Payouts',
    value: '$89.2K',
    change: '12 requests',
    color: 'from-blue-500 to-blue-400',
  },
  {
    icon: TrendingUp,
    label: 'Monthly Average',
    value: '$856K',
    change: '+22% from last month',
    color: 'from-success to-success',
  },
  {
    icon: CheckCircle,
    label: 'Average Time',
    value: '6.8 hrs',
    change: 'Fastest in industry',
    color: 'from-purple-500 to-purple-400',
  },
];

const withdrawalMethods = [
  {
    icon: Building2,
    name: 'Bank Transfer',
    description: 'Direct deposit to your bank account',
    time: '1-3 business days',
    fee: 'Free',
    popular: true,
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
  return (
    <section className="py-32 relative overflow-hidden">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {statistics.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-premium rounded-2xl p-6 backdrop-blur-2xl border border-white/10"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-sm text-gray-500">{stat.change}</p>
              </motion.div>
            );
          })}
        </div>

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
                <table className="w-full">
                  <thead className="bg-white/5 sticky top-0 z-10">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400">TRADER</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400">DATE</th>
                      <th className="px-6 py-4 text-right text-xs font-semibold text-gray-400">AMOUNT</th>
                      <th className="px-6 py-4 text-center text-xs font-semibold text-gray-400">STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentPayouts.map((payout, index) => (
                      <motion.tr
                        key={payout.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="border-b border-white/5 hover:bg-white/5 transition-colors duration-200"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-gold/20 to-gold-light/20 rounded-full flex items-center justify-center text-xs font-bold text-gold">
                              {payout.trader.split(' ')[0][0]}{payout.trader.split(' ')[1][0]}
                            </div>
                            <span className="text-white font-medium text-sm">{payout.trader}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1 text-gray-400 text-sm">
                            <Calendar className="w-3 h-3" />
                            <span>{payout.date}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className="text-gold font-bold text-sm">{payout.amount}</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-center gap-1">
                            <CheckCircle className="w-4 h-4 text-success" />
                            <span className="text-success text-xs font-medium">Paid</span>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
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
          className="glass-ultra rounded-2xl p-8 backdrop-blur-2xl border border-gold/30 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Request Your Payout?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Withdrawals are processed within 24 hours. First payout is always free!
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="fhx-button px-10 py-4 rounded-xl text-lg font-bold"
          >
            <span className="static-text-glow">Request Payout Now</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
