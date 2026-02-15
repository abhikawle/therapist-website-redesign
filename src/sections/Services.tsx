import Image from "next/image";
import { Container } from "@/components/Container";

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    id: "anxiety",
    title: "Anxiety & Stress Therapy",
    description:
      "Learn practical strategies to manage anxiety, panic attacks, and daily stress using evidence-based therapeutic techniques.",
    image:
      "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "depression",
    title: "Depression Support",
    description:
      "Compassionate, goal-oriented therapy to help you work through depression and regain clarity, motivation, and emotional balance.",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "transitions",
    title: "Life Transitions Counseling",
    description:
      "Navigate career shifts, relationship changes, and personal growth with structured support tailored to your journey.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
  },
];


export function Services() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 lg:py-40 bg-secondary-50"
    >
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-4">
            Therapy Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Personalized therapy designed to support healing, growth, and lasting change.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden border border-gray-100"
            >
              {/* Image */}
              <div className="relative w-full h-56">
                <Image
                  src={service.image}
                  alt={`${service.title} therapy service`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-primary-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
