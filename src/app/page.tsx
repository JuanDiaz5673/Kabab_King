import Link from 'next/link';
import Image from 'next/image';
import { popularItems, heroImage, categoryImages } from '@/data/menu';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? 'text-gold' : 'text-cream-dark'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const testimonials = [
  {
    text: 'The best kebabs in all of Queens! We come here every week and the quality never disappoints. The nihari is a must-try.',
    author: 'Rashid M.',
    source: 'Google Review',
    rating: 5,
  },
  {
    text: 'Amazing food at unbeatable prices. Open 24/7 which is perfect for late-night cravings. The lamb chops are incredible.',
    author: 'Sarah K.',
    source: 'Yelp',
    rating: 5,
  },
  {
    text: 'We ordered catering for our office event and everyone loved it. The mixed grill platter was the highlight of the party.',
    author: 'David L.',
    source: 'Google Review',
    rating: 5,
  },
];

export default function Home() {
  return (
    <>
      {/* ───── HERO ───── */}
      <section className="relative overflow-hidden">
        {/* Full background image */}
        <Image
          src={heroImage}
          alt="Sizzling kebabs fresh off the grill at Kabab King"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 sm:bg-gradient-to-r sm:from-black/75 sm:via-black/60 sm:to-black/30" />
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-4 sm:pt-8 pb-10 sm:pb-14 lg:pb-16 w-full">
          {/* Logo — cropped to remove empty space, bigger visual size */}
          <div className="mb-3 sm:mb-5 h-[160px] sm:h-[220px] lg:h-[280px] w-[320px] sm:w-[450px] lg:w-[560px] relative overflow-hidden mx-auto sm:mx-0 sm:-ml-3 lg:-ml-4">
            <Image
              src="/header-logo.png"
              alt="Kabab King"
              width={600}
              height={600}
              className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[400px] sm:w-[560px] lg:w-[700px] h-auto drop-shadow-xl"
              priority
            />
          </div>

          <div className="max-w-2xl text-center sm:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-4 sm:mb-5">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-medium text-white/90">Open 24/7 &mdash; Always Serving</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-4 sm:mb-6 drop-shadow-lg">
              Authentic Kebabs
              <span className="block text-gold-light">Since 1997</span>
            </h1>

            <p className="text-base sm:text-xl text-white/80 max-w-lg mx-auto sm:mx-0 mb-6 sm:mb-8 leading-relaxed">
              Experience the finest Pakistani &amp; Indian cuisine in Jackson Heights, Queens.
              Handcrafted over open flame, served with generations of tradition.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/order"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 bg-crimson text-white font-semibold rounded hover:bg-crimson-dark transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-crimson/30 text-base sm:text-lg"
              >
                Order Now
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/menu"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all text-base sm:text-lg"
              >
                View Menu
              </Link>
            </div>

            </div>

          {/* Quick stats */}
          <div className="flex items-center justify-center sm:justify-start gap-5 sm:gap-10 mt-8 sm:mt-12">
            {[
              { value: '25+', label: 'Years Serving' },
              { value: '418+', label: 'Yelp Reviews' },
              { value: '24/7', label: 'Always Open' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-white/50 uppercase tracking-wider mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Halal stamp — below stats */}
          <div className="mt-5 sm:mt-6 text-center sm:text-left">
            <div className="inline-flex bg-white/80 backdrop-blur-sm rounded-full p-0.5 shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Halal_logo.svg/200px-Halal_logo.svg.png"
                alt="Halal Certified"
                width={60}
                height={60}
                className="sm:w-[70px] sm:h-[70px]"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ───── FEATURED DISHES ───── */}
      <section className="py-12 sm:py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm font-medium text-gold-dark uppercase tracking-[0.2em] mb-2">From Our Kitchen</p>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-maroon-dark">
              Signature Dishes
            </h2>
            <div className="ornament-divider max-w-xs mx-auto mt-4">
              <svg className="w-5 h-5 text-gold" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7L2 9.4h7.6z"/>
              </svg>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularItems.slice(0, 4).map((item) => (
              <div
                key={item.name}
                className="group bg-white rounded-xl border border-cream-dark overflow-hidden hover:shadow-xl hover:shadow-maroon/5 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Item image */}
                <div className="aspect-[4/3] relative overflow-hidden bg-cream-dark">
                  <Image
                    src={item.image || categoryImages[item.category] || ''}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                  {item.popular && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-crimson text-white text-[10px] font-bold uppercase tracking-wider rounded">
                      Popular
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-display text-lg font-bold text-charcoal group-hover:text-crimson transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-lg font-bold text-crimson whitespace-nowrap">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-sm text-warm-gray leading-relaxed line-clamp-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-6 py-3 text-maroon font-semibold border-2 border-maroon/20 rounded hover:bg-maroon hover:text-white hover:border-maroon transition-all"
            >
              View Full Menu
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ───── WHY KABAB KING ───── */}
      <section className="py-16 sm:py-20 bg-cream relative grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                  </svg>
                ),
                title: 'Charcoal Grilled',
                desc: 'Every kebab is cooked over real charcoal for that authentic smoky flavor you can\'t replicate.',
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                ),
                title: '100% Halal Certified',
                desc: 'All meats are certified halal and sourced from trusted suppliers. Quality you can trust.',
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Open 24 Hours',
                desc: 'Day or night, we\'re here for you. Breakfast, lunch, dinner, or a 3 AM craving — we never close.',
              },
            ].map((feature) => (
              <div key={feature.title} className="text-center p-5 sm:p-8 bg-white rounded-xl border border-cream-dark">
                <div className="w-14 h-14 rounded-full bg-crimson/10 text-crimson flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-charcoal mb-2">{feature.title}</h3>
                <p className="text-sm text-warm-gray leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── TESTIMONIALS ───── */}
      <section className="py-16 sm:py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-gold-dark uppercase tracking-[0.2em] mb-2">What Our Guests Say</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-maroon-dark">
              Loved by Our Community
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <blockquote
                key={t.author}
                className="bg-white rounded-xl p-6 sm:p-8 border border-cream-dark hover:shadow-lg hover:shadow-maroon/5 transition-all"
              >
                <StarRating rating={t.rating} />
                <p className="mt-4 text-warm-gray leading-relaxed text-sm sm:text-base italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <footer className="mt-5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-maroon/10 to-crimson/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-maroon">{t.author[0]}</span>
                  </div>
                  <div>
                    <cite className="not-italic text-sm font-semibold text-charcoal">{t.author}</cite>
                    <p className="text-xs text-warm-gray-light">{t.source}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CTA BANNER ───── */}
      <section className="py-12 sm:py-20 bg-maroon-dark text-white relative overflow-hidden grain">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-crimson/10 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gold/5 translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Ready to <span className="gold-shimmer">Feast?</span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-6 sm:mb-8">
            Skip the wait. Order your favorite dishes online for pickup or delivery.
            Fresh from our kitchen to your table.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/order"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-crimson text-white font-semibold rounded hover:bg-crimson-dark transition-all hover:-translate-y-0.5 hover:shadow-xl text-lg"
            >
              Order Online
            </Link>
            <Link
              href="/catering"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded border border-white/20 hover:bg-white/20 transition-all text-lg"
            >
              Catering Inquiry
            </Link>
          </div>
        </div>
      </section>

      {/* ───── MAP / LOCATION ───── */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-medium text-gold-dark uppercase tracking-[0.2em] mb-2">Find Us</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-maroon-dark mb-6">
                Visit Kabab King
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-crimson/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-crimson" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">Address</h3>
                    <p className="text-warm-gray text-sm">7301 37th Rd, Jackson Heights, Queens, NY 11372</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-crimson/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-crimson" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">Phone</h3>
                    <a href="tel:7184575857" className="text-warm-gray text-sm hover:text-crimson transition-colors">
                      (718) 457-5857
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-crimson/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-crimson" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">Hours</h3>
                    <p className="text-warm-gray text-sm">Open 24 Hours, 7 Days a Week</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="aspect-[4/3] rounded-xl overflow-hidden border border-cream-dark bg-white shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.886!3d40.749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f0115eddc23%3A0x4a7e8e8e8e8e8e8e!2s7301%2037th%20Rd%2C%20Jackson%20Heights%2C%20NY%2011372!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kabab King location on Google Maps"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
