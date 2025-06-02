
import { Hero } from './components/Hero';
import { GaleriaSection } from './components/GaleriaSection';
import { DiferenciaisSection } from './components/DiferenciaisSection';
import { BeneficiosSection } from './components/BeneficiosSection';
import { DepoimentosSection } from './components/DepoimentosSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { WhatsAppFloat } from './components/WhatsAppFloat';

const DrywallLandingA = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <GaleriaSection />
      <DiferenciaisSection />
      <BeneficiosSection />
      <DepoimentosSection />
      <CtaSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default DrywallLandingA;
