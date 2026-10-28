"use client";

import { useState } from "react";
import config, { telHref, mapSrc } from "@/config";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get("_gotcha")) return;

    try {
      const res = await fetch(`https://formspree.io/f/${config.formspree_id}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(res.statusText);
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
            <p className="text-[var(--accent)] font-medium text-sm tracking-widest uppercase mb-3">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-500 text-lg mb-10">
              Questions about treatments, prices, or times? Send us a message.
            </p>

            {!config.formspree_id ? (
              <a
                href={`mailto:${config.email}`}
                className="inline-block bg-[var(--accent)] hover:brightness-90 text-white px-8 py-3.5 rounded-full font-medium transition"
              >
                Email {config.email}
              </a>
            ) : submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold text-emerald-800 mb-2">Message sent!</h3>
                <p className="text-emerald-600">We will get back to you soon.</p>
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 outline-none transition-all"
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 outline-none transition-all"
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 outline-none transition-all resize-none"
                    placeholder="How can we help?"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[var(--accent)] hover:brightness-90 text-white px-8 py-3.5 rounded-full font-medium transition"
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
              <p className="text-gray-500">{config.address}</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Hours</h3>
              {config.hours.map((line) => (
                <p key={line} className="text-gray-500">{line}</p>
              ))}
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Phone</h3>
              <a href={telHref} className="text-gray-500 hover:text-[var(--accent)] transition-colors">{config.phone}</a>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <a href={`mailto:${config.email}`} className="text-gray-500 hover:text-[var(--accent)] transition-colors">{config.email}</a>
            </div>

            <div className="rounded-2xl overflow-hidden h-64">
              <iframe
                src={mapSrc}
                className="w-full h-full border-0"
                loading="lazy"
                title={`Map to ${config.site_name}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
