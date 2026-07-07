import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import StatsSection from "../components/StatsSection";
import WhyChooseUs from "../components/WhyChooseUs";
import WhatsAppButton from "../components/WhatsAppButton";
import ContactPopup from "../components/ContactPopup";
import Location from "../components/Location";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Reveal from "../components/Reveal";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <div className="bg-gradient-to-b from-green-50 via-white to-green-100">

        <Reveal>
          <Products />
        </Reveal>

        <Reveal>
          <StatsSection />
        </Reveal>

        <Reveal>
          <WhyChooseUs />
        </Reveal>

        <WhatsAppButton />

        <ContactPopup />

        <Reveal>
          <Testimonials />
        </Reveal>

        <Reveal>
          <Location />
        </Reveal>

      </div>

      <Footer />
    </>
  );
}

export default Home;