import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  accountSize: string;
}

interface CartState {
  items: CartItem[];
  addedAt: number | null;
  emailSent: boolean;
  discountCode: string;
}

interface CartAbandonmentContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  getDiscountCode: () => string;
  hasActiveDiscount: boolean;
}

const CartAbandonmentContext = createContext<CartAbandonmentContextType | undefined>(undefined);

const STORAGE_KEY = 'fundedhero_cart';
const ABANDONMENT_THRESHOLD = 60 * 60 * 1000;
const DISCOUNT_CODE = 'COMEBACK10';
const DISCOUNT_PERCENTAGE = 10;

export function CartAbandonmentProvider({ children }: { children: ReactNode }) {
  const [cartState, setCartState] = useState<CartState>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return { items: [], addedAt: null, emailSent: false, discountCode: '' };
      }
    }
    return { items: [], addedAt: null, emailSent: false, discountCode: '' };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cartState));
  }, [cartState]);

  useEffect(() => {
    if (cartState.items.length === 0 || cartState.emailSent || !cartState.addedAt) {
      return;
    }

    const checkAbandonment = () => {
      const now = Date.now();
      const timeSinceAdded = now - (cartState.addedAt || 0);

      if (timeSinceAdded >= ABANDONMENT_THRESHOLD && !cartState.emailSent) {
        sendAbandonmentEmail();
        setCartState(prev => ({
          ...prev,
          emailSent: true,
          discountCode: DISCOUNT_CODE,
        }));
      }
    };

    const intervalId = setInterval(checkAbandonment, 60000);
    checkAbandonment();

    return () => clearInterval(intervalId);
  }, [cartState.items.length, cartState.addedAt, cartState.emailSent]);

  const sendAbandonmentEmail = () => {
    const emailData = {
      items: cartState.items,
      discountCode: DISCOUNT_CODE,
      discountPercentage: DISCOUNT_PERCENTAGE,
      timestamp: new Date().toISOString(),
    };

    console.log('📧 Cart Abandonment Email Triggered:', emailData);
    console.log(`
      ═══════════════════════════════════════════════════
      🎁 SPECIAL OFFER - Come Back & Save ${DISCOUNT_PERCENTAGE}%!
      ═══════════════════════════════════════════════════

      Hi there! 👋

      We noticed you left these items in your cart:
      ${cartState.items.map(item => `
        • ${item.name} - ${item.accountSize}
          Price: $${item.price}
      `).join('')}

      Don't miss out! Complete your purchase now and use code:

      🎯 ${DISCOUNT_CODE} 🎯

      for ${DISCOUNT_PERCENTAGE}% OFF your entire order!

      This offer expires in 24 hours.

      Start Trading Today! 🚀
      https://fundedhero.com/checkout?code=${DISCOUNT_CODE}

      ═══════════════════════════════════════════════════
    `);

    if (typeof window !== 'undefined' && 'Notification' in window) {
      if (Notification.permission === 'granted') {
        new Notification('FundedHero - Complete Your Purchase!', {
          body: `Use code ${DISCOUNT_CODE} for ${DISCOUNT_PERCENTAGE}% off! 🎁`,
          icon: '/favicon.ico',
        });
      }
    }
  };

  const addToCart = (item: CartItem) => {
    setCartState(prev => {
      const existingItem = prev.items.find(i => i.id === item.id);
      if (existingItem) {
        return prev;
      }

      return {
        ...prev,
        items: [...prev.items, item],
        addedAt: prev.addedAt || Date.now(),
        emailSent: false,
      };
    });
  };

  const removeFromCart = (itemId: string) => {
    setCartState(prev => ({
      ...prev,
      items: prev.items.filter(item => item.id !== itemId),
      addedAt: prev.items.length === 1 ? null : prev.addedAt,
    }));
  };

  const clearCart = () => {
    setCartState({
      items: [],
      addedAt: null,
      emailSent: false,
      discountCode: '',
    });
  };

  const getDiscountCode = () => {
    return cartState.emailSent ? cartState.discountCode : '';
  };

  return (
    <CartAbandonmentContext.Provider
      value={{
        cartItems: cartState.items,
        addToCart,
        removeFromCart,
        clearCart,
        getDiscountCode,
        hasActiveDiscount: cartState.emailSent && cartState.discountCode !== '',
      }}
    >
      {children}
    </CartAbandonmentContext.Provider>
  );
}

export function useCartAbandonment() {
  const context = useContext(CartAbandonmentContext);
  if (context === undefined) {
    throw new Error('useCartAbandonment must be used within a CartAbandonmentProvider');
  }
  return context;
}
