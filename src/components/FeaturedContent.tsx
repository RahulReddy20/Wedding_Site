'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteConfig } from '@/lib/siteConfig';
import { GalleryItem } from '@/types';
import usePrefersReducedMotion from '@/lib/usePrefersReducedMotion';
import OptimizedImage from './ui/OptimizedImage';
import Button from './ui/Button';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FeaturedContent() {
  const galleryItems = siteConfig.galleryItems;
  const prefersReduced = usePrefersReducedMotion();

  const featuredSectionRef = useRef<HTMLDivElement>(null);
  const featuredHeadingRef = useRef<HTMLHeadingElement>(null);
  const featuredCardRef = useRef<HTMLDivElement>(null);
  const galleryTilesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    if (prefersReduced || isMobile) {
      return; // Skip complex animations on mobile or if user prefers reduced motion
    }

    const ctx = gsap.context(() => {
      // Featured venues heading animation
      gsap.fromTo(
        featuredHeadingRef.current,
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
            trigger: featuredHeadingRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Featured venue card animation
      gsap.fromTo(
        featuredCardRef.current,
        {
          opacity: 0,
          y: 40,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: featuredCardRef.current,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Gallery tiles animation
      gsap.fromTo(
        galleryTilesRef.current,
        {
          opacity: 0,
          y: 30,
          x: 20,
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: galleryTilesRef.current,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, featuredSectionRef);

    return () => ctx.revert(); // Cleanup animations
  }, [prefersReduced]);

  return (
    <div
      ref={featuredSectionRef}
      className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
    >
      {/* Left Column - Featured Gallery Item (65% width) */}
      <div className="lg:col-span-2">
        <div className="mb-8">
          <h2
            ref={featuredHeadingRef}
            className="text-3xl md:text-4xl font-serif font-bold mb-6 text-text"
          >
            Gallery
          </h2>

          {/* Large Featured Gallery Card */}
          <div
            ref={featuredCardRef}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
          >
            <div className="relative h-64 md:h-80">
              <OptimizedImage
                src={
                  galleryItems.find((item) => item.size === 'large')
                    ?.imageUrl || galleryItems[0].imageUrl
                }
                alt={
                  galleryItems.find((item) => item.size === 'large')?.title ||
                  galleryItems[0].title
                }
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 65vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            <div className="p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3 text-text">
                {galleryItems.find((item) => item.size === 'large')?.title ||
                  galleryItems[0].title}
              </h3>
              <p className="text-muted mb-4 text-lg leading-relaxed">
                Capturing the beauty and joy of our special day.
              </p>
              <Button
                variant="outline"
                className="inline-flex items-center"
                aria-label="View gallery"
              >
                View Gallery
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Gallery Tiles (35% width) */}
      <div ref={galleryTilesRef} className="lg:col-span-1 relative">
        {/* Hand-drawn accent line SVG */}
        <svg
          className="absolute -top-4 -right-4 w-24 h-24 text-primary/20 pointer-events-none"
          viewBox="0 0 100 100"
          fill="none"
          aria-hidden="true"
          role="presentation"
        >
          <path
            d="M10,20 Q30,5 50,25 T90,15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            className="opacity-60"
          />
        </svg>

        <div className="space-y-6">
          {/* Small Rounded Tiles (2x2 grid) */}
          <div className="grid grid-cols-2 gap-3">
            {galleryItems
              .filter((item) => item.size === 'small')
              .slice(0, 4)
              .map((tile: GalleryItem) => (
                <div
                  key={tile.id}
                  className="group relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <OptimizedImage
                    src={tile.imageUrl}
                    alt={tile.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 17.5vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-white text-xs font-medium truncate">
                      {tile.title}
                    </p>
                  </div>
                </div>
              ))}
          </div>

          {/* Larger Rectangular Tiles */}
          <div className="space-y-4">
            {galleryItems
              .filter((item) => item.size === 'large')
              .slice(0, 2)
              .map((tile: GalleryItem) => (
                <div
                  key={`large-${tile.id}`}
                  className="group relative h-24 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <OptimizedImage
                    src={tile.imageUrl}
                    alt={tile.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 17.5vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <h3 className="text-white font-medium text-sm">
                      {tile.title}
                    </h3>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
