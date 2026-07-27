import Navbar from "@/components/landing/Navbar";
import AnimatedBackground from "@/components/landing/AnimatedBackground";
import MouseSpotlight from "@/components/landing/MouseSpotlight";
import Hero from "@/components/landing/Hero";
import FeatureCards from "@/components/landing/FeatureCards";
import StatsSection from "@/components/landing/StatsSection";
import ChallengePreview from "@/components/landing/ChallengePreview";
import AISecuritySection from "@/components/landing/AISecuritySection";
import CommunitySection from "@/components/landing/CommunitySection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";


export default function Home() {

  return (

    <main
      className="
      relative
      isolate
      min-h-screen
      overflow-x-hidden
      bg-[#030712]
      "
    >


      {/* Background */}

      <AnimatedBackground />



      {/* Mouse Interaction */}

      <MouseSpotlight />



      {/* Main Content */}

      <div className="relative z-10">


        <Navbar />



        {/* Hero */}

        <Hero />



        {/* Features */}

        <FeatureCards />



        {/* Statistics */}

        <StatsSection />



        {/* CTF */}

        <ChallengePreview />



        {/* AI Security */}

        <AISecuritySection />



        {/* Community */}

        <CommunitySection />



        {/* CTA */}

        <CTASection />



        {/* Footer */}

        <Footer />


      </div>


    </main>

  );

}