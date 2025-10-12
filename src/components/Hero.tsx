'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import usePrefersReducedMotion from '@/lib/usePrefersReducedMotion';
import { siteConfig } from '@/lib/siteConfig';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface HeroProps {
  backgroundImageUrl?: string;
}

export default function Hero({ backgroundImageUrl }: HeroProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const heroRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const curvedDividerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  // Determine background image based on URL path
  const getBackgroundImage = () => {
    if (backgroundImageUrl) {
      return backgroundImageUrl; // Use explicitly passed image
    }

    // Auto-detect based on pathname
    if (pathname === '/rh') {
      return '/images/hero/hero2.jpg';
    }

    // Default to original image for home page and other routes
    return '/images/hero/italian-venue.jpg';
  };

  const currentBackgroundImage = getBackgroundImage();

  // Get the appropriate date based on view parameter
  const getDisplayDate = () => {
    const view = searchParams.get('view');

    switch (view) {
      case 'sangeet':
        // Find the sangeet event and return its date
        const sangeetEvent = siteConfig.events.find(
          (event) => event.id === 'sangeet'
        );
        return sangeetEvent
          ? sangeetEvent.dateTime.split(' ').slice(0, 3).join(' ').toUpperCase()
          : 'NOVEMBER 16, 2025';
      case 'haldi':
        const haldiEvent = siteConfig.events.find(
          (event) => event.id === 'haldi'
        );
        return haldiEvent
          ? haldiEvent.dateTime.split(' ').slice(0, 3).join(' ').toUpperCase()
          : 'NOVEMBER 24, 2025';
      case 'wedding-ceremony':
        const weddingEvent = siteConfig.events.find(
          (event) => event.id === 'wedding-ceremony'
        );
        return weddingEvent
          ? weddingEvent.dateTime.split(' ').slice(0, 3).join(' ').toUpperCase()
          : 'NOVEMBER 26, 2025';
      case 'reception':
        const receptionEvent = siteConfig.events.find(
          (event) => event.id === 'reception'
        );
        return receptionEvent
          ? receptionEvent.dateTime
              .split(' ')
              .slice(0, 3)
              .join(' ')
              .toUpperCase()
          : 'NOVEMBER 30, 2025';
      default:
        return 'NOVEMBER 26, 2025'; // Default wedding date
    }
  };

  useEffect(() => {
    if (prefersReduced) {
      return; // Skip animations if user prefers reduced motion
    }

    const ctx = gsap.context(() => {
      // Initial load animations - gentle fade-up with refined easing
      const tl = gsap.timeline({ delay: 0.2 });

      // Headline fade-up with subtle y movement (refined editorial feel)
      tl.fromTo(
        headlineRef.current,
        {
          opacity: 0,
          y: 10,
          ease: 'power2.out', // Smooth, refined easing for editorial feel
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
        }
      )
        // Paragraph follows with slight delay for layered reveal
        .fromTo(
          paragraphRef.current,
          {
            opacity: 0,
            y: 10,
            ease: 'power2.out',
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
          },
          '-=0.3' // Start slightly before headline finishes
        )
        // Scroll indicator appears last
        .fromTo(
          scrollIndicatorRef.current,
          {
            opacity: 0,
            y: 10,
            ease: 'power2.out',
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
          },
          '-=0.2'
        );

      // Scroll-triggered animations - subtle hero transform and curved divider reveal
      if (backgroundRef.current && curvedDividerRef.current) {
        // Hero background subtle scale down on scroll (soft crop effect)
        gsap.to(backgroundRef.current, {
          scale: 0.98, // Gentle scale down for soft crop
          ease: 'power2.out',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.3, // Smooth scrubbing for refined feel
            onUpdate: (self) => {
              // Additional parallax effect - subtle 8-12px movement
              const progress = self.progress;
              const parallaxOffset = progress * 10; // 10px max parallax
              gsap.set(backgroundRef.current, {
                y: parallaxOffset,
              });
            },
          },
        });

        // Curved divider reveal animation - soft entrance
        gsap.fromTo(
          curvedDividerRef.current,
          {
            y: 20, // Start slightly below
            opacity: 0,
            ease: 'power2.out',
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'bottom center', // Start revealing when hero bottom hits center
              end: 'bottom top',
              scrub: 0.5, // Smooth reveal timing
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, heroRef);

    return () => ctx.revert(); // Cleanup animations
  }, [prefersReduced]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Hero Background Image with GSAP-controlled animations */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${currentBackgroundImage})` }}
        role="img"
        aria-label="Beautiful Italian wedding venue landscape"
        aria-hidden="true"
      />

      {/* Dynamic Overlay with Gradient Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Animated Particles/Stars Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-twinkle" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/30 rounded-full animate-twinkle-delayed" />
        <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-white/25 rounded-full animate-twinkle-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white/20 rounded-full animate-twinkle" />
      </div>

      {/* Hero Content with GSAP-controlled animations */}
      <div
        className="relative z-10 text-center px-6 max-w-5xl pt-4 md:pt-8 lg:pt-12"
        style={{ marginTop: '-85px' }}
      >
        <div className="relative -top-10">
          <h1
            ref={headlineRef}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4 text-white leading-tight"
            style={{
              fontFamily: '"Alex Brush", cursive',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              letterSpacing: '0.02em',
            }}
          >
            Harsha & Rishika
          </h1>

          {/* Horizontal lines and pine tree icon */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-px bg-white"></div>
            <div className="mx-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.3))' }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 2l3 6h6l-5 4 2 6-6-4-6 4 2-6-5-4h6l3-6z"
                />
              </svg>
            </div>
            <div className="w-16 h-px bg-white"></div>
          </div>

          <p
            ref={paragraphRef}
            className="text-2xl md:text-3xl text-white mb-16 font-bold"
            style={{
              fontFamily: '"Baloo 2", system-ui, -apple-system, sans-serif',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              transform: 'perspective(100px) rotateX(5deg)',
              letterSpacing: '0.05em',
            }}
          >
            {getDisplayDate()}
          </p>
        </div>

        {/* Scroll indicator with GSAP animation */}
        {/* <div
          ref={scrollIndicatorRef}
          className="flex flex-col items-center space-y-3"
        >
          <div className="w-8 h-8 border-2 border-white/70 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent">
            <svg
              className="w-4 h-4 text-white/70 animate-bounce motion-reduce:animate-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
          <p className="text-sm text-white/80 font-medium tracking-wide uppercase">
            Scroll to Explore
          </p>
        </div> */}
      </div>

      {/* Curved Divider with GSAP scroll reveal */}
      {/* <div ref={curvedDividerRef} className="absolute bottom-0 left-0 right-0">
        <CurvedDivider />
      </div> */}
    </section>
  );
}
