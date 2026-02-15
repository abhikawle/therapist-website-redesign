import { Container } from '@/components/Container';

export function CTA() {
  return (
    <section id="contact" className="py-20 md:py-32 lg:py-40 bg-primary-600 text-white">
      <Container className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Schedule your first consultation today. Let&apos;s work together toward lasting change.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:contact@drmayareynolds.com" className="btn bg-white text-primary-600 hover:bg-gray-100 active:scale-95">
            Email Me
          </a>
          <a href="tel:+14155551234" className="btn bg-transparent border-2 border-white text-white hover:bg-primary-700 active:scale-95">
            Call (415) 555-1234
          </a>
        </div>
        <p className="mt-8 text-sm opacity-75">Based in San Francisco, CA | Telehealth available</p>
      </Container>
    </section>
  );
}
