const team = [
  {
    name: "Maya Torres",
    role: "Founder & Lead Esthetician",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    bio: "Licensed esthetician with 12+ years of experience. Trained in Paris and Tokyo.",
  },
  {
    name: "Ava Kim",
    role: "Senior Esthetician",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
    bio: "Specializes in anti-aging and chemical peel treatments. 8 years in skincare.",
  },
  {
    name: "Jordan Lee",
    role: "Wellness Specialist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "Certified in LED therapy and holistic body treatments. Focused on whole-body wellness.",
  },
];

export default function About() {
  return (
    <>
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#a855f7] font-medium text-sm tracking-widest uppercase mb-3">Our Story</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Beauty, simplified.</h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              Glow Studio started with a simple belief: great skincare shouldn't be complicated or exclusive.
              We opened our doors in 2021 to bring clinical-grade treatments to everyone in a warm, welcoming space.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed">
              Every treatment is customized. Every product is clean. And every client leaves feeling like the best version of themselves.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"
              alt="Glow Studio interior with plants and modern design"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">What We Stand For</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#a855f7] text-xl">&#10024;</span>
              </div>
              <h3 className="font-bold text-lg mb-3">Clean Products</h3>
              <p className="text-gray-500">Every product we use is cruelty-free, paraben-free, and dermatologist-tested.</p>
            </div>
            <div className="text-center p-8">
              <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#a855f7] text-xl">&#9829;</span>
              </div>
              <h3 className="font-bold text-lg mb-3">Personalized Care</h3>
              <p className="text-gray-500">No cookie-cutter treatments. Everything is tailored to your skin type and goals.</p>
            </div>
            <div className="text-center p-8">
              <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#a855f7] text-xl">&#9733;</span>
              </div>
              <h3 className="font-bold text-lg mb-3">Results-Driven</h3>
              <p className="text-gray-500">We combine proven techniques with cutting-edge technology for visible, lasting results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#a855f7] font-medium text-sm tracking-widest uppercase mb-3">The Team</p>
            <h2 className="text-3xl md:text-4xl font-bold">Meet Your Estheticians</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((person) => (
              <div key={person.name} className="bg-white rounded-2xl overflow-hidden border border-purple-50">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-72 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold">{person.name}</h3>
                  <p className="text-[#a855f7] text-sm font-medium mb-3">{person.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
