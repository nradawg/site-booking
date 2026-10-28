import config, { telHref } from "@/config";

export default function Book() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Visit</h1>
          <p className="text-gray-500 text-lg max-w-lg mx-auto">Choose a treatment and a time that works for you.</p>
        </div>

        {config.booking_url ? (
          <>
            {/* Booking page from Cal.com, Calendly, or similar, set in user_config.json */}
            <div className="bg-white rounded-2xl p-2 min-h-[600px]">
              <iframe
                src={config.booking_url}
                className="w-full h-[600px] border-0 rounded-xl"
                title={`Book an appointment at ${config.site_name}`}
                loading="lazy"
              />
            </div>
            <p className="mt-4 text-center text-sm">
              <a href={config.booking_url} target="_blank" rel="noopener" className="text-[var(--accent)] hover:underline">
                Open the booking page in a new tab
              </a>
            </p>
          </>
        ) : (
          <div className="bg-white rounded-2xl p-10 text-center space-y-4">
            <p className="text-lg">To book, call, text, or email us.</p>
            <p>
              <a href={telHref} className="text-[var(--accent)] text-2xl font-bold hover:underline">{config.phone}</a>
            </p>
            <p>
              <a href={`mailto:${config.email}`} className="text-[var(--accent)] hover:underline">{config.email}</a>
            </p>
          </div>
        )}

        <div className="mt-8 text-center text-sm text-gray-400">
          <p>
            Prefer to book by phone? Call <a href={telHref} className="text-[var(--accent)] hover:underline">{config.phone}</a>
          </p>
          {config.booking_note && <p className="mt-2">{config.booking_note}</p>}
        </div>

        {/* Offers: only shows when user_config.json has real ones */}
        {config.offers.length > 0 && (
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {(config.offers as { title: string; description: string }[]).map((offer) => (
              <div key={offer.title} className="bg-[var(--accent)]/10 rounded-xl p-6 text-center">
                <h3 className="font-bold mb-2">{offer.title}</h3>
                <p className="text-gray-500 text-sm">{offer.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
