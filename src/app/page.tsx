import Link from 'next/link';
import Image from 'next/image';
import { popularItems, heroImage, categoryImages } from '@/data/menu';
import ReviewCarousel from '@/components/ReviewCarousel';

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
          className="object-cover object-center saturate-[1.3] contrast-[1.1] sm:saturate-[1.15] sm:contrast-100"
          sizes="100vw"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/10 sm:bg-gradient-to-r sm:from-black/75 sm:via-black/60 sm:to-black/30" />
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 sm:from-black/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-2 sm:pt-4 pb-10 sm:pb-14 lg:pb-16 w-full">
          <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:gap-8">
            {/* Left: Text content */}
            <div className="flex-1 text-center sm:text-left">
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

            {/* Logo — above text on mobile, right of text on desktop */}
            <div className="flex items-center justify-center flex-shrink-0 mb-2 sm:mb-4 lg:mb-0">
              <div className="h-[240px] w-[312px] sm:h-[300px] sm:w-[380px] lg:h-[491px] lg:w-[613px] relative overflow-hidden">
                <Image
                  src="/header-logo.png"
                  alt="Kabab King"
                  width={600}
                  height={600}
                  className="absolute left-1/2 -translate-x-1/2 top-[45%] -translate-y-1/2 w-[408px] sm:w-[500px] lg:w-[796px] h-auto drop-shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Quick stats */}
          <div className="flex items-center justify-center sm:justify-start gap-5 sm:gap-10 mt-8 sm:mt-10">
            {[
              { value: '25+', label: 'Years Serving' },
              { value: '418+', label: 'Yelp Reviews' },
              { value: 'Daily', label: '7AM – 2AM' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-white/50 uppercase tracking-wider mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Halal stamp + Mayor endorsement badge */}
          <div className="mt-5 sm:mt-6 flex items-center justify-start gap-[15px] flex-wrap">
            <Image
              src="/halal-logo.png"
              alt="Halal Certified"
              width={120}
              height={120}
              className="w-[68px] h-[68px] sm:w-[81px] sm:h-[81px] object-contain drop-shadow-lg"
            />
            <Link
              href="#mayor-endorsement"
              className="inline-flex items-center gap-2.5 pl-3 pr-4 py-2 bg-gold/15 backdrop-blur-md rounded-full border border-gold/40 hover:bg-gold/25 transition-all group"
            >
              <svg className="w-4 h-4 text-gold shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7L2 9.4h7.6z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] font-semibold text-gold uppercase tracking-wider leading-tight">As Featured</div>
                <div className="text-xs sm:text-sm font-medium text-white leading-tight">Mayor Mamdani&rsquo;s Favorite</div>
              </div>
            </Link>
          </div>

        </div>
      </section>

      {/* ───── MAMDANI ENDORSEMENT ───── */}
      <section id="mayor-endorsement" className="scroll-mt-24 py-10 sm:py-14 bg-gradient-to-br from-maroon-dark via-maroon to-maroon-dark text-white relative overflow-hidden grain">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/10 -translate-y-1/3 translate-x-1/3 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-crimson/20 translate-y-1/3 -translate-x-1/3 blur-3xl" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 sm:mb-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/20 backdrop-blur-sm rounded-full border border-gold/30 mb-3">
              <svg className="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7L2 9.4h7.6z" />
              </svg>
              <span className="text-[10px] sm:text-xs font-semibold text-gold uppercase tracking-[0.2em]">A Historic Honor</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 leading-tight">
              The <span className="gold-shimmer">Mayor&rsquo;s</span> Favorite
            </h2>
            <div className="ornament-divider max-w-xs mx-auto">
              <svg className="w-4 h-4 text-gold" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7L2 9.4h7.6z" />
              </svg>
            </div>
          </div>

          <blockquote className="max-w-3xl mx-auto text-center mb-7 sm:mb-8">
            <svg className="w-8 h-8 text-gold/40 mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
            </svg>
            <p className="font-display text-lg sm:text-xl lg:text-2xl text-white leading-relaxed italic">
              &ldquo;You gotta go there for biryani.&rdquo;
            </p>
            <footer className="mt-4">
              <p className="text-sm sm:text-base font-semibold text-gold-light">Zohran Mamdani</p>
              <a
                href="https://www.youtube.com/shorts/q-_uPs97S0k"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs text-white/60 uppercase tracking-wider mt-0.5 hover:text-gold transition-colors"
              >
                Mayor of New York City &bull; The New Yorker
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </footer>
          </blockquote>

          <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-5 text-center">
              <div className="w-10 h-10 rounded-full bg-gold/20 text-gold flex items-center justify-center mx-auto mb-2.5">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>
              <h3 className="font-display text-sm sm:text-base font-bold text-white mb-1">Catered the Inauguration</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Served biryani and samosas at NYC City Hall on January 1, 2026
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-5 text-center">
              <div className="w-10 h-10 rounded-full bg-gold/20 text-gold flex items-center justify-center mx-auto mb-2.5">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="font-display text-sm sm:text-base font-bold text-white mb-1">Top 3 in Queens</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Publicly named one of Mayor Mamdani&rsquo;s three favorite Queens restaurants
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-5 text-center">
              <div className="w-10 h-10 rounded-full bg-gold/20 text-gold flex items-center justify-center mx-auto mb-2.5">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="font-display text-sm sm:text-base font-bold text-white mb-1">A Regular Since Youth</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                The mayor has been coming here for biryani since his teenage years
              </p>
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
                title: 'Open Daily 7AM–2AM',
                desc: 'From early breakfast through late-night cravings — we\'re here 19 hours a day, every day of the week.',
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
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-sm font-medium text-gold-dark uppercase tracking-[0.2em] mb-2">What Our Guests Say</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-maroon-dark">
              Loved by Our Community
            </h2>
            <p className="text-sm text-warm-gray-light mt-3">
              Click any review to read it on its source site
            </p>
          </div>

          <ReviewCarousel />
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
                    <p className="text-warm-gray text-sm">Open Daily 7 AM – 2 AM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="aspect-[4/3] rounded-xl overflow-hidden border border-cream-dark bg-white shadow-sm">
              <iframe
                src="https://www.google.com/maps?q=Kabab+King+7301+37th+Rd+Jackson+Heights+NY+11372&output=embed"
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
