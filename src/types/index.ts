/**
 * TypeScript type definitions for the wedding site
 */

export interface EventItem {
  id: string;
  title: string;
  dateTime: string;
  venueName: string;
  address: string;
  dressCode: string;
  description: string;
  mapLink: string;
  imageUrl: string;
}

export interface StoryItem {
  id: string;
  title: string;
  year: string;
  description: string;
  imageUrl: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
  size?: 'small' | 'large';
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  avatar: string;
}

export interface SiteConfig {
  coupleName: string;
  weddingDate: string;
  venue: string;
  events: EventItem[];
  storyItems: StoryItem[];
  galleryItems: GalleryItem[];
  testimonials: Testimonial[];
  rsvpUrl: string;
  registryUrl: string;
}
