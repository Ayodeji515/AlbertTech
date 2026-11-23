import { HeroSection } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { AgencyIntro } from "@/components/sections/agency-intro";
import { ServicesPreview } from "@/components/sections/services-preview";
import { ValueProps } from "@/components/sections/value-props";
import { FeaturedWork } from "@/components/sections/featured-work";
import { DeliveryProcess } from "@/components/sections/delivery-process";
import { IndustriesSection } from "@/components/sections/industries";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FAQSection } from "@/components/sections/faq-section";
import { CTABanner } from "@/components/sections/cta-banner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <AgencyIntro />
      <ServicesPreview />
      <ValueProps />
      <FeaturedWork />
      <DeliveryProcess />
      <IndustriesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTABanner
        title="Transform Your Digital Presence Into a High-Converting Engine"
        subtitle="Schedule a technical discovery session with an international solutions architect today. We provide scope estimates and architecture plans within 24 business hours."
      />
    </>
  );
}

