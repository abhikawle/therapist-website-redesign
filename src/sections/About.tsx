import Image from "next/image";
import { Container } from "@/components/Container";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 lg:py-40 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left: Professional Image */}
          <div className="relative w-full aspect-[4/5] md:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
              alt="Professional female therapist in modern counseling office"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-6 leading-tight">
              About Dr. Maya Reynolds
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over 15 years of clinical experience, I am dedicated to
              helping individuals navigate anxiety, trauma, and major life
              transitions with compassion and evidence-based care.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              My therapeutic approach integrates cognitive behavioral therapy,
              mindfulness practices, and trauma-informed techniques to create
              personalized treatment plans tailored to each client’s needs.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-accent-500 font-bold mt-1">✓</span>
                <span className="text-gray-700">
                  Licensed Clinical Psychologist (PhD)
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-accent-500 font-bold mt-1">✓</span>
                <span className="text-gray-700">
                  Specializing in anxiety, depression & trauma recovery
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-accent-500 font-bold mt-1">✓</span>
                <span className="text-gray-700">
                  Culturally sensitive and client-centered practice
                </span>
              </li>
            </ul>
          </div>

        </div>
      </Container>
    </section>
  );
}
