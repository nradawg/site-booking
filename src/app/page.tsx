import Link from "next/link";

const services = [
  { name: "Signature Facial", time: "60 min", price: "$120", desc: "Deep cleansing, exfoliation, and hydration tailored to your skin." },
  { name: "LED Light Therapy", time: "30 min", price: "$75", desc: "Reduce inflammation and boost collagen with clinical-grade LED." },
  { name: "Chemical Peel", time: "45 min", price: "$150", desc: "Reveal fresh, radiant skin with our customized peel treatments." },
];

const testimonials = [
  { name: "Emily R.", text: "Best facial I've ever had. My skin was glowing for days. Already booked my next appointment!" },
  { name: "Jessica M.", text: "The studio is beautiful and the team really knows their stuff. I've never felt so pampered." },
  { name: "Priya K.", text: "I've been coming here for 6 months and my skin has never looked better. Worth every penny." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1600&q=80"
            alt="Relaxing spa environment with soft lighting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c1917]/80 to-[#1c1917]/40" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-xl">
            <p className="text-[#a855f7] font-medium text-sm tracking-widest uppercase mb-4">
              San Francisco
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Your glow-up starts here.
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10">
              Premium facials, skincare treatments, and wellness services in the heart of the Mission District.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/book"
                className="bg-[#a855f7] hover:bg-[#9333ea] text-white px-8 py-4 rounded-full text-lg font-medium transition-colors"
              >
                Book Now
              </Link>
              <Link
                href="/services"
                className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full text-lg font-medium transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#a855f7] font-medium text-sm tracking-widest uppercase mb-3">Treatments</p>
            <h2 className="text-3xl md:text-4xl font-bold">Popular Services</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.name} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-purple-50">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-[#a855f7] bg-purple-50 px-3 py-1 rounded-full">{s.time}</span>
                  <span className="text-2xl font-bold">{s.price}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{s.name}</h3>
                <p className="text-gray-500 leading-relaxed mb-6">{s.desc}</p>
                <Link href="/book" className="text-[#a855f7] font-medium text-sm hover:underline">
                  Book this treatment &rarr;
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="text-[#a855f7] font-medium hover:underline">
              View all services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#a855f7] font-medium text-sm tracking-widest uppercase mb-3">Reviews</p>
            <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[#faf5ff] rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#a855f7]">&#9733;</span>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <p className="font-bold text-sm">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#1c1917] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for your glow-up?</h2>
          <p className="text-gray-400 text-lg mb-10">
            Book your appointment online in seconds. New clients get 15% off their first treatment.
          </p>
          <Link
            href="/book"
            className="inline-block bg-[#a855f7] hover:bg-[#9333ea] text-white px-8 py-4 rounded-full text-lg font-medium transition-colors"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
