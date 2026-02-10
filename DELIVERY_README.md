# FundedHero Website Redesign - Delivery Package

## 📁 Project Files

### Source Code Location
```
project/
├── src/                    # React/TypeScript source code
│   ├── components/         # All UI components
│   │   └── VoiceAgent.tsx  # NEW: Fundee AI Voice Assistant
│   ├── pages/             # Page components (Home, Affiliates)
│   ├── constants/         # URL configuration (urls.ts)
│   ├── i18n/              # 10 language translations
│   └── contexts/          # React contexts
├── dist/                   # Production build (ready to deploy)
├── public/                 # Static assets (images, certificates)
└── screenshots/            # Website screenshots
```

---

## 🖼️ Screenshots

| File | Description |
|------|-------------|
| `final-homepage.png` | Full page screenshot of entire homepage |
| `screenshot-01-hero.png` | Hero section with account preview |
| `screenshot-02-gallery.png` | Live Gallery with real images |
| `screenshot-03-voiceagent.png` | Propi Voice Agent section |
| `screenshot-04-propi-active.png` | **Propi AI widget active/listening**

---

## 🔗 Integration Links (Already Connected)

All buttons and links are pre-configured to connect to FundedHero's existing systems:

### Checkout (WooCommerce)
- **Buy Challenge buttons** → `fundedhero.com/?add-to-cart={product_id}`
- Product IDs are mapped in `src/constants/urls.ts`

### Authentication
- **Login** → `fundedhero.com/my-account/`
- **Affiliate Dashboard** → `fundedhero.com/my-account/`

### External Links
- **Discord** → `discord.gg/nxAVgCbJP6`
- **X (Twitter)** → `x.com/_fundedhero`
- **Instagram** → `instagram.com/fundedhero/`
- **Telegram** → `t.me/Fundedherofirm`
- **Trustpilot** → `trustpilot.com/review/fundedhero.com`

### Support
- **Rules & FAQ** → `intercom.help/fundedhero/en/`

### Legal
- **Terms** → `fundedhero.com/terms-and-conditions/`
- **Privacy** → `fundedhero.com/privacy-policy/`

---

## 🚀 Deployment Options

### Option 1: Static Hosting (Recommended)
The `dist/` folder contains the production build. Upload to:
- **Netlify** (drag & drop)
- **Vercel**
- **AWS S3 + CloudFront**
- Any static hosting provider

### Option 2: WordPress Integration
1. Host the React app on a subdomain (e.g., `new.fundedhero.com`)
2. Or embed via iframe in WordPress

### Option 3: Custom Server
```bash
npm install -g serve
serve -s dist -l 3000
```

---

## 🎤 ElevenLabs Propi Voice Agent

The Propi AI voice assistant is fully integrated using your agent ID:

**Agent ID:** `agent_8901k9fvz0g0fy68sgbavzhbsa0w`

**Files Modified:**
- `src/components/VoiceAgent.tsx` - Custom Propi voice agent UI section
- `src/constants/urls.ts` - Agent ID stored as constant

**How it works:**
1. User scrolls to the "Ask Propi!" section
2. Clicks the golden mic button
3. ElevenLabs widget loads and prompts for terms acceptance
4. Voice conversation begins - users can ask questions in 32 languages

**Features:**
- Beautiful gold-themed mic button matching FundedHero branding
- "AI Voice Assistant" badge
- Pulsing animations for visual feedback
- "Voice assistant is active!" indicator when engaged
- No persistent floating widget - clean UI until activated

---

## 📝 How to Update Links

All URLs are centralized in one file for easy updates:

**File:** `src/constants/urls.ts`

```typescript
export const URLS = {
  LOGIN: 'https://fundedhero.com/my-account/',
  DISCORD: 'https://discord.gg/nxAVgCbJP6',
  // ... all other URLs
};
```

After changes, rebuild:
```bash
npm run build
```

---

## 🎨 Features

- ✅ **Responsive Design** - Mobile, tablet, desktop
- ✅ **10 Languages** - EN, ES, DE, FR, IT, PT, NL, RU, AR, ZH
- ✅ **Animations** - Framer Motion (smooth transitions)
- ✅ **Live Elements** - Countdown timer, profit counter, notifications
- ✅ **SEO Ready** - Semantic HTML, proper meta tags
- ✅ **Performance** - Optimized bundle, lazy loading
- ✅ **Propi Voice Agent** - ElevenLabs AI voice assistant with gold theme
- ✅ **Fixed Images** - Certificate images now load correctly
- ✅ **Fallback Gallery** - Shows content even without Supabase

---

## 📞 Support

For any questions about the code or deployment, please contact your developer.

---

**Built with:** React 18, TypeScript, Tailwind CSS, Framer Motion, Vite

