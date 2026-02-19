// FundedHero URL Constants
// Centralized link management for easy updates

// ElevenLabs Fundee Voice Agent
export const ELEVENLABS_AGENT_ID = 'agent_8901k9fvz0g0fy68sgbavzhbsa0w';

export const URLS = {
  // Main Site
  HOME: 'https://fundedhero.com/',
  FUTURES_SITE: 'https://fundedherofutures.com/',
  
  // Authentication
  LOGIN: 'https://app.fundedhero.com/',
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

export const PRICING_API_URL = 'https://fundedhero.com/wp-json/fundedhero/v1/pricing';
export const PRICING_API_TOKEN = 'TU_TOKEN_SECRETO_AQUI';

// WooCommerce Product IDs for each challenge type and account size
// Format: challengeType -> accountSize -> productId
export const PRODUCT_IDS: Record<string, Record<number, number>> = {
  '1step': {
    2500: 2266,
    5000: 139,
    10000: 87,
    25000: 88,
    50000: 89,
    75000: 9911,
    100000: 90,
    150000: 9912,
    200000: 91,
  },
  '2step': {
    2500: 2262,
    5000: 140,
    10000: 93,
    25000: 94,
    50000: 95,
    75000: 9913,
    100000: 96,
    150000: 9914,
    200000: 97,
  },
  '3step': {
    2500: 5916,
    5000: 5917,
    10000: 5918,
    25000: 5919,
    50000: 5920,
    75000: 9916,
    100000: 5921,
    150000: 9917,
    200000: 5922,
  },
  'fastpass': {
    2500: 2265,
    5000: 141,
    10000: 99,
    25000: 100,
    50000: 101,
    75000: 9919,
    100000: 102,
    150000: 9920,
    200000: 103,
  },
  'instant': {
    2500: 3374,
    5000: 3275,
    10000: 3276,
    25000: 3277,
    50000: 3278,
    75000: 9921,
    100000: 3279,
    150000: 9922,
    200000: 3280,
  },
};

// Generate WooCommerce add-to-cart URL
export const getCheckoutUrl = (challengeType: string, accountSize: number): string => {
  const productId = PRODUCT_IDS[challengeType]?.[accountSize];
  if (productId) {
    return `https://fundedhero.com/?custom_add_to_cart=${productId}`;
  }
  // Fallback to main pricing page if product ID not found
  return 'https://fundedhero.com/#pricing-plan';
};

// Current promo codes
export const PROMO_CODES = {
  CRYPTO: 'CRYPTO50',
  GENERAL: 'SNOW40',
};

