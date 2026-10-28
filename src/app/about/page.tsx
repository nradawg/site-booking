import config from "@/config";

type Person = { name: string; role: string; image: string; bio: string };

export default function About() {
  return (
    <>
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{config.about.headline}</h1>
            {config.about.story.map((paragraph) => (
              <p key={paragraph} className="text-gray-500 text-lg leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
          {config.about.image && (
            <div className="rounded-2xl overflow-hidden">
              <img src={config.about.image} alt="" className="w-full h-96 object-cover" />
            </div>
          )}
        </div>
      </section>

      {config.values.length > 0 && (
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">What We Stand For</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {config.values.map((value) => (
                <div key={value.title} className="text-center p-8">
                  <h3 className="font-bold text-lg mb-3">{value.title}</h3>
                  <p className="text-gray-500">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Team: only shows when user_config.json has real people */}
      {config.team.length > 0 && (
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">The Team</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {(config.team as Person[]).map((person) => (
                <div key={person.name} className="bg-white rounded-2xl overflow-hidden">
                  {person.image && (
                    <img src={person.image} alt={person.name} className="w-full h-72 object-cover" loading="lazy" />
                  )}
                  <div className="p-6">
                    <h3 className="text-lg font-bold">{person.name}</h3>
                    <p className="text-[var(--accent)] text-sm font-medium mb-3">{person.role}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{person.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
