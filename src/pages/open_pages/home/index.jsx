import AboutSection from "../sections/AboutSection";
import SponsorsSection from "../sections/SponsorsSection";
import WelcomeSection from "../sections/WelcomeSection";

export default function HomePage() {
  return (
    <>
      <section id="section-1">
        <WelcomeSection />
      </section>
      <section id="section-2">
        <AboutSection />
      </section>
      <section id="section-3">
        <SponsorsSection />
      </section>
    </>
  );
}
