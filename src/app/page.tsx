import { Suspense } from 'react';
import Hero from '@/components/Hero';
import Events from '@/components/Events';
import Story from '@/components/Story';
import Rsvp from '@/components/Rsvp';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero backgroundImageUrl="/images/hero/italian-venue.jpg" />
      <div className="bg-main-sections">
        <Suspense
          fallback={
            <div className="py-16 px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center">Loading events...</div>
              </div>
            </div>
          }
        >
          <Events />
        </Suspense>
        {/* <Story /> */}
        <Rsvp />
        {/* <Footer /> */}
      </div>
    </>
  );
}
