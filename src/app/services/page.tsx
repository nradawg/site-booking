import Link from "next/link";

const categories = [
  {
    name: "Facials",
    items: [
      { name: "Signature Facial", time: "60 min", price: "$120", desc: "Deep cleansing, exfoliation, extraction, and custom mask." },
      { name: "Express Glow", time: "30 min", price: "$65", desc: "Quick refresh with cleanse, exfoliation, and hydrating serum." },
      { name: "Anti-Aging Facial", time: "75 min", price: "$175", desc: "Peptides, retinol, and micro-current for firmer, younger-looking skin." },
      { name: "Acne Clearing", time: "60 min", price: "$130", desc: "Targeted treatment with salicylic acid and blue LED light therapy." },
    ],
  },
  {
    name: "Body Treatments",
    items: [
      { name: "Body Scrub & Wrap", time: "60 min", price: "$140", desc: "Full-body exfoliation followed by a nourishing body wrap." },
      { name: "Back Facial", time: "45 min", price: "$95", desc: "Deep cleansing treatment for your back and shoulders." },
    ],
  },
  {
    name: "Light Therapy",
    items: [
      { name: "LED Light Therapy", time: "30 min", price: "$75", desc: "Red and blue LED to reduce inflammation and boost collagen." },
      { name: "LED Add-On", time: "15 min", price: "$35", desc: "Add LED therapy to any facial treatment." },
    ],
  },
  {
    name: "Peels & Advanced",
    items: [
      { name: "Chemical Peel — Light", time: "30 min", price: "$100", desc: "Gentle glycolic peel for mild texture and tone improvement." },
      { name: "Chemical Peel — Medium", time: "45 min", price: "$150", desc: "TCA peel for deeper exfoliation and pigmentation correction." },
      { name: "Microdermabrasion", time: "45 min", price: "$125", desc: "Crystal-free diamond tip exfoliation for smoother skin." },
    ],
  },
];

export default function Services() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-[#a855f7] font-medium text-sm tracking-widest uppercase mb-3">Menu</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-500 text-lg max-w-xl">
            Every treatment is customized to your skin type and goals. All products are clean, cruelty-free, and dermatologist-recommended.
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((cat) => (
            <div key={cat.name}>
              <h2 className="text-2xl font-bold mb-6 pb-3 border-b border-purple-100">{cat.name}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {cat.items.map((item) => (
                  <div key={item.name} className="bg-white rounded-xl p-6 border border-purple-50 hover:shadow-sm transition-shadow">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold">{item.name}</h3>
                      <span className="text-xl font-bold text-[#a855f7] ml-4 shrink-0">{item.price}</span>
                    </div>
                    <p className="text-xs text-gray-400 mb-2">{item.time}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-purple-50 rounded-2xl p-12">
          <h3 className="text-2xl font-bold mb-3">Not sure what you need?</h3>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            Book a free 15-minute skin consultation and we'll recommend the perfect treatment for you.
          </p>
          <Link
            href="/book"
            className="inline-block bg-[#a855f7] hover:bg-[#9333ea] text-white px-8 py-3.5 rounded-full font-medium transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
