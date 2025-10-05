'use client';

import { useState } from 'react';
import IconSocial from './ui/IconSocial';

export default function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 bg-transparent"
      >
        {/* Left Logo - RV Monogram */}
        <div className="flex items-center">
          <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm tracking-tight">
            RV
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#browse"
            className="text-white/80 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300 text-sm font-light tracking-wide hover:scale-105 focus:scale-105"
          >
            Browse
          </a>
          <a
            href="#services"
            className="text-white/80 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300 text-sm font-light tracking-wide hover:scale-105 focus:scale-105"
          >
            Services
          </a>
          <a
            href="#testimonials"
            className="text-white/80 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300 text-sm font-light tracking-wide hover:scale-105 focus:scale-105"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="text-white/80 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300 text-sm font-light tracking-wide hover:scale-105 focus:scale-105"
          >
            Contact us
          </a>
        </div>

        {/* Right Social Icons */}
        <div className="flex items-center space-x-3">
          <IconSocial
            href="#"
            ariaLabel="Facebook"
            className="text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </IconSocial>
          <IconSocial
            href="#"
            ariaLabel="Instagram"
            className="text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281c-.49 0-.98-.49-.98-.98s.49-.98.98-.98.98.49.98.98-.49.98-.98.98z" />
            </svg>
          </IconSocial>
          <IconSocial
            href="#"
            ariaLabel="Twitter"
            className="text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </IconSocial>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden flex items-center justify-center w-8 h-8 text-white/80 hover:text-white transition-all duration-300 hover:scale-110"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-card-bg">
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                RV
              </div>
              <button
                onClick={closeMenu}
                className="w-8 h-8 text-muted hover:text-text transition-colors"
                aria-label="Close navigation menu"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Links */}
            <div className="flex-1 flex flex-col justify-center items-center space-y-8">
              <a
                href="#browse"
                className="text-2xl text-muted hover:text-text transition-colors font-light tracking-wide"
                onClick={closeMenu}
              >
                Browse
              </a>
              <a
                href="#services"
                className="text-2xl text-muted hover:text-text transition-colors font-light tracking-wide"
                onClick={closeMenu}
              >
                Services
              </a>
              <a
                href="#testimonials"
                className="text-2xl text-muted hover:text-text transition-colors font-light tracking-wide"
                onClick={closeMenu}
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-2xl text-muted hover:text-text transition-colors font-light tracking-wide"
                onClick={closeMenu}
              >
                Contact us
              </a>
            </div>

            {/* Mobile Social Icons */}
            <div className="flex items-center justify-center space-x-4 pb-8">
              <IconSocial href="#" ariaLabel="Facebook">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </IconSocial>
              <IconSocial href="#" ariaLabel="Instagram">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281c-.49 0-.98-.49-.98-.98s.49-.98.98-.98.98.49.98.98-.49.98-.98.98z" />
                </svg>
              </IconSocial>
              <IconSocial href="#" ariaLabel="Twitter">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </IconSocial>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
