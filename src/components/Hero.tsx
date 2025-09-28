import { siteConfig } from '@/lib/siteConfig';
import Button from './ui/Button';
import CurvedDivider from './CurvedDivider';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="text-center px-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-text">
          {siteConfig.coupleName}
        </h1>
        <p className="text-xl md:text-2xl text-muted mb-4">
          {siteConfig.weddingDate}
        </p>
        <p className="text-lg md:text-xl text-muted mb-8">{siteConfig.venue}</p>
        <p className="text-base text-muted mb-8 max-w-2xl mx-auto">
          Scroll to Begin Our Journey
        </p>
        <Button variant="primary" size="lg">
          View Our Story
        </Button>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <CurvedDivider />
      </div>
    </section>
  );
}
