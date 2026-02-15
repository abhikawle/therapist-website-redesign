import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Services } from '@/sections/Services';
import { OurOffice } from '@/sections/OurOffice';
import { Testimonials } from '@/sections/Testimonials';
import { CTA } from '@/sections/CTA';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <OurOffice />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
