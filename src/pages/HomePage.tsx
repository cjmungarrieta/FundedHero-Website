import Hero from '../components/Hero';
import Statistics from '../components/Statistics';
import ComparisonSection from '../components/ComparisonSection';
import LiveGallery from '../components/LiveGallery';
import PayoutsPage from '../components/PayoutsPage';
import CertificateCarousel from '../components/CertificateCarousel';
import HowItWorks from '../components/HowItWorks';
import PricingCards from '../components/PricingCards';
import Features from '../components/Features';
import Community from '../components/Community';
import FAQ from '../components/FAQ';
import VoiceAgent from '../components/VoiceAgent';
import BottomCTA from '../components/BottomCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Statistics />
      <ComparisonSection />
      <LiveGallery />
      <PayoutsPage />
      <CertificateCarousel />
      <HowItWorks />
      <PricingCards />
      <Features />
      <Community />
      <FAQ />
      <VoiceAgent />
      <BottomCTA />
    </>
  );
}
