import Link from "next/link";
import config, { telHref } from "@/config";

export default function Footer() {
  const social = Object.entries(config.social).filter(([, url]) => url);

  return (
    <footer className="bg-[var(--primary)] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">
            {config.site_name}
            <span className="text-[var(--accent)]">.</span>
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">{config.description}</p>
        </div>
        <div>
          <h4 className="font-medium text-sm mb-4 text-gray-300">Quick Links</h4>
          <div className="space-y-2">
            <Link href="/services" className="block text-gray-400 text-sm hover:text-[var(--accent)] transition-colors">Services</Link>
            <Link href="/about" className="block text-gray-400 text-sm hover:text-[var(--accent)] transition-colors">About</Link>
            <Link href="/book" className="block text-gray-400 text-sm hover:text-[var(--accent)] transition-colors">Book Now</Link>
            <Link href="/contact" className="block text-gray-400 text-sm hover:text-[var(--accent)] transition-colors">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-medium text-sm mb-4 text-gray-300">Hours</h4>
          <div className="space-y-1 text-gray-400 text-sm">
            {config.hours.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-medium text-sm mb-4 text-gray-300">Contact</h4>
          <div className="space-y-1 text-gray-400 text-sm">
            <p>{config.address}</p>
            <p>
              <a href={telHref} className="hover:text-[var(--accent)] transition-colors">{config.phone}</a>
            </p>
            <p>
              <a href={`mailto:${config.email}`} className="hover:text-[var(--accent)] transition-colors">{config.email}</a>
            </p>
          </div>
          {social.length > 0 && (
            <div className="flex gap-4 mt-4">
              {social.map(([name, url]) => (
                <a key={name} href={url} target="_blank" rel="noopener" className="text-gray-400 hover:text-[var(--accent)] transition-colors text-sm capitalize">
                  {name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center">
        <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} {config.site_name}</p>
      </div>
    </footer>
  );
}
