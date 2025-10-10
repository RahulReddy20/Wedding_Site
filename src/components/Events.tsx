'use client';

import { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteConfig } from '@/lib/siteConfig';
import { EventItem } from '@/types';
import usePrefersReducedMotion from '@/lib/usePrefersReducedMotion';
import Card from './ui/Card';
import Button from './ui/Button';
import MapLink from './MapLink';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Events() {
  const eventsSectionRef = useRef<HTMLElement>(null);
  const eventsHeadingRef = useRef<HTMLHeadingElement>(null);
  const eventTilesRef = useRef<HTMLDivElement[]>([]);
  const prefersReduced = usePrefersReducedMotion();
  const searchParams = useSearchParams();

  // Shared sorting function for events
  const sortEventsByDateTime = (events: EventItem[]) => {
    return [...events].sort((a, b) => {
      // Parse dates and times for comparison
      const parseDateTime = (dateTimeStr: string) => {
        // Extract date and time from strings like "November 16, 2025 from 7 PM onwards"
        const match = dateTimeStr.match(
          /(\w+) (\d+), (\d+) (?:at|from) (\d+):?(\d+)?\s*(AM|PM)/i
        );
        if (match) {
          const [, month, day, year, hour, minute = '0', ampm] = match;
          const monthNum = new Date(`${month} 1, 2000`).getMonth();
          let hour24 = parseInt(hour);
          if (ampm.toUpperCase() === 'PM' && hour24 !== 12) hour24 += 12;
          if (ampm.toUpperCase() === 'AM' && hour24 === 12) hour24 = 0;
          return new Date(
            parseInt(year),
            monthNum,
            parseInt(day),
            hour24,
            parseInt(minute)
          );
        }
        // Fallback for events without specific times
        const fallbackMatch = dateTimeStr.match(/(\w+) (\d+), (\d+)/);
        if (fallbackMatch) {
          const [, month, day, year] = fallbackMatch;
          const monthNum = new Date(`${month} 1, 2000`).getMonth();
          return new Date(parseInt(year), monthNum, parseInt(day));
        }
        return new Date(0); // Fallback for unparseable dates
      };

      const dateA = parseDateTime(a.dateTime);
      const dateB = parseDateTime(b.dateTime);
      return dateA.getTime() - dateB.getTime();
    });
  };

  // Filter events based on URL parameters
  const getFilteredEvents = () => {
    const view = searchParams.get('view');

    switch (view) {
      case 'wedding-only':
        // Only wedding ceremony
        return siteConfig.events.filter(
          (event) => event.id === 'wedding-ceremony'
        );

      case 'main-events':
        // Sangeet, haldi, wedding, and reception
        return siteConfig.events.filter((event) =>
          ['sangeet', 'haldi', 'wedding-ceremony', 'reception'].includes(
            event.id
          )
        );

      case 'all-events':
        // All events
        return siteConfig.events;

      default:
        // Default: Only wedding ceremony
        return siteConfig.events.filter(
          (event) => event.id === 'wedding-ceremony'
        );
    }
  };

  const filteredEvents = getFilteredEvents();
  const sortedEvents = sortEventsByDateTime(filteredEvents);

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
              delay: index * 0.15, // Stagger the animations in chronological order
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
              My Wedding
            </h2>
            <p className="text-lg text-muted mb-6">
              A celebration of love and commitment
            </p>
            <div className="max-w-4xl mx-auto">
              <p className="text-base text-muted leading-relaxed mb-4">
                I invite you to join me as I celebrate the union of two souls
                who found each other in this beautiful journey of life. My
                wedding is a reflection of our love story, filled with joy,
                laughter, and the warmth of family and friends.
              </p>
              <p className="text-base text-muted leading-relaxed">
                I&apos;m excited to share this special day with you and create
                memories that will last a lifetime. Your presence would make my
                celebration complete.
              </p>
            </div>
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
            {(() => {
              const view = searchParams.get('view');
              switch (view) {
                case 'wedding-only':
                  return 'Wedding Ceremony';
                case 'main-events':
                  return 'Main Events';
                case 'all-events':
                  return 'All Events';
                default:
                  return 'Events';
              }
            })()}
          </h2>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedEvents.map((event: EventItem, index) => (
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
