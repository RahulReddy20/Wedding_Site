'use client';

import { siteConfig } from '@/lib/siteConfig';
import Card from './ui/Card';
import Button from './ui/Button';

export default function Events() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-text">
          Schedule of Events
        </h2>
        <div className="space-y-8">
          {siteConfig.events.map((event) => (
            <Card key={event.id} className="p-8">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-text">
                  {event.title}
                </h3>
                <p className="text-lg text-muted mb-2">{event.date}</p>
                <p className="text-lg text-muted mb-4">{event.time}</p>
                <p className="text-xl font-semibold text-text mb-2">
                  {event.venue}
                </p>
                <p className="text-muted mb-4">{event.address}</p>
                <p className="text-muted mb-6">{event.dressCode}</p>
                <p className="text-base text-muted mb-6 max-w-2xl mx-auto">
                  {event.description}
                </p>
                <Button
                  variant="outline"
                  onClick={() => window.open(event.mapUrl, '_blank')}
                >
                  View on Map
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
