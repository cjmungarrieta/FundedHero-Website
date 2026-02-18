import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DollarSign, CheckCircle, Clock } from 'lucide-react';

interface Notification {
  id: string;
  type: 'purchase' | 'payout' | 'trade';
  message: string;
  amount?: string;
  time?: string;
}

const purchaseMessages = [
  { message: 'Just purchased $100K Challenge', amount: '$499' },
  { message: 'Just purchased $200K Challenge', amount: '$899' },
  { message: 'Just purchased $50K Challenge', amount: '$299' },
  { message: 'Just received payout', amount: '$8,420' },
  { message: 'Just received payout', amount: '$12,850' },
  { message: 'Just received payout', amount: '$5,200' },
  { message: 'Just passed Phase 1', amount: '$100K' },
  { message: 'Just passed Phase 2', amount: '$200K' },
];

export default function NotificationSystem() {
  const [purchases, setPurchases] = useState<Notification[]>([]);

  useEffect(() => {
    const purchaseInterval = setInterval(() => {
      const randomPurchase = purchaseMessages[Math.floor(Math.random() * purchaseMessages.length)];
      const newNotif: Notification = {
        id: `purchase-${Date.now()}`,
        type: Math.random() > 0.5 ? 'purchase' : 'payout',
        message: randomPurchase.message,
        amount: randomPurchase.amount,
        time: 'Just now',
      };

      setPurchases((prev) => [...prev.slice(-2), newNotif]);

      setTimeout(() => {
        setPurchases((prev) => prev.filter((n) => n.id !== newNotif.id));
      }, 4000);
    }, 5000);

    return () => {
      clearInterval(purchaseInterval);
    };
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-50 space-y-3 pointer-events-none">
      <AnimatePresence>
        {purchases.map((notif) => (
          <motion.div
            key={notif.id}
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            className="glass-ultra rounded-2xl p-4 backdrop-blur-2xl border-2 border-gold/40 shadow-2xl pointer-events-auto max-w-sm"
            style={{
              boxShadow: '0 0 40px rgba(255, 200, 0, 0.4), 0 8px 32px rgba(0, 0, 0, 0.8)',
            }}
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-gold via-gold-light to-gold rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                {notif.type === 'payout' ? (
                  <CheckCircle className="w-5 h-5 text-black" />
                ) : (
                  <DollarSign className="w-5 h-5 text-black" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-sm mb-1">{notif.message}</p>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-gold font-bold text-lg">{notif.amount}</span>
                  <span className="text-gray-400 text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {notif.time}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
