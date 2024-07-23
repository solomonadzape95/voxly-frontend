import CTA from "../components/CTA";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

function LandingPage() {
  return (
    <div className="bg-black/80 text-stone-200 flex flex-col" 
    >
      
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}

export default LandingPage;
