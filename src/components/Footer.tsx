import { Container } from '@/components/Container';

export function Footer() {
  return (
    <footer className="bg-primary-900 text-gray-300 py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Dr. Maya Reynolds</h3>
            <p className="text-sm leading-relaxed">
              Professional therapy and counseling in San Francisco.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+14155551234" className="hover:text-white transition-colors">
                  (415) 555-1234
                </a>
              </li>
              <li>
                <a href="mailto:contact@drmayareynolds.com" className="hover:text-white transition-colors">
                  contact@drmayareynolds.com
                </a>
              </li>
              <li>San Francisco, CA</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-800 pt-8 text-center text-sm">
          <p>&copy; 2026 Dr. Maya Reynolds. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
