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
        <Events />
        {/* <Story /> */}
        <Rsvp />
        {/* <Footer /> */}
      </div>
    </>
  );
}
