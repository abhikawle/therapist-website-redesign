import Image from "next/image";
import { Container } from "@/components/Container";

export function OurOffice() {
  return (
    <section id="office" className="py-24 md:py-32 lg:py-40 bg-secondary-50">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-4">
            Our Office
          </h2>
          <p className="text-lg text-primary-700 max-w-3xl mx-auto">
            A calm, comfortable space designed to support your healing journey.
            Our thoughtfully curated office environment prioritizes your privacy,
            comfort, and sense of safety.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          
          {/* Main Office Image */}
          <div className="relative w-full aspect-[4/5] md:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1493809842364-78817add7ffb"
              alt="Modern therapy office chair with natural light"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Features */}
          <div className="space-y-6">
            {[
              {
                title: "Private & Confidential",
                desc: "Soundproof counseling rooms ensure your sessions remain completely private and secure.",
              },
              {
                title: "Comfortable & Welcoming",
                desc: "Warm lighting, cozy seating, and natural décor create an inviting atmosphere for healing.",
              },
              {
                title: "Accessible Location",
                desc: "Conveniently located with easy parking and public transportation access.",
              },
              {
                title: "Hybrid Services Available",
                desc: "Secure virtual therapy sessions available for clients who prefer remote care.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent-500 text-white font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-primary-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Office Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          
          <div className="relative w-full h-56 rounded-xl overflow-hidden shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858"
              alt="Cozy therapy sofa in calming interior"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>

          <div className="relative w-full h-56 rounded-xl overflow-hidden shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2"
              alt="Therapy office with plant decor and natural light"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>

          <div className="relative w-full h-56 rounded-xl overflow-hidden shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
              alt="Minimal modern therapy consultation room"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}
