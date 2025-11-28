import { Hero } from "./_components/hero";
import { Features } from "./_components/features";
import { HowItWorks } from "./_components/how-it-works";
import { Testimonials } from "./_components/testimonials";
import AdBanner from "@/components/AdBanner";

import { FrequentlyAsked } from "./_components/frequently-asked";

export default function HomePage() {
  return (
    <div>
      {<AdBanner />/* Hero Section */}
      <Hero />

      {<AdBanner />/* Features Section */}
      <Features />

      {<AdBanner />/* How It Works Section */}
      <HowItWorks />

      {<AdBanner />/* Testimonials Section */}
      <Testimonials />

      {<AdBanner />/* FAQ Section */}
      <FrequentlyAsked />
    </div>
  );
}
