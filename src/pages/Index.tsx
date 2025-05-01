
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import FeatureSection from "@/components/FeatureSection";
import ProductSection from "@/components/ProductSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header />
      <HeroBanner />
      <FeatureSection />
      <ProductSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
