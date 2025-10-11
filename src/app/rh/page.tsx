import { Suspense } from 'react';
import Hero from '@/components/Hero';
import Events from '@/components/Events';
import Rsvp from '@/components/Rsvp';

export default function RhPage() {
  return (
    <>
      <Hero />
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
        <Suspense
          fallback={
            <div className="py-16 px-6">
              <div className="max-w-4xl mx-auto text-center">
                <div className="text-center">Loading RSVP...</div>
              </div>
            </div>
          }
        >
          <Rsvp />
        </Suspense>
        {/* <Footer /> */}
      </div>
    </>
  );
}

