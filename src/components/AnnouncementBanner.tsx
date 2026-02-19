import { motion } from 'framer-motion';
import { PROMO_CODES, URLS } from '../constants/urls';

export default function AnnouncementBanner() {
  const copyPromoCode = (code: string) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="w-full bg-gold py-2.5 overflow-hidden fixed top-0 left-0 right-0 z-[60]">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="whitespace-nowrap flex"
      >
        {[1, 2].map((_, idx) => (
          <span key={idx} className="inline-flex items-center gap-8 text-black font-bold text-sm tracking-tight">
            <span className="flex items-center gap-2">
              50% OFF CRYPTO PAYMENTS USE CODE:
              <button
                onClick={() => copyPromoCode(PROMO_CODES.CRYPTO)}
                className="bg-black/20 px-2 py-0.5 rounded hover:bg-black/30 transition-colors"
              >
                {PROMO_CODES.CRYPTO}
              </button>
            </span>
            <span className="text-black/60">•</span>
            <span className="flex items-center gap-2">
              40% OFF ALL PAYMENTS USE CODE:
              <button
                onClick={() => copyPromoCode(PROMO_CODES.GENERAL)}
                className="bg-black/20 px-2 py-0.5 rounded hover:bg-black/30 transition-colors"
              >
                {PROMO_CODES.GENERAL}
              </button>
            </span>
            <span className="text-black/60">•</span>
            <a
              href={URLS.DISCORD}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              JOIN OUR DISCORD
            </a>
            <span className="text-black/60">•</span>
            <a
              href={URLS.FUTURES_SITE}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              FUTURES PROGRAM - GET PAID IN 4 DAYS
            </a>
            <span className="text-black/60 mr-8">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
