'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteConfig } from '@/lib/siteConfig';
import { EventItem } from '@/types';
import usePrefersReducedMotion from '@/lib/usePrefersReducedMotion';
import Card from './ui/Card';
import Button from './ui/Button';
import MapLink from './MapLink';
import FeaturedContent from './FeaturedContent';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Events() {
  const eventsSectionRef = useRef<HTMLElement>(null);
  const eventsHeadingRef = useRef<HTMLHeadingElement>(null);
  const eventTilesRef = useRef<HTMLDivElement[]>([]);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    if (prefersReduced || isMobile) {
      return; // Skip complex animations on mobile or if user prefers reduced motion
    }

    const ctx = gsap.context(() => {
      // Events heading animation - subtle fade up
      gsap.fromTo(
        eventsHeadingRef.current,
        {
          opacity: 0,
          y: 30,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: eventsHeadingRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Staggered event tiles animation
      eventTilesRef.current.forEach((tile, index) => {
        if (tile) {
          gsap.fromTo(
            tile,
            {
              opacity: 0,
              y: 40,
              scale: 0.95,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: 'power2.out',
              delay: index * 0.15, // Stagger the animations
              scrollTrigger: {
                trigger: tile,
                start: 'top 85%',
                end: 'bottom 15%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      });
    }, eventsSectionRef);

    return () => ctx.revert(); // Cleanup animations
  }, [prefersReduced]);

  return (
    <section ref={eventsSectionRef} className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Featured Content Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-text">
              Our Wedding
            </h2>
            <p className="text-lg text-muted">
              A celebration of love and commitment
            </p>
          </div>
        </div>

        {/* Featured Content Section */}
        {/* <FeaturedContent /> */}

        {/* Events Section */}
        <div>
          <h2
            ref={eventsHeadingRef}
            className="text-4xl md:text-5xl font-serif font-bold text-center mb-12 text-text"
          >
            Schedule of Events
          </h2>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.events.map((event: EventItem, index) => (
              <Card
                key={event.id}
                ref={(el) => {
                  if (el) eventTilesRef.current[index] = el;
                }}
                className="focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 hover-lift hover-bg-shift"
                imageHeader={{
                  src: event.imageUrl,
                  alt: `${event.title} - ${event.venueName}`,
                  height: '192px', // h-48 equivalent
                }}
              >
                <div className="text-center h-full flex flex-col">
                  {/* Event Title */}
                  <h3 className="text-xl md:text-2xl font-serif font-medium mb-3 text-text">
                    {event.title}
                  </h3>

                  {/* Date & Time */}
                  <p className="text-base text-primary mb-4">
                    {event.dateTime}
                  </p>

                  {/* Venue Name */}
                  <p className="text-lg font-semibold text-text mb-2">
                    {event.venueName}
                  </p>

                  {/* Address */}
                  <p className="text-sm text-primary mb-4">{event.address}</p>

                  {/* Dress Code */}
                  <p className="text-sm text-primary mb-4 font-medium">
                    {event.dressCode}
                  </p>

                  {/* Description */}
                  {/* <p className="text-sm text-primary mb-6 flex-grow">
                    {event.description}
                  </p> */}

                  {/* View on Map Button */}
                  <div className="mt-auto">
                    <MapLink address={event.mapQuery}>
                      <Button
                        variant="outline"
                        className="w-full btn-secondary-hover"
                        aria-label={`View ${event.venueName} on Map`}
                      >
                        View on Map
                      </Button>
                    </MapLink>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
