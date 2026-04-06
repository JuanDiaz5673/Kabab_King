import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Kabab King — a Jackson Heights staple since 1997 serving authentic halal Pakistani & Indian cuisine 24/7.',
};

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      </svg>
    ),
    title: 'Authentic Recipes',
    desc: 'Our recipes have been passed down through generations, staying true to the traditional flavors of Pakistan and India.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: '100% Halal',
    desc: 'Every ingredient we use meets the highest halal standards. Our meats are sourced from certified halal suppliers.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
      </svg>
    ),
    title: 'Fresh Daily',
    desc: 'We prepare everything fresh every day. Our spices are ground in-house and our breads are baked to order.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Community First',
    desc: 'We are deeply rooted in the Jackson Heights community, serving neighbors, families, and visitors from around the world.',
  },
];

const milestones = [
  { year: '1997', event: 'Kabab King opens its doors in Jackson Heights, Queens' },
  { year: '2005', event: 'Became a beloved late-night destination for the community' },
  { year: '2010', event: 'Expanded kitchen and introduced our full catering service' },
  { year: '2015', event: 'Featured in major food publications and TV segments' },
  { year: '2020', event: 'Continued serving through the pandemic, feeding first responders' },
  { year: '2024', event: 'Catered the NYC mayoral inauguration celebration' },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-cream py-12 sm:py-16 grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-sm font-medium text-gold-dark uppercase tracking-[0.2em] mb-2">Our Story</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-maroon-dark mb-4">About Kabab King</h1>
          <p className="text-warm-gray max-w-xl mx-auto">
            A Jackson Heights institution serving authentic flavors for over 25 years.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-maroon-dark mb-6">
                Where Tradition Meets Flavor
              </h2>
              <div className="space-y-4 text-warm-gray leading-relaxed">
                <p>
                  Since 1997, Kabab King has been the heart and soul of Jackson Heights&apos; vibrant food scene.
                  What started as a small eatery with a simple mission &mdash; to serve the most authentic
                  Pakistani and Indian cuisine in Queens &mdash; has grown into a beloved institution that
                  never sleeps.
                </p>
                <p>
                  Our kitchen runs 24 hours a day, 7 days a week, because great food doesn&apos;t follow
                  a schedule. Whether it&apos;s a pre-dawn breakfast of halwa puri, a midday feast of
                  smoky kebabs, or a late-night bowl of nihari &mdash; we&apos;re always here.
                </p>
                <p>
                  Every dish at Kabab King is prepared with the same care and attention to detail that
                  our founders brought from their family kitchens. Our spices are ground fresh, our
                  meats are certified halal, and our recipes stay true to their roots.
                </p>
              </div>
            </div>

            {/* Image placeholder */}
            <div className="aspect-[4/3] rounded-xl overflow-hidden border border-cream-dark img-placeholder flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 rounded-full bg-maroon/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-maroon/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm text-warm-gray-light">Restaurant photo placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 bg-cream grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-maroon-dark">Our Values</h2>
            <div className="ornament-divider max-w-xs mx-auto mt-3">
              <svg className="w-4 h-4 text-gold" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7L2 9.4h7.6z" />
              </svg>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 border border-cream-dark hover:shadow-md transition-all text-center">
                <div className="w-12 h-12 rounded-full bg-crimson/10 text-crimson flex items-center justify-center mx-auto mb-4">
                  {v.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-charcoal mb-2">{v.title}</h3>
                <p className="text-sm text-warm-gray leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-24 bg-warm-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-maroon-dark">Our Journey</h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-crimson/30 to-gold" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex items-start gap-6 ${
                    i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-crimson border-2 border-white shadow z-10" />

                  <div className={`ml-14 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                    <div className="bg-white rounded-xl p-5 border border-cream-dark shadow-sm">
                      <span className="font-display text-xl font-bold text-gold-dark">{m.year}</span>
                      <p className="text-sm text-warm-gray mt-1">{m.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 sm:py-20 bg-maroon-dark text-white grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Growing Across <span className="gold-shimmer">America</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-10">
            From our flagship in Jackson Heights, Queens, Kabab King has expanded to serve communities across the nation.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Queens, NY (Flagship)',
              'Chicago, IL',
              'Washington, D.C.',
              'Columbus, OH',
              'Norcross, GA',
              'Pittsburgh, PA',
              'Phoenix, AZ',
              'Orlando, FL',
              'Houston, TX',
            ].map((loc) => (
              <span
                key={loc}
                className={`px-4 py-2 rounded-full text-sm ${
                  loc.includes('Flagship')
                    ? 'bg-crimson text-white font-semibold'
                    : 'bg-white/10 text-white/70'
                }`}
              >
                {loc}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
