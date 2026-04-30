'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { menuItems, categories, categoryImages } from '@/data/menu';

interface CartItem {
  name: string;
  price: number;
  qty: number;
}

export default function OrderPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup');
  const [showCheckout, setShowCheckout] = useState(false);

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return menuItems;
    return menuItems.filter((i) => i.category === activeCategory);
  }, [activeCategory]);

  function addToCart(name: string, price: number) {
    setCart((prev) => {
      const existing = prev.find((i) => i.name === name);
      if (existing) return prev.map((i) => (i.name === name ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { name, price, qty: 1 }];
    });
  }

  function updateQty(name: string, delta: number) {
    setCart((prev) =>
      prev
        .map((i) => (i.name === name ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0)
    );
  }

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const tax = subtotal * 0.08875;
  const total = subtotal + tax;
  const itemCount = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <>
      {/* Header */}
      <section className="bg-cream py-8 sm:py-12 grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-full mb-3">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Demo Mode &mdash; This is a UI prototype
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-maroon-dark">Order Online</h1>
        </div>
      </section>

      <section className="py-6 sm:py-10 bg-warm-white overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col xl:flex-row gap-6 xl:gap-8">
            {/* Menu List */}
            <div className="flex-1 min-w-0">
              {/* Categories */}
              <div className="flex gap-2 overflow-x-auto pb-3 hide-scrollbar mb-6">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-medium transition-all ${
                      activeCategory === cat
                        ? 'bg-crimson text-white'
                        : 'bg-white text-warm-gray border border-cream-dark hover:border-maroon/30'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Items grid */}
              <div className="grid sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 gap-3">
                {filtered.map((item) => {
                  const inCart = cart.find((c) => c.name === item.name);
                  return (
                    <div
                      key={item.name}
                      className="flex items-center gap-3 p-3 bg-white rounded-lg border border-cream-dark hover:shadow-sm transition-all"
                    >
                      <div className="w-14 h-14 shrink-0 rounded-lg overflow-hidden relative bg-cream-dark">
                        <Image
                          src={item.image || categoryImages[item.category] || ''}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-charcoal truncate">{item.name}</h3>
                        <p className="text-sm font-bold text-crimson">${item.price.toFixed(2)}</p>
                        {(item.popular || item.mamdaniPick) && (
                          <div className="flex items-center gap-2 mt-0.5">
                            {item.popular && (
                              <span className="inline-flex items-center gap-0.5 text-[9px] font-bold uppercase tracking-wider text-gold-dark">
                                <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                Popular
                              </span>
                            )}
                            {item.mamdaniPick && (
                              <span className="inline-flex items-center gap-0.5 px-1 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider text-white bg-maroon-dark" title="Mayor Zohran Mamdani's pick">
                                <svg className="w-2.5 h-2.5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm0 2h14v2H5v-2z" />
                                </svg>
                                Mamdani&rsquo;s Pick
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                      {inCart ? (
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQty(item.name, -1)}
                            className="w-7 h-7 rounded-full bg-cream-dark flex items-center justify-center text-charcoal hover:bg-maroon/10 transition-colors"
                            aria-label={`Decrease ${item.name} quantity`}
                          >
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" d="M5 12h14" />
                            </svg>
                          </button>
                          <span className="text-sm font-bold text-charcoal w-5 text-center">{inCart.qty}</span>
                          <button
                            onClick={() => updateQty(item.name, 1)}
                            className="w-7 h-7 rounded-full bg-crimson flex items-center justify-center text-white hover:bg-crimson-dark transition-colors"
                            aria-label={`Increase ${item.name} quantity`}
                          >
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" d="M12 5v14m-7-7h14" />
                            </svg>
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => addToCart(item.name, item.price)}
                          className="px-3 py-1.5 text-xs font-semibold text-crimson border border-crimson/30 rounded hover:bg-crimson hover:text-white transition-all"
                          aria-label={`Add ${item.name} to cart`}
                        >
                          Add
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Cart Sidebar */}
            <div id="order-cart" className="xl:w-96 xl:shrink-0 scroll-mt-24">
              <div className="xl:sticky xl:top-24 space-y-4">
              <div className="bg-white rounded-xl border border-cream-dark p-5 sm:p-6">
                <h2 className="font-display text-xl font-bold text-charcoal mb-4 flex items-center justify-between">
                  Your Order
                  {itemCount > 0 && (
                    <span className="text-xs font-medium text-white bg-crimson px-2 py-0.5 rounded-full">
                      {itemCount} {itemCount === 1 ? 'item' : 'items'}
                    </span>
                  )}
                </h2>

                {cart.length === 0 ? (
                  <div className="text-center py-8">
                    <svg className="w-12 h-12 text-warm-gray-light mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                    </svg>
                    <p className="text-sm text-warm-gray">Your cart is empty</p>
                    <p className="text-xs text-warm-gray-light mt-1">Browse the menu and add items</p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-3 max-h-64 overflow-y-auto">
                      {cart.map((item) => (
                        <div key={item.name} className="flex items-center justify-between gap-2 py-2 border-b border-cream-dark last:border-0">
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-charcoal truncate">{item.name}</p>
                            <p className="text-xs text-warm-gray">${item.price.toFixed(2)} each</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <button onClick={() => updateQty(item.name, -1)} className="w-6 h-6 rounded-full bg-cream-dark flex items-center justify-center text-charcoal hover:bg-maroon/10 transition-colors" aria-label="Decrease quantity">
                              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" d="M5 12h14" /></svg>
                            </button>
                            <span className="text-sm font-bold w-4 text-center">{item.qty}</span>
                            <button onClick={() => updateQty(item.name, 1)} className="w-6 h-6 rounded-full bg-crimson/10 flex items-center justify-center text-crimson hover:bg-crimson hover:text-white transition-colors" aria-label="Increase quantity">
                              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" d="M12 5v14m-7-7h14" /></svg>
                            </button>
                          </div>
                          <p className="text-sm font-bold text-charcoal w-16 text-right">
                            ${(item.price * item.qty).toFixed(2)}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Totals */}
                    <div className="mt-4 pt-4 border-t border-cream-dark space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-warm-gray">Subtotal</span>
                        <span className="font-medium text-charcoal">${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-warm-gray">Tax (8.875%)</span>
                        <span className="font-medium text-charcoal">${tax.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-base font-bold pt-2 border-t border-cream-dark">
                        <span className="text-charcoal">Total</span>
                        <span className="text-crimson">${total.toFixed(2)}</span>
                      </div>
                    </div>

                    {/* Order type toggle */}
                    <div className="mt-5 flex bg-cream rounded-lg p-1">
                      {(['pickup', 'delivery'] as const).map((type) => (
                        <button
                          key={type}
                          onClick={() => setOrderType(type)}
                          className={`flex-1 py-2 text-sm font-medium rounded-md transition-all capitalize ${
                            orderType === type ? 'bg-white text-crimson shadow-sm' : 'text-warm-gray'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => setShowCheckout(true)}
                      className="mt-4 w-full px-6 py-3.5 bg-crimson text-white font-semibold rounded hover:bg-crimson-dark transition-all hover:shadow-lg hover:shadow-crimson/20"
                    >
                      Proceed to Checkout
                    </button>
                  </>
                )}
              </div>

              {/* Delivery platform links */}
              <div className="bg-white rounded-xl border border-cream-dark p-4 sm:p-5 text-center">
                <p className="text-[10px] text-warm-gray-light uppercase tracking-[0.15em] mb-1">Prefer to use an app?</p>
                <p className="text-sm font-semibold text-charcoal mb-3">Also available on</p>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://www.ubereats.com/store/kabab-king/2_FcT4QlT26J1hDJgim1Xw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#06C167] text-white text-sm font-semibold rounded-lg hover:brightness-110 transition-all"
                  >
                    Uber Eats
                  </a>
                  <a
                    href="https://www.grubhub.com/restaurant/kabab-king-73-01-37th-rd-queens/1454736"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#F63440] text-white text-sm font-semibold rounded-lg hover:brightness-110 transition-all"
                  >
                    Grubhub
                  </a>
                  <a
                    href="https://postmates.com/store/kabab-king/2_FcT4QlT26J1hDJgim1Xw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-charcoal text-white text-sm font-semibold rounded-lg hover:brightness-125 transition-all"
                  >
                    Postmates
                  </a>
                </div>
                <p className="text-[10px] text-warm-gray-light mt-2.5">
                  Third-party delivery fees may apply
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating cart button — mobile only */}
      <a
        href="#order-cart"
        className="xl:hidden fixed bottom-5 right-5 z-40 flex items-center gap-2 pl-4 pr-5 py-3 bg-crimson text-white font-semibold rounded-full shadow-2xl shadow-crimson/40 hover:bg-crimson-dark transition-all active:scale-95"
        aria-label={itemCount > 0 ? `View cart with ${itemCount} ${itemCount === 1 ? 'item' : 'items'}` : 'View cart and delivery options'}
      >
        <span className="relative">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
          </svg>
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gold text-charcoal text-[10px] font-bold flex items-center justify-center border-2 border-crimson">
              {itemCount}
            </span>
          )}
        </span>
        <span className="text-sm">
          {itemCount > 0 ? `Cart · $${total.toFixed(2)}` : 'View Cart'}
        </span>
      </a>

      {/* Checkout Modal */}
      {showCheckout && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Checkout"
          onClick={(e) => { if (e.target === e.currentTarget) setShowCheckout(false); }}
          onKeyDown={(e) => { if (e.key === 'Escape') setShowCheckout(false); }}
        >
          <div className="bg-white rounded-xl max-w-md w-full p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-2xl font-bold text-charcoal">Checkout</h2>
              <button
                onClick={() => setShowCheckout(false)}
                className="w-8 h-8 rounded-full bg-cream flex items-center justify-center hover:bg-cream-dark transition-colors"
                aria-label="Close checkout"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="bg-amber-50 text-amber-700 text-xs p-3 rounded-lg mb-5 flex items-start gap-2">
              <svg className="w-4 h-4 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              This is a demo prototype. No actual orders will be placed.
            </div>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Demo: Order submitted!'); setShowCheckout(false); setCart([]); }}>
              <div>
                <label htmlFor="co-name" className="block text-sm font-medium text-charcoal mb-1">Full Name</label>
                <input type="text" id="co-name" required className="w-full px-4 py-2.5 bg-cream/50 border border-cream-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson" />
              </div>
              <div>
                <label htmlFor="co-phone" className="block text-sm font-medium text-charcoal mb-1">Phone</label>
                <input type="tel" id="co-phone" required className="w-full px-4 py-2.5 bg-cream/50 border border-cream-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson" />
              </div>
              {orderType === 'delivery' && (
                <div>
                  <label htmlFor="co-address" className="block text-sm font-medium text-charcoal mb-1">Delivery Address</label>
                  <input type="text" id="co-address" required className="w-full px-4 py-2.5 bg-cream/50 border border-cream-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson" />
                </div>
              )}

              <div className="pt-3 border-t border-cream-dark">
                <div className="flex justify-between font-bold text-charcoal mb-4">
                  <span>Total</span>
                  <span className="text-crimson">${total.toFixed(2)}</span>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3.5 bg-crimson text-white font-semibold rounded hover:bg-crimson-dark transition-all text-lg"
                >
                  Place Order (Demo)
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
