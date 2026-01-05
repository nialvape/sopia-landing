import { Routes, Route } from 'react-router-dom'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import OmnichannelSection from './components/OmnichannelSection'
import HowItWorksSection from './components/HowItWorksSection'
import BenefitsSection from './components/BenefitsSection'
import TrustSection from './components/TrustSection'
import PricingSection from './components/PricingSection'
import FinalCTASection from './components/FinalCTASection'
import Footer from './components/Footer'
import TermsPage from './pages/TermsPage'

function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <OmnichannelSection />
      <HowItWorksSection />
      <BenefitsSection />
      <TrustSection />
      <PricingSection />
      <FinalCTASection />
      <Footer />
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terminos" element={<TermsPage />} />
      </Routes>
    </div>
  )
}

export default App


