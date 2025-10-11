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

// Text configuration for different text views
const textViewConfig = {
  ceremony: {
    title: 'Wedding Ceremony',
    subtitle: 'A sacred union of two hearts',
    content: {
      paragraph1:
        'We invite you to witness the sacred union of our beloved son Harsha and his beautiful bride Rishika. We would be honored to have you join us in celebrating this blessed occasion.',
      paragraph2:
        'Your presence would make our celebration complete and bring joy to our hearts as we witness this beautiful moment in our family.',
    },
  },
  main: {
    title: 'Main Events',
    subtitle: 'The most important celebrations',
    content: {
      paragraph1:
        "We are delighted to invite you to the main celebrations of our son Harsha's wedding. We would be honored to have you join us for the most important events of our family celebration.",
      paragraph2:
        'Your presence at these special moments would mean the world to us and make our celebrations truly memorable.',
    },
  },
  'wedding-reception': {
    title: 'Wedding & Reception',
    subtitle: 'Wedding ceremony and reception',
    content: {
      paragraph1:
        'We cordially invite you to the wedding ceremony and reception of our beloved son Harsha. We would be honored to have you witness this sacred union and celebrate with us.',
      paragraph2:
        'Your blessings and presence would make this day even more special for our family.',
    },
  },
  celebration: {
    title: 'Sangeet Celebration',
    subtitle: 'An evening of music and dance',
    content: {
      paragraph1:
        "We invite you to join us for an evening of music, dance, and celebration as we prepare for our son Harsha's wedding. We would be honored to have you join us for the Sangeet ceremony.",
      paragraph2:
        'Come and enjoy an evening filled with joy, laughter, and traditional celebrations with our family.',
    },
  },
  traditional: {
    title: 'Traditional Ceremonies',
    subtitle: 'Traditional pre-wedding ceremonies',
    content: {
      paragraph1:
        'We invite you to join us for the traditional pre-wedding ceremonies of our son Harsha. We would be honored to have you witness these beautiful cultural traditions.',
      paragraph2:
        'Your presence at these intimate family ceremonies would be a great honor for us.',
    },
  },
  complete: {
    title: 'All Wedding Events',
    subtitle: 'Complete wedding celebrations',
    content: {
      paragraph1:
        "We are overjoyed to invite you to all the celebrations of our son Harsha's wedding. We would be honored to have you join us for the complete wedding festivities.",
      paragraph2:
        'Your presence throughout our celebrations would make this special time even more meaningful for our family.',
    },
  },
  default: {
    title: 'My Wedding',
    subtitle: 'A celebration of love and commitment',
    content: {
      paragraph1:
        'We invite you to join us as we celebrate the union of our beloved son Harsha and his beautiful bride Rishika. We would be honored to have you witness this blessed occasion.',
      paragraph2:
        'We are excited to share this special day with you and create memories that will last a lifetime. Your presence would make our celebration complete.',
    },
  },
};

export default function Events() {
  const eventsSectionRef = useRef<HTMLElement>(null);
  const eventsHeadingRef = useRef<HTMLHeadingElement>(null);
  const eventTilesRef = useRef<HTMLDivElement[]>([]);
  const prefersReduced = usePrefersReducedMotion();
  const searchParams = useSearchParams();

  // Helper function to get text configuration based on text view parameter
  const getTextConfig = () => {
    const textView = searchParams.get('text') || searchParams.get('view');
    return (
      textViewConfig[textView as keyof typeof textViewConfig] ||
      textViewConfig.default
    );
  };

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
      case 'wed-reception':
        //wedding, and reception
        return siteConfig.events.filter((event) =>
          ['wedding-ceremony', 'reception'].includes(event.id)
        );
      case 'sangeet':
        // Sangeet
        return siteConfig.events.filter((event) =>
          ['sangeet'].includes(event.id)
        );
      case 'side-events':
        // Sangeet
        return siteConfig.events.filter((event) =>
          ['pellikoduku', 'gajula-veduka', 'mehandi', 'haldi'].includes(
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
              {getTextConfig().title}
            </h2>
            <p className="text-lg text-muted mb-6">
              {getTextConfig().subtitle}
            </p>
            <div className="max-w-4xl mx-auto">
              <p className="text-base text-muted leading-relaxed mb-4">
                {getTextConfig().content.paragraph1}
              </p>
              <p className="text-base text-muted leading-relaxed">
                {getTextConfig().content.paragraph2}
              </p>
            </div>
          </div>
        </div>

        {/* Featured Content Section */}
        {/* <FeaturedContent /> */}

        {/* Events Section */}
        <div>
          {/* <h2
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
          </h2> */}

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
                  alt: `Join us for ${event.title} at ${event.venueName} - Celebrating our son Harsha's wedding`,
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
