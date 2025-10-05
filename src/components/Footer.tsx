'use client';

import { useState } from 'react';
import { siteConfig } from '@/lib/siteConfig';
import OptimizedImage from './ui/OptimizedImage';

export default function Footer() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const testimonials = siteConfig.testimonials;

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <footer
      role="contentinfo"
      className="bg-footer-bg text-[#EAEAEA] border-t border-[#EAEAEA]/10"
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center focus-within:ring-2 focus-within:ring-white/50 focus-within:ring-offset-2 focus-within:ring-offset-footer-bg">
          {/* Left side - Testimonials */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-[#EAEAEA]/80 uppercase tracking-wider">
              Testimonials
            </h3>
            <blockquote className="text-[#EAEAEA]/90 text-lg leading-relaxed italic">
              &ldquo;{currentTestimonial.text}&rdquo;
            </blockquote>
            <cite className="text-[#EAEAEA]/70 text-sm not-italic block">
              — {currentTestimonial.author}
            </cite>
          </div>

          {/* Right side - Avatar chips */}
          <div className="flex flex-col items-end space-y-4">
            <div className="flex items-center space-x-3">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => setCurrentTestimonialIndex(index)}
                  className={`relative w-12 h-12 rounded-full overflow-hidden transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#EAEAEA]/50 focus:ring-offset-2 focus:ring-offset-footer-bg ${
                    index === currentTestimonialIndex
                      ? 'ring-2 ring-[#EAEAEA]/50 scale-110'
                      : 'opacity-60 hover:opacity-80 hover:scale-105'
                  }`}
                  aria-label={`View testimonial from ${testimonial.author}`}
                >
                  <OptimizedImage
                    src={testimonial.avatar}
                    alt={`${testimonial.author} avatar`}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </button>
              ))}
            </div>

            {/* Navigation arrow */}
            {testimonials.length > 1 && (
              <button
                onClick={nextTestimonial}
                className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EAEAEA]/10 hover:bg-[#EAEAEA]/20 transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-[#EAEAEA]/50 focus:ring-offset-2 focus:ring-offset-footer-bg"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-4 h-4 text-[#EAEAEA]/70 group-hover:text-[#EAEAEA] transition-colors duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
