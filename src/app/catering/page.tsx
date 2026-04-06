'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';

const packages = [
  {
    name: 'Gathering',
    guests: '10–20 guests',
    price: 'From $199',
    items: ['Choice of 2 kabab varieties', '1 curry dish', 'Rice or biryani', 'Naan & roti', 'Green salad', 'Drinks'],
    popular: false,
  },
  {
    name: 'Celebration',
    guests: '20–50 guests',
    price: 'From $449',
    items: ['Choice of 3 kabab varieties', '2 curry dishes', 'Biryani', 'Assorted breads', 'Raita & chutneys', 'Dessert platter', 'Drinks'],
    popular: true,
  },
  {
    name: 'Grand Feast',
    guests: '50+ guests',
    price: 'Custom quote',
    items: ['Full kabab selection', 'Multiple curry options', 'Biryani & pulao', 'Full bread assortment', 'Appetizers & samosas', 'Desserts', 'Beverages', 'Serving staff available'],
    popular: false,
  },
];

export default function CateringPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Header */}
      <section className="bg-cream py-12 sm:py-16 grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-sm font-medium text-gold-dark uppercase tracking-[0.2em] mb-2">Events &amp; Parties</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-maroon-dark mb-4">Catering</h1>
          <p className="text-warm-gray max-w-xl mx-auto">
            From intimate gatherings to grand celebrations &mdash; let Kabab King bring the feast to you.
            We proudly catered the NYC mayoral inauguration.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 sm:py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-maroon-dark">Our Packages</h2>
            <p className="text-warm-gray mt-2">Choose a package or customize your own. All packages include setup and disposable plates/utensils.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-xl overflow-hidden border transition-all hover:shadow-xl ${
                  pkg.popular
                    ? 'border-crimson shadow-lg shadow-crimson/10 relative'
                    : 'border-cream-dark bg-white'
                }`}
              >
                {pkg.popular && (
                  <div className="bg-crimson text-white text-center text-xs font-bold uppercase tracking-widest py-2">
                    Most Popular
                  </div>
                )}
                <div className={`p-6 sm:p-8 ${pkg.popular ? 'bg-white' : ''}`}>
                  <h3 className="font-display text-2xl font-bold text-charcoal">{pkg.name}</h3>
                  <p className="text-sm text-warm-gray mt-1">{pkg.guests}</p>
                  <p className="font-display text-3xl font-bold text-crimson mt-4">{pkg.price}</p>

                  <ul className="mt-6 space-y-3">
                    {pkg.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-warm-gray">
                        <svg className="w-4 h-4 text-gold shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#inquiry-form"
                    className={`mt-8 block text-center px-6 py-3 rounded font-semibold transition-all ${
                      pkg.popular
                        ? 'bg-crimson text-white hover:bg-crimson-dark'
                        : 'bg-white text-maroon border-2 border-maroon/20 hover:bg-maroon hover:text-white hover:border-maroon'
                    }`}
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry-form" className="py-16 sm:py-24 bg-cream grain relative">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-maroon-dark">Request a Quote</h2>
            <p className="text-warm-gray mt-2">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-xl p-8 sm:p-12 border border-cream-dark text-center">
              <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-charcoal mb-2">Thank You!</h3>
              <p className="text-warm-gray">Your catering inquiry has been received. Our team will contact you within 24 hours.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 px-6 py-2 text-sm text-crimson font-medium hover:underline"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 sm:p-10 border border-cream-dark shadow-sm">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">Full Name *</label>
                  <input type="text" id="name" required className="w-full px-4 py-3 bg-cream/50 border border-cream-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson transition-all" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">Email *</label>
                  <input type="email" id="email" required className="w-full px-4 py-3 bg-cream/50 border border-cream-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson transition-all" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1.5">Phone *</label>
                  <input type="tel" id="phone" required className="w-full px-4 py-3 bg-cream/50 border border-cream-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson transition-all" />
                </div>
                <div>
                  <label htmlFor="event-date" className="block text-sm font-medium text-charcoal mb-1.5">Event Date *</label>
                  <input type="date" id="event-date" required className="w-full px-4 py-3 bg-cream/50 border border-cream-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson transition-all" />
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-charcoal mb-1.5">Estimated Guests *</label>
                  <select id="guests" required className="w-full px-4 py-3 bg-cream/50 border border-cream-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson transition-all">
                    <option value="">Select range</option>
                    <option value="10-20">10–20 guests</option>
                    <option value="20-50">20–50 guests</option>
                    <option value="50-100">50–100 guests</option>
                    <option value="100+">100+ guests</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="pkg" className="block text-sm font-medium text-charcoal mb-1.5">Package Interest</label>
                  <select id="pkg" className="w-full px-4 py-3 bg-cream/50 border border-cream-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson transition-all">
                    <option value="">Select package</option>
                    <option value="gathering">Gathering (10–20)</option>
                    <option value="celebration">Celebration (20–50)</option>
                    <option value="grand">Grand Feast (50+)</option>
                    <option value="custom">Custom Package</option>
                  </select>
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">Additional Details</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 bg-cream/50 border border-cream-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson transition-all resize-none" placeholder="Tell us about your event, dietary preferences, or any special requests..." />
              </div>
              <button
                type="submit"
                className="mt-6 w-full px-8 py-4 bg-crimson text-white font-semibold rounded hover:bg-crimson-dark transition-all hover:shadow-lg hover:shadow-crimson/20 text-lg"
              >
                Submit Inquiry
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
