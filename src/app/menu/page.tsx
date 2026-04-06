'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { menuItems, categories, categoryImages } from '@/data/menu';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    let items = menuItems;
    if (activeCategory !== 'All') {
      items = items.filter((i) => i.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter(
        (i) =>
          i.name.toLowerCase().includes(q) ||
          i.description.toLowerCase().includes(q)
      );
    }
    return items;
  }, [activeCategory, searchQuery]);

  const grouped = useMemo(() => {
    const map = new Map<string, typeof menuItems>();
    filtered.forEach((item) => {
      const cat = item.category;
      if (!map.has(cat)) map.set(cat, []);
      map.get(cat)!.push(item);
    });
    return map;
  }, [filtered]);

  return (
    <>
      {/* Header */}
      <section className="bg-cream py-12 sm:py-16 grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-sm font-medium text-gold-dark uppercase tracking-[0.2em] mb-2">Explore Our</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-maroon-dark mb-4">Menu</h1>
          <p className="text-warm-gray max-w-xl mx-auto">
            From sizzling kebabs to rich curries and fresh-baked breads &mdash; all 100% halal, made fresh daily.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-warm-gray-light"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search our menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-cream-dark rounded-lg text-charcoal placeholder:text-warm-gray-light focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson transition-all"
                aria-label="Search menu items"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-4 hide-scrollbar mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-crimson text-white shadow-md shadow-crimson/20'
                    : 'bg-white text-warm-gray border border-cream-dark hover:border-maroon/30 hover:text-maroon'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-warm-gray text-lg">No items found. Try a different search.</p>
            </div>
          ) : (
            <div className="space-y-12">
              {Array.from(grouped.entries()).map(([category, items]) => (
                <div key={category}>
                  <div className="flex items-center gap-4 mb-6">
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-maroon-dark whitespace-nowrap">
                      {category}
                    </h2>
                    <div className="flex-1 h-px bg-gradient-to-r from-gold/40 to-transparent" />
                    <span className="text-sm text-warm-gray-light">{items.length} items</span>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {items.map((item) => (
                      <div
                        key={item.name}
                        className="group flex gap-4 p-4 bg-white rounded-xl border border-cream-dark hover:shadow-md hover:border-maroon/10 transition-all"
                      >
                        {/* Item image */}
                        <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden relative bg-cream-dark">
                          <Image
                            src={item.image || categoryImages[item.category] || ''}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="font-semibold text-charcoal group-hover:text-crimson transition-colors text-sm sm:text-base">
                              {item.name}
                            </h3>
                            <span className="font-bold text-crimson whitespace-nowrap text-sm sm:text-base">
                              ${item.price.toFixed(2)}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-warm-gray mt-1 leading-relaxed line-clamp-2">
                            {item.description}
                          </p>
                          {item.popular && (
                            <span className="inline-flex items-center gap-1 mt-2 text-[10px] font-bold uppercase tracking-wider text-gold-dark">
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              Popular
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
