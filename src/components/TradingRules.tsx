import { motion } from 'framer-motion';
import { Check, X, Info } from 'lucide-react';

const rules = [
  {
    category: 'Phase 1 Evaluation',
    items: [
      { text: '10% profit target', allowed: true },
      { text: 'Unlimited trading days', allowed: true },
      { text: 'No time limit', allowed: true },
      { text: '5% maximum daily loss', allowed: false },
      { text: '10% maximum total loss', allowed: false },
    ],
  },
  {
    category: 'Phase 2 Verification',
    items: [
      { text: '5% profit target', allowed: true },
      { text: 'Unlimited trading days', allowed: true },
      { text: 'No time limit', allowed: true },
      { text: '5% maximum daily loss', allowed: false },
      { text: '10% maximum total loss', allowed: false },
    ],
  },
  {
    category: 'Funded Account',
    items: [
      { text: 'Keep 80-90% of profits', allowed: true },
      { text: 'Bi-weekly payouts', allowed: true },
      { text: 'Scale up to $200K', allowed: true },
      { text: 'Same risk parameters', allowed: false },
      { text: 'Consistency requirement', allowed: true },
    ],
  },
];

export default function TradingRules() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trading Rules & Objectives
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Clear, straightforward rules designed for trader success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {rules.map((rule, index) => (
            <motion.div
              key={rule.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50"
            >
              <div className="flex items-center gap-2 mb-6">
                <Info className="w-6 h-6 text-emerald-400" />
                <h3 className="text-2xl font-bold text-white">{rule.category}</h3>
              </div>

              <ul className="space-y-4">
                {rule.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    {item.allowed ? (
                      <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    )}
                    <span className="text-slate-300">{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-xl max-w-4xl mx-auto"
        >
          <div className="flex items-start gap-4">
            <Info className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Important Note</h4>
              <p className="text-slate-300 leading-relaxed">
                All trades must be closed before 4:59 PM EST on Friday. No holding positions over the weekend.
                News trading is allowed with proper risk management. EA/Bot trading permitted on funded accounts.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
