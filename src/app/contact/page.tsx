"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get("_gotcha")) return;

    try {
      await fetch("https://formspree.io/f/xpznqwkl", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <p className="text-[#a855f7] font-medium text-sm tracking-widest uppercase mb-3">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-500 text-lg mb-10">
              Questions about treatments, pricing, or availability? We'd love to hear from you.
            </p>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold text-emerald-800 mb-2">Message sent!</h3>
                <p className="text-emerald-600">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#a855f7] focus:ring-2 focus:ring-[#a855f7]/20 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#a855f7] focus:ring-2 focus:ring-[#a855f7]/20 outline-none transition-all"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#a855f7] focus:ring-2 focus:ring-[#a855f7]/20 outline-none transition-all resize-none"
                    placeholder="How can we help?"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#a855f7] hover:bg-[#9333ea] text-white px-8 py-3.5 rounded-full font-medium transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-8 md:pt-24">
            <div>
              <h3 className="font-bold text-lg mb-2">Location</h3>
              <p className="text-gray-500">1234 Valencia St<br />San Francisco, CA 94110</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Hours</h3>
              <p className="text-gray-500">Tue — Fri: 10am - 7pm</p>
              <p className="text-gray-500">Sat: 9am - 5pm</p>
              <p className="text-gray-500">Sun — Mon: Closed</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Phone</h3>
              <a href="tel:+14155550234" className="text-gray-500 hover:text-[#a855f7] transition-colors">(415) 555-0234</a>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <a href="mailto:hello@glowstudio.co" className="text-gray-500 hover:text-[#a855f7] transition-colors">hello@glowstudio.co</a>
            </div>

            <div className="rounded-2xl overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5!2d-122.4213!3d37.7577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ1JzI3LjciTiAxMjLCsDI1JzE2LjciVw!5e0!3m2!1sen!2sus!4v1"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                title="Glow Studio location on Google Maps"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
