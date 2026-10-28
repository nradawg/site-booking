import Link from "next/link";
import config from "@/config";

const categories = [...new Set(config.services.map((s) => s.category))];

export default function Services() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-500 text-lg max-w-xl">{config.services_intro}</p>
        </div>

        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="text-2xl font-bold mb-6 pb-3 border-b border-[var(--accent)]/20">{category}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {config.services
                  .filter((s) => s.category === category)
                  .map((item) => (
                    <div key={item.name} className="bg-white rounded-xl p-6 hover:shadow-sm transition-shadow">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-bold">{item.name}</h3>
                        <span className="text-xl font-bold text-[var(--accent)] ml-4 shrink-0">{item.price}</span>
                      </div>
                      <p className="text-xs text-gray-400 mb-2">{item.time}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-[var(--accent)]/10 rounded-2xl p-12">
          <h3 className="text-2xl font-bold mb-3">Not sure what you need?</h3>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">Ask us and we will point you to the right one.</p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--accent)] hover:brightness-90 text-white px-8 py-3.5 rounded-full font-medium transition"
          >
            Ask a Question
          </Link>
        </div>
      </div>
    </section>
  );
}
