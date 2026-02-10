// FundedHero URL Constants
// Centralized link management for easy updates

// ElevenLabs Fundee Voice Agent
export const ELEVENLABS_AGENT_ID = 'agent_8901k9fvz0g0fy68sgbavzhbsa0w';

export const URLS = {
  // Main Site
  HOME: 'https://fundedhero.com/',
  FUTURES_SITE: 'https://fundedherofutures.com/',
  
  // Authentication
  LOGIN: 'https://fundedhero.com/my-account/',
  AFFILIATE_DASHBOARD: 'https://fundedhero.com/my-account/',
  
  // Legal
  TERMS: 'https://fundedhero.com/terms-and-conditions/',
  PRIVACY: 'https://fundedhero.com/privacy-policy/',
  
  // Support
  HELP_CENTER: 'https://intercom.help/fundedhero/en/',
  
  // Social Media
  DISCORD: 'https://discord.gg/nxAVgCbJP6',
  TWITTER: 'https://x.com/_fundedhero',
  INSTAGRAM: 'https://www.instagram.com/fundedhero/',
  FACEBOOK: 'https://www.facebook.com/share/19e9J6pX2S/?mibextid=wwXIfr',
  TELEGRAM: 'https://t.me/Fundedherofirm',
  TRUSTPILOT: 'https://www.trustpilot.com/review/fundedhero.com',
  
  // Affiliate
  AFFILIATE_ENROLL: 'https://fundedhero.com/affiliates/',
};

// WooCommerce Product IDs for each challenge type and account size
// Format: challengeType -> accountSize -> productId
export const PRODUCT_IDS: Record<string, Record<number, number>> = {
  '1step': {
    2500: 2260,
    5000: 2261,
    10000: 2262,
    25000: 2263,
    50000: 2264,
    75000: 2265,
    100000: 2266,
    150000: 2267,
    200000: 2268,
  },
  '2step': {
    2500: 2270,
    5000: 2271,
    10000: 2272,
    25000: 2273,
    50000: 2274,
    75000: 2275,
    100000: 2276,
    150000: 2277,
    200000: 2278,
  },
  '3step': {
    2500: 2280,
    5000: 2281,
    10000: 2282,
    25000: 2283,
    50000: 2284,
    75000: 2285,
    100000: 2286,
    150000: 2287,
    200000: 2288,
  },
  'fastpass': {
    2500: 2290,
    5000: 2291,
    10000: 2292,
    25000: 2293,
    50000: 2294,
    75000: 2295,
    100000: 2296,
    150000: 2297,
    200000: 2298,
  },
  'instant': {
    2500: 2300,
    5000: 2301,
    10000: 2302,
    25000: 2303,
    50000: 2304,
    75000: 2305,
    100000: 2306,
    150000: 2307,
    200000: 2308,
  },
};

// Generate WooCommerce add-to-cart URL
export const getCheckoutUrl = (challengeType: string, accountSize: number): string => {
  const productId = PRODUCT_IDS[challengeType]?.[accountSize];
  if (productId) {
    return `https://fundedhero.com/?add-to-cart=${productId}`;
  }
  // Fallback to main pricing page if product ID not found
  return 'https://fundedhero.com/#pricing-plan';
};

// Current promo codes
export const PROMO_CODES = {
  CRYPTO: 'CRYPTO50',
  GENERAL: 'SNOW40',
};

