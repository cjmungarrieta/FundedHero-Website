import { motion } from 'framer-motion';
import { Crown, Sparkles, Zap, ArrowRight, Clock, TrendingUp, Target, Flame } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import CountdownTimer from './CountdownTimer';
import { getCheckoutUrl, URLS, PRODUCT_IDS, PRICING_API_URL, PRICING_API_TOKEN } from '../constants/urls';

const promoEndDate = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);

type PricingEntry = { price: number; promoPrice: number };
type PricingMap = Record<string, Record<number, PricingEntry>>;

const challengeTypes = [
  { id: '1step', name: '1 Step Hero', badge: null, description: 'Best for intraday traders who want funding fast', icon: Zap },
  { id: '2step', name: '2 Step Hero', badge: 'MOST POPULAR', description: 'Best for balanced risk and lower cost', icon: Crown },
  { id: '3step', name: '3 Step Hero', badge: 'LOWEST PRICE', description: 'Best for swing traders on a budget', icon: Target },
  { id: 'fastpass', name: 'Fast Pass', badge: null, description: 'Best for experienced traders who want easier targets', icon: Flame },
  { id: 'instant', name: 'Instant Funded', badge: 'NO EVALUATION', description: 'Best for traders who want to skip evaluation entirely', icon: TrendingUp },
];

const accountSizes = [
  { value: 2500, label: '$2.5K' },
  { value: 5000, label: '$5K' },
  { value: 10000, label: '$10K' },
  { value: 25000, label: '$25K' },
  { value: 50000, label: '$50K' },
  { value: 75000, label: '$75K' },
  { value: 100000, label: '$100K' },
  { value: 150000, label: '$150K' },
  { value: 200000, label: '$200K' },
];

const rulesData: Record<string, { phases: string[]; rules: { label: string; values: string[] }[] }> = {
  '1step': {
    phases: ['Phase 1', 'Funded'],
    rules: [
      { label: 'Profit Target', values: ['10%', '-'] },
      { label: 'Daily Loss', values: ['4%', '4%'] },
      { label: 'Maximum Loss', values: ['10%', '10%'] },
      { label: 'Drawdown Type', values: ['Static', 'Static'] },
    ],
  },
  '2step': {
    phases: ['Phase 1', 'Phase 2', 'Funded'],
    rules: [
      { label: 'Profit Target', values: ['8%', '5%', '-'] },
      { label: 'Daily Loss', values: ['6%', '6%', '5%'] },
      { label: 'Maximum Loss', values: ['12%', '12%', '10%'] },
      { label: 'Drawdown Type', values: ['Static', 'Static', 'Static'] },
    ],
  },
  '3step': {
    phases: ['Phase 1', 'Phase 2', 'Phase 3'],
    rules: [
      { label: 'Profit Target', values: ['8%', '5%', '5%'] },
      { label: 'Daily Loss', values: ['6%', '6%', '6%'] },
      { label: 'Maximum Loss', values: ['12%', '12%', '10%'] },
      { label: 'Drawdown Type', values: ['Static', 'Static', 'Static'] },
    ],
  },
  'fastpass': {
    phases: ['Phase 1', 'Funded'],
    rules: [
      { label: 'Profit Target', values: ['6%', '-'] },
      { label: 'Daily Loss', values: ['5%', '3%'] },
      { label: 'Maximum Loss', values: ['10%', '9%'] },
      { label: 'Drawdown Type', values: ['Static', 'Static'] },
    ],
  },
  'instant': {
    phases: ['Funded'],
    rules: [
      { label: 'Profit Target', values: ['-'] },
      { label: 'Daily Loss', values: ['3%'] },
      { label: 'Maximum Loss', values: ['7%'] },
      { label: 'Drawdown Type', values: ['Static'] },
    ],
  },
};

export default function PricingCards() {
  const [activeChallenge, setActiveChallenge] = useState('2step');
  const [selectedSize, setSelectedSize] = useState(50000);
  const cardRef = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState({});
  const [wooPricing, setWooPricing] = useState<PricingMap | null>(null);
  const [isPricingLoading, setIsPricingLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const loadPricing = async () => {
      try {
        setIsPricingLoading(true);

        const ids: number[] = [];
        Object.values(PRODUCT_IDS).forEach(map => {
          Object.values(map).forEach(id => {
            if (!ids.includes(id)) {
              ids.push(id);
            }
          });
        });

        if (ids.length === 0) {
          return;
        }

        const params = new URLSearchParams();
        params.set('ids', ids.join(','));
        params.set('token', PRICING_API_TOKEN);

        const response = await fetch(`${PRICING_API_URL}?${params.toString()}`);
        if (!response.ok) {
          throw new Error(`Failed to load pricing: ${response.status}`);
        }

        const data = await response.json();
        if (cancelled) {
          return;
        }

        const products = Array.isArray(data.products) ? data.products : [];
        const byId = new Map<number, any>();
        products.forEach((p: any) => {
          if (p && p.id && !p.error) {
            byId.set(Number(p.id), p);
          }
        });

        const map: PricingMap = {};

        Object.entries(PRODUCT_IDS).forEach(([challengeType, sizes]) => {
          map[challengeType] = {};
          Object.entries(sizes).forEach(([sizeStr, productId]) => {
            const product = byId.get(productId as number);
            if (product) {
              const priceNumber = Number(product.regular_price || product.price);
              const promoNumber = product.sale_price !== null && product.sale_price !== undefined && product.sale_price !== ''
                ? Number(product.sale_price)
                : Number(product.price);

              map[challengeType][Number(sizeStr)] = {
                price: priceNumber,
                promoPrice: promoNumber,
              };
            }
          });
        });

        setWooPricing(map);
      } catch (error) {
        console.error('Error loading WooCommerce pricing', error);
      } finally {
        if (!cancelled) {
          setIsPricingLoading(false);
        }
      }
    };

    loadPricing();

    return () => {
      cancelled = true;
    };
  }, []);

  const currentPricing =
    wooPricing?.[activeChallenge]?.[selectedSize] || null;
  const currentRules = rulesData[activeChallenge];
  const activeType = challengeTypes.find(t => t.id === activeChallenge);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    });
  };

  const handleBuyChallenge = () => {
    const checkoutUrl = getCheckoutUrl(activeChallenge, selectedSize);
    window.location.href = checkoutUrl;
  };

  return (
    <section id="plans" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient-bg noise-texture"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkQ3MDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 left-20 w-[500px] h-[500px] bg-gold/20 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-ultra rounded-2xl px-6 py-4 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 gold-glow mb-16 max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-3 h-3 bg-danger rounded-full"
            />
            <span className="text-white font-bold">Promo codes ends:</span>
          </div>
          <CountdownTimer targetDate={promoEndDate} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 glass rounded-full mb-8"
          >
            <Crown className="w-4 h-4 text-gold" />
            <span className="text-sm font-semibold text-gold">Funding Programs</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-gradient-premium">
            Get Funded Today
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose your account size and challenge type
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12"
        >
          {challengeTypes.map((type, i) => {
            const Icon = type.icon;
            return (
              <motion.button
                key={type.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                onClick={() => setActiveChallenge(type.id)}
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.97 }}
                className={`relative p-5 rounded-2xl font-semibold transition-all duration-500 text-left ${
                  activeChallenge === type.id
                    ? 'glass-ultra border-2 border-gold/50 gold-glow'
                    : 'glass-premium hover:glass-ultra hover:border-gold/30 hover:shadow-[0_0_30px_rgba(255,200,0,0.3)]'
                }`}
              >
                {type.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-gold to-gold-light text-black text-xs font-bold rounded-full whitespace-nowrap">
                    {type.badge}
                  </div>
                )}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                  activeChallenge === type.id
                    ? 'bg-gradient-to-br from-gold to-gold-light'
                    : 'bg-white/10'
                }`}>
                  <Icon className={`w-5 h-5 ${activeChallenge === type.id ? 'text-black' : 'text-gold'}`} />
                </div>
                <div className={`font-display font-bold mb-1 ${activeChallenge === type.id ? 'text-gold' : 'text-white'}`}>
                  {type.name}
                </div>
                <div className="text-xs text-gray-400">{type.description}</div>
              </motion.button>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-center text-lg font-display font-semibold text-gray-300 mb-6">Select Account Size</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {accountSizes.map((size, i) => (
              <motion.button
                key={size.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.03 }}
                onClick={() => setSelectedSize(size.value)}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-3 rounded-xl font-bold transition-all duration-300 ${
                  selectedSize === size.value
                    ? 'bg-gold text-black shadow-xl gold-glow'
                    : 'glass text-white hover:glass-premium hover:border-gold/30 hover:shadow-[0_0_25px_rgba(255,200,0,0.2)]'
                }`}
              >
                {size.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          key={`pricing-${activeChallenge}-${selectedSize}`}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto relative"
        >
          {activeType?.badge && (
            <>
              <div className="lens-flare" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 0 }}></div>
              <div className="flex justify-center mb-4 relative z-10">
                <div className="px-6 py-2 bg-gold text-black rounded-full font-bold flex items-center gap-2 gold-glow-strong">
                  <Sparkles className="w-4 h-4" />
                  {activeType.badge}
                </div>
              </div>
            </>
          )}

          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={tiltStyle}
            className="glass-ultra rounded-3xl p-8 md:p-10 premium-shadow-lg tilt-card relative z-10 transition-all duration-500 hover:border-gold/40 hover:shadow-[0_0_60px_rgba(255,200,0,0.4)]"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-8 border-b border-white/10">
              <div>
                <div className="text-gray-400 mb-2">{activeType?.name} - {accountSizes.find(s => s.value === selectedSize)?.label} Account</div>
                <div className="flex items-baseline gap-4">
                  <motion.span
                    key={currentPricing ? currentPricing.promoPrice : 'loading'}
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-6xl font-display font-bold text-gradient-gold"
                  >
                    {currentPricing
                      ? `$${currentPricing.promoPrice}`
                      : isPricingLoading
                        ? '...'
                        : '$0'}
                  </motion.span>
                  <div>
                    {currentPricing && (
                      <>
                        <div className="text-gray-500 line-through text-xl">
                          ${currentPricing.price}
                        </div>
                        <div className="text-success font-bold">
                          Save ${currentPricing.price - currentPricing.promoPrice}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <motion.button
                onClick={handleBuyChallenge}
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="fhx-button px-10 py-5 rounded-2xl text-lg group"
              >
                <span className="flex items-center gap-2 static-text-glow">
                  Buy Challenge
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-display font-bold text-white mb-4">Challenge Rules</h4>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Rule</th>
                      {currentRules?.phases.map((phase) => (
                        <th key={phase} className="text-center py-3 px-4 text-gold font-bold">{phase}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {currentRules?.rules.map((rule, i) => (
                      <tr key={i} className="border-b border-white/5">
                        <td className="py-3 px-4 text-gray-300">{rule.label}</td>
                        {rule.values.map((value, j) => (
                          <td key={j} className="text-center py-3 px-4">
                            <span className={`font-bold ${value === '-' ? 'text-gray-500' : value === 'Static' ? 'text-success' : 'text-white'}`}>
                              {value}
                            </span>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Clock className="w-4 h-4 text-gold" />
                <span>7-hour average payout</span>
              </div>
              <motion.a
                href={URLS.HELP_CENTER}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="text-sm text-gold hover:text-gold-light transition-colors"
              >
                View full rules & FAQ →
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
