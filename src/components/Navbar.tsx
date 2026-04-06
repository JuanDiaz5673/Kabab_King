'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'About' },
  { href: '/catering', label: 'Catering' },
  { href: '/order', label: 'Order Online' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          backgroundColor: 'white',
          boxShadow: scrolled ? '0 2px 20px rgba(91,26,26,0.08)' : 'none',
          transition: 'box-shadow 0.3s ease',
        }}
      >
        {/* Top accent line */}
        <div style={{ height: '3px', background: 'linear-gradient(to right, #5B1A1A, #C41E3A, #D4A843)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group py-2" aria-label="Kabab King - Home">
              <Image
                src="/navbar-logo.png"
                alt="Kabab King Logo"
                width={44}
                height={44}
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                priority
              />
              <div className="flex flex-col">
                <span className="font-display text-base sm:text-xl font-bold text-maroon leading-none tracking-wide">
                  Kabab King
                </span>
                <span className="text-[8px] sm:text-[10px] text-warm-gray tracking-[0.15em] uppercase mt-0.5">
                  Jackson Heights, Queens
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const isOrder = link.href === '/order';
                return isOrder ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="ml-4 px-6 py-2.5 bg-crimson text-white text-sm font-semibold rounded-md hover:bg-crimson-dark transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-crimson/20"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3.5 py-2 text-[13px] font-medium transition-colors rounded-md ${
                      isActive ? 'text-crimson bg-crimson/5' : 'text-charcoal hover:text-crimson hover:bg-crimson/5'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-crimson rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen(v => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              style={{
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '10px',
                border: '1px solid #F5EDE0',
                backgroundColor: menuOpen ? '#F5EDE0' : '#FDF8F0',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
              }}
            >
              <div style={{ width: '20px', height: '16px', position: 'relative' }}>
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    height: '2px',
                    backgroundColor: '#2C2421',
                    borderRadius: '2px',
                    transition: 'all 0.3s ease',
                    top: menuOpen ? '7px' : '0px',
                    transform: menuOpen ? 'rotate(45deg)' : 'none',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    height: '2px',
                    backgroundColor: '#2C2421',
                    borderRadius: '2px',
                    transition: 'all 0.3s ease',
                    top: '7px',
                    opacity: menuOpen ? 0 : 1,
                    transform: menuOpen ? 'scaleX(0)' : 'scaleX(1)',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    height: '2px',
                    backgroundColor: '#2C2421',
                    borderRadius: '2px',
                    transition: 'all 0.3s ease',
                    top: menuOpen ? '7px' : '14px',
                    transform: menuOpen ? 'rotate(-45deg)' : 'none',
                  }}
                />
              </div>
            </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile backdrop overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          top: '67px',
          zIndex: 9997,
          backgroundColor: 'rgba(0,0,0,0.3)',
          backdropFilter: 'blur(2px)',
          transition: 'opacity 0.3s ease',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      />

      {/* Mobile Navigation Panel */}
      <div
        style={{
          position: 'fixed',
          top: '67px',
          left: 0,
          right: 0,
          zIndex: 9998,
          backgroundColor: 'white',
          borderTop: '1px solid #F5EDE0',
          boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
          transition: 'transform 0.3s ease, opacity 0.3s ease',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-8px)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '8px 16px 16px' }}>
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href;
            const isOrder = link.href === '/order';
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block',
                  padding: '14px 16px',
                  borderRadius: '10px',
                  fontWeight: isOrder ? 600 : 500,
                  fontSize: '16px',
                  textDecoration: 'none',
                  textAlign: isOrder ? 'center' : 'left',
                  marginTop: isOrder ? '8px' : i === 0 ? '4px' : '2px',
                  color: isOrder ? 'white' : isActive ? '#C41E3A' : '#2C2421',
                  backgroundColor: isOrder ? '#C41E3A' : isActive ? '#FDF8F0' : 'transparent',
                  transition: 'background-color 0.15s ease',
                }}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
