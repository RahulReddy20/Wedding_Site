export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  dressCode: string;
  description: string;
  mapUrl: string;
}

export interface StoryItem {
  id: string;
  title: string;
  year: string;
  description: string;
  image: string;
  alt: string;
}

export interface GalleryTile {
  id: string;
  title: string;
  image: string;
  alt: string;
  description?: string;
}

export interface FeaturedVenue {
  id: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  location: string;
}

export interface SiteConfig {
  coupleName: string;
  weddingDate: string;
  venue: string;
  events: Event[];
  storyItems: StoryItem[];
  galleryTiles: GalleryTile[];
  featuredVenues: FeaturedVenue[];
  rsvpUrl: string;
}

export const siteConfig: SiteConfig = {
  coupleName: 'Jessica & Michael',
  weddingDate: 'October 26, 2026',
  venue: 'Napa Valley, California',
  events: [
    {
      id: 'welcome-reception',
      title: 'Welcome Reception',
      date: 'October 25, 2026',
      time: '6:00 PM - 9:00 PM',
      venue: 'The Estate Yountville',
      address: '6475 Washington St, Yountville, CA 94599',
      dressCode: 'Cocktail Attire',
      description:
        'Join us for an intimate welcome reception to kick off our wedding weekend.',
      mapUrl: 'https://maps.google.com/?q=The+Estate+Yountville+Yountville+CA',
    },
    {
      id: 'ceremony',
      title: 'The Ceremony',
      date: 'October 26, 2026',
      time: '4:00 PM - 5:00 PM',
      venue: 'Castello di Amorosa',
      address: '4045 St Helena Hwy, Calistoga, CA 94515',
      dressCode: 'Black-Tie Optional',
      description:
        'Our wedding ceremony will take place in the beautiful castle courtyard.',
      mapUrl: 'https://maps.google.com/?q=Castello+di+Amorosa+Calistoga+CA',
    },
    {
      id: 'reception',
      title: 'The Celebration',
      date: 'October 26, 2026',
      time: '6:00 PM - 11:00 PM',
      venue: 'Castello di Amorosa',
      address: '4045 St Helena Hwy, Calistoga, CA 94515',
      dressCode: 'Black-Tie Optional',
      description: 'Dinner, dancing, and celebration in the grand ballroom.',
      mapUrl: 'https://maps.google.com/?q=Castello+di+Amorosa+Calistoga+CA',
    },
  ],
  storyItems: [
    {
      id: 'how-we-met',
      title: 'How We Met',
      year: '2019',
      description:
        'We first met at a coffee shop in San Francisco during a rainy afternoon.',
      image: '/images/story/met.jpg',
      alt: 'Jessica and Michael meeting at a coffee shop',
    },
    {
      id: 'engagement',
      title: 'The Engagement',
      year: '2024',
      description:
        'Michael proposed during a sunset hike in Big Sur with the Pacific Ocean as our backdrop.',
      image: '/images/story/engagement.jpg',
      alt: 'Engagement photo at Big Sur',
    },
    {
      id: 'favorite-adventure',
      title: 'Our Favorite Adventure',
      year: '2023',
      description:
        'Our trip to Italy where we fell in love with the country and decided to have our wedding there.',
      image: '/images/story/italy.jpg',
      alt: 'Jessica and Michael in Italy',
    },
  ],
  galleryTiles: [
    {
      id: 'photography',
      title: 'Photography',
      image: '/images/gallery/photography.jpg',
      alt: 'Wedding photography service',
      description: 'Capturing your special moments',
    },
    {
      id: 'ceremony',
      title: 'Ceremony',
      image: '/images/gallery/ceremony.jpg',
      alt: 'Wedding ceremony service',
      description: 'Beautiful ceremony planning',
    },
    {
      id: 'wedding-design',
      title: 'Wedding Design',
      image: '/images/gallery/design.jpg',
      alt: 'Wedding design service',
      description: 'Elegant wedding design',
    },
  ],
  featuredVenues: [
    {
      id: 'villa-balbianello',
      name: 'Villa Balbianello',
      description:
        'A stunning lakeside villa with breathtaking views of Lake Como.',
      image: '/images/venues/villa-balbianello.jpg',
      alt: 'Villa Balbianello on Lake Como',
      location: 'Lake Como, Italy',
    },
  ],
  rsvpUrl: 'https://forms.google.com/rsvp',
};
