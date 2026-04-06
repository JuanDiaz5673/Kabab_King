'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';

export default function ContactPage() {
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
          <p className="text-sm font-medium text-gold-dark uppercase tracking-[0.2em] mb-2">Get In Touch</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-maroon-dark mb-4">Contact Us</h1>
          <p className="text-warm-gray max-w-xl mx-auto">
            Have a question, feedback, or want to plan a visit? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-maroon-dark mb-8">
                Visit Our Restaurant
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    label: 'Address',
                    value: '7301 37th Rd, Jackson Heights, Queens, NY 11372',
                    href: 'https://maps.google.com/?q=7301+37th+Rd+Jackson+Heights+NY+11372',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    label: 'Phone',
                    value: '(718) 457-5857',
                    href: 'tel:7184575857',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    label: 'Hours',
                    value: 'Open 24 Hours, 7 Days a Week',
                    href: null,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-crimson/10 text-crimson flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-charcoal">{item.label}</h3>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-warm-gray text-sm hover:text-crimson transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-warm-gray text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="mt-8 pt-8 border-t border-cream-dark">
                <h3 className="text-sm font-semibold text-charcoal mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                    { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
                    { name: 'Yelp', icon: 'M20.16 12.594l-4.995 1.105c-.444.1-.89-.24-.89-.7v-.04c.012-.308.186-.583.46-.726l4.543-2.39c.378-.2.844-.088 1.08.26l.008.012c.256.376.18.874-.17 1.15l-.036.03zM17.238 18.79l-3.147-3.885c-.27-.332-.166-.825.213-1.023l.035-.018c.268-.14.59-.108.825.082l3.86 3.124c.33.268.38.756.113 1.088l-.006.008c-.288.358-.818.396-1.148.094l-.024-.02-.026-.023-.695-.427zm-2.582-2.57l.013.02c.186.304.128.697-.14.93l-4.396 3.86c-.34.296-.856.232-1.112-.137l-.004-.006c-.222-.322-.17-.76.122-1.02l4.88-4.326c.394-.35.44.358.637.68zm-3.44-3.394l1.656-4.77c.14-.402.556-.628.97-.52l.02.005c.38.098.64.444.62.836l-.276 5.07c-.026.47-.488.776-.928.615l-.036-.014c-.308-.114-.52-.39-.548-.72l-.116-1.872c-.024-.038-.14.2-.162.24l-1.2 1.13zm-1.43-7.164l.006.003c.368.214.504.68.306 1.058L6.394 12.9c-.236.448-.82.562-1.2.236l-.014-.012c-.328-.282-.416-.74-.214-1.118L8.97 5.362c.18-.338.555-.5.926-.38l.89.28z' },
                    { name: 'Google', icon: 'M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z' },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href="#"
                      aria-label={social.name}
                      className="w-10 h-10 rounded-lg bg-cream flex items-center justify-center text-warm-gray hover:bg-crimson hover:text-white transition-all"
                    >
                      <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d={social.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 aspect-video rounded-xl overflow-hidden border border-cream-dark">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.886!3d40.749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f0115eddc23%3A0x4a7e8e8e8e8e8e8e!2s7301%2037th%20Rd%2C%20Jackson%20Heights%2C%20NY%2011372!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kabab King location"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-maroon-dark mb-8">
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="bg-cream rounded-xl p-8 sm:p-12 border border-cream-dark text-center">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-charcoal mb-2">Message Sent!</h3>
                  <p className="text-warm-gray">Thank you for reaching out. We&apos;ll get back to you as soon as possible.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2 text-sm text-crimson font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="ct-name" className="block text-sm font-medium text-charcoal mb-1.5">Full Name *</label>
                      <input type="text" id="ct-name" required className="w-full px-4 py-3 bg-white border border-cream-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson transition-all" />
                    </div>
                    <div>
                      <label htmlFor="ct-email" className="block text-sm font-medium text-charcoal mb-1.5">Email *</label>
                      <input type="email" id="ct-email" required className="w-full px-4 py-3 bg-white border border-cream-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson transition-all" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="ct-subject" className="block text-sm font-medium text-charcoal mb-1.5">Subject *</label>
                    <select id="ct-subject" required className="w-full px-4 py-3 bg-white border border-cream-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson transition-all">
                      <option value="">Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="feedback">Feedback</option>
                      <option value="catering">Catering Question</option>
                      <option value="order">Order Issue</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="ct-message" className="block text-sm font-medium text-charcoal mb-1.5">Message *</label>
                    <textarea id="ct-message" rows={6} required className="w-full px-4 py-3 bg-white border border-cream-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson transition-all resize-none" placeholder="How can we help you?" />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-crimson text-white font-semibold rounded hover:bg-crimson-dark transition-all hover:shadow-lg hover:shadow-crimson/20 text-lg"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
