import { Container } from '@/components/common';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
  className="text-neutral-300 bg-cover bg-center"
  style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85')"
  }}
>

      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">MR</span>
              </div>
              <span className="font-heading font-bold text-white">Maya Reynolds</span>
            </div>
            <p className="text-neutral-400 text-sm">
              Professional therapy services for anxiety, depression, and life transitions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="link-hover text-neutral-400 hover:text-accent-400">
                  About Me
                </a>
              </li>
              <li>
                <a href="#services" className="link-hover text-neutral-400 hover:text-accent-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#office" className="link-hover text-neutral-400 hover:text-accent-400">
                  Office
                </a>
              </li>
              <li>
                <a href="#testimonials" className="link-hover text-neutral-400 hover:text-accent-400">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="link-hover text-neutral-400 hover:text-accent-400">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="link-hover text-neutral-400 hover:text-accent-400">
                  Anxiety Management
                </a>
              </li>
              <li>
                <a href="#services" className="link-hover text-neutral-400 hover:text-accent-400">
                  Depression Support
                </a>
              </li>
              <li>
                <a href="#services" className="link-hover text-neutral-400 hover:text-accent-400">
                  Life Transitions
                </a>
              </li>
              <li>
                <a href="#contact" className="link-hover text-neutral-400 hover:text-accent-400">
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <p className="text-neutral-400">
                  <strong>Phone:</strong> <br />
                  <a href="tel:+1234567890" className="text-accent-400 hover:text-accent-300">
                    (123) 456-7890
                  </a>
                </p>
              </li>
              <li>
                <p className="text-neutral-400">
                  <strong>Email:</strong> <br />
                  <a
                    href="mailto:contact@drmayareynolds.com"
                    className="text-accent-400 hover:text-accent-300"
                  >
                    contact@drmayareynolds.com
                  </a>
                </p>
              </li>
              <li>
                <p className="text-neutral-400">
                  <strong>Location:</strong> <br />
                  San Francisco, CA
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-sm text-center md:text-left">
              © {currentYear} Dr. Maya Reynolds, LCSW, PhD. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a
                href="/privacy"
                className="text-neutral-500 hover:text-accent-400 text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-neutral-500 hover:text-accent-400 text-sm transition-colors"
              >
                Terms of Service
              </a>
              <div className="flex gap-4">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-neutral-500 hover:text-accent-400 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-neutral-500 hover:text-accent-400 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 002.856-3.515 10.009 10.009 0 01-2.8.856 4.958 4.958 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="text-neutral-500 hover:text-accent-400 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.002 1.413-.103.25-.129.599-.129.948v5.444h-3.554s.05-8.736 0-9.646h3.554v1.348c.43-.666 1.198-1.616 2.905-1.616 2.122 0 3.71 1.39 3.71 4.37v5.544zM5.337 9.432c-1.144 0-1.915-.758-1.915-1.708 0-.951.77-1.708 1.954-1.708 1.185 0 1.915.757 1.915 1.708 0 .95-.73 1.708-1.954 1.708zm1.946 11.02H3.39V9.786h3.893v10.666zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
