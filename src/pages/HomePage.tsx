import { lazy, Suspense } from 'react';
import Hero from '../components/Hero';
import Statistics from '../components/Statistics';

// Critical path components remain synchronous or are loaded earlier
const ComparisonSection = lazy(() => import('../components/ComparisonSection'));
const PricingCards = lazy(() => import('../components/PricingCards'));
const VoiceAgent = lazy(() => import('../components/VoiceAgent'));
const LiveGallery = lazy(() => import('../components/LiveGallery'));
const PayoutsPage = lazy(() => import('../components/PayoutsPage'));
const CertificateCarousel = lazy(() => import('../components/CertificateCarousel'));
const HowItWorks = lazy(() => import('../components/HowItWorks'));
const Features = lazy(() => import('../components/Features'));
const Community = lazy(() => import('../components/Community'));
const FAQ = lazy(() => import('../components/FAQ'));
const BottomCTA = lazy(() => import('../components/BottomCTA'));

// Loading component for Suspense
const SectionLoader = () => (
  <div className="py-20 flex justify-center items-center">
    <div className="w-10 h-10 border-4 border-gold/20 border-t-gold rounded-full animate-spin" />
  </div>
);

export default function HomePage() {
  return (
    <>
      <Hero />
      <Statistics />
      <Suspense fallback={<SectionLoader />}>
        <ComparisonSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <PricingCards />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <VoiceAgent />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <LiveGallery />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <PayoutsPage />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <CertificateCarousel />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <HowItWorks />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Features />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Community />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <FAQ />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <BottomCTA />
      </Suspense>
    </>
  );
}
