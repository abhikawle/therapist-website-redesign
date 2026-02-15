import { Container } from '@/components/Container';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'Dr. Reynolds created a safe space for me to explore my anxiety. Her insight and compassion changed my life.',
    author: 'Sarah M.',
    role: 'Executive',
  },
  {
    id: '2',
    quote: 'After working with Dr. Reynolds, I finally understand my depression. I have tools and hope for the future.',
    author: 'James K.',
    role: 'Entrepreneur',
  },
  {
    id: '3',
    quote: 'The most helpful therapy I&apos;ve ever had. Dr. Reynolds listens deeply and provides real, actionable guidance.',
    author: 'Emily R.',
    role: 'Creative Professional',
  },
  {
    id: '4',
    quote: 'Navigating a career transition felt overwhelming until I started therapy. Now I feel confident and clear.',
    author: 'Michael T.',
    role: 'Tech Manager',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 lg:py-40 bg-secondary-50">
      <Container>
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            Client Feedback
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from people who&apos;ve experienced transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-lg border-2 border-primary-200"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent-400">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="border-t border-primary-200 pt-4">
                <p className="font-semibold text-primary-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
