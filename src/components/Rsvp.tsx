'use client';

import { useEffect, useRef } from 'react';
import { siteConfig } from '@/lib/siteConfig';
import usePrefersReducedMotion from '@/lib/usePrefersReducedMotion';
import Button from './ui/Button';
import Card from './ui/Card';

export default function Rsvp() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) return;

    // Skip animations if user prefers reduced motion
    if (prefersReduced) {
      content.classList.add('animate-fade-in-up');
      return;
    }

    // Create intersection observer for fade-in animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(content);

    return () => {
      observer.disconnect();
    };
  }, [prefersReduced]);

  const handleRsvpClick = () => {
    window.open(siteConfig.rsvpUrl, '_blank', 'noopener,noreferrer');
  };

  const handleRegistryClick = () => {
    window.open(siteConfig.registryUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section ref={sectionRef} className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-12 text-text">
          Kindly Respond.
        </h2>

        <div
          ref={contentRef}
          className="opacity-0 translate-y-8 transition-all duration-500 ease-out"
        >
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* RSVP Block */}
            <Card className="p-8 text-center group focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 hover-lift hover-bg-shift">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-text mb-3">RSVP</h3>
                <p className="text-muted">
                  Please let us know if you&apos;ll be joining us for our
                  special day.
                </p>
              </div>
              <Button
                variant="primary"
                size="lg"
                onClick={handleRsvpClick}
                className="group-hover:scale-105 transition-transform duration-200 focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Open RSVP form in new tab"
              >
                RSVP Now
              </Button>
            </Card>

            {/* Registry Block */}
            <Card className="p-8 text-center group focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 hover-lift hover-bg-shift">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-text mb-3">Registry</h3>
                <p className="text-muted">
                  View our wedding registry to help us start our new life
                  together.
                </p>
              </div>
              <Button
                variant="outline"
                size="lg"
                onClick={handleRegistryClick}
                className="group-hover:scale-105 transition-transform duration-200 focus:ring-2 focus:ring-primary focus:ring-offset-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                aria-label="Open wedding registry in new tab"
              >
                View Registry
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
