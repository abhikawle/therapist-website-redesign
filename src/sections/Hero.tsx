import Image from "next/image";
import { Container } from "@/components/Container";

export function Hero() {
  return (
    <section className="relative bg-secondary-50 py-24 md:py-32 lg:py-40 overflow-hidden">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text Content */}
        <div className="flex flex-col justify-center order-2 md:order-1">
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight mb-6">
            Compassionate Anxiety & Trauma Therapy in Minneapolis
          </h1>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-xl">
            A calm, supportive space where healing begins.
            Personalized therapy designed to help you navigate anxiety,
            trauma, and life transitions with confidence and clarity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 transition"
            >
              Book a Consultation
            </a>

            <a
              href="#services"
              className="px-6 py-3 rounded-lg border border-primary-600 text-primary-700 font-medium hover:bg-primary-50 transition"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="order-1 md:order-2">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-xl aspect-[4/5] md:aspect-[16/9] lg:aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
              alt="Calm therapy office with soft natural light and neutral interior"
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 600px"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
