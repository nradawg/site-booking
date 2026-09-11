export default function Book() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#a855f7] font-medium text-sm tracking-widest uppercase mb-3">Appointments</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Visit</h1>
          <p className="text-gray-500 text-lg max-w-lg mx-auto">
            Choose a treatment and time that works for you. New clients get 15% off their first visit.
          </p>
        </div>

        {/* Cal.com Embed */}
        <div className="bg-white rounded-2xl border border-purple-50 p-2 min-h-[600px]">
          <iframe
            src="https://cal.com/booking-demo"
            className="w-full h-[600px] border-0 rounded-xl"
            title="Book an appointment at Glow Studio"
            loading="lazy"
          />
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          <p>Prefer to book by phone? Call us at <a href="tel:+14155550234" className="text-[#a855f7] hover:underline">(415) 555-0234</a></p>
          <p className="mt-2">Cancellation policy: Please give 24 hours notice for cancellations or rescheduling.</p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-purple-50 rounded-xl p-6 text-center">
            <h3 className="font-bold mb-2">New Client?</h3>
            <p className="text-gray-500 text-sm">Get 15% off your first treatment. Applied automatically at booking.</p>
          </div>
          <div className="bg-purple-50 rounded-xl p-6 text-center">
            <h3 className="font-bold mb-2">Gift Cards</h3>
            <p className="text-gray-500 text-sm">Give the gift of glow. Available in any amount at the studio.</p>
          </div>
          <div className="bg-purple-50 rounded-xl p-6 text-center">
            <h3 className="font-bold mb-2">Packages</h3>
            <p className="text-gray-500 text-sm">Buy 5 treatments, get the 6th free. Ask at your next visit.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
