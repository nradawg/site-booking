import Link from "next/link";
import config from "@/config";

const featured = config.services.filter((s) => s.featured);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={config.hero_image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-xl">
            <p className="text-[var(--accent)] font-medium text-sm tracking-widest uppercase mb-4">
              {config.location_label}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              {config.tagline}
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10">{config.intro}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/book"
                className="bg-[var(--accent)] hover:brightness-90 text-white px-8 py-4 rounded-full text-lg font-medium transition"
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

      {/* Featured services */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Popular Services</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featured.map((s) => (
              <div key={s.name} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-[var(--accent)] bg-[var(--accent)]/10 px-3 py-1 rounded-full">{s.time}</span>
                  <span className="text-2xl font-bold">{s.price}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{s.name}</h3>
                <p className="text-gray-500 leading-relaxed mb-6">{s.description}</p>
                <Link href="/book" className="text-[var(--accent)] font-medium text-sm hover:underline">
                  Book this &rarr;
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="text-[var(--accent)] font-medium hover:underline">
              View all services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews: only shows when user_config.json has real ones */}
      {config.reviews.length > 0 && (
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">What Clients Say</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {(config.reviews as { name: string; text: string; source: string }[]).map((r) => (
                <div key={r.name + r.text} className="bg-[var(--secondary)] rounded-2xl p-8">
                  <p className="text-gray-600 leading-relaxed mb-6">&ldquo;{r.text}&rdquo;</p>
                  <p className="font-bold text-sm">{r.name}</p>
                  <p className="text-gray-400 text-xs">{r.source}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 px-6 bg-[var(--primary)] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready when you are.</h2>
          <p className="text-gray-400 text-lg mb-10">Pick a time that works for you.</p>
          <Link
            href="/book"
            className="inline-block bg-[var(--accent)] hover:brightness-90 text-white px-8 py-4 rounded-full text-lg font-medium transition"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
