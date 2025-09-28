import { siteConfig } from '@/lib/siteConfig';
import Button from './ui/Button';
import Card from './ui/Card';

export default function Rsvp() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-text">
          Kindly Respond
        </h2>
        <Card className="p-8">
          <p className="text-lg text-muted mb-8">
            We can't wait to celebrate with you! Please let us know if you'll be
            joining us for our special day.
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => window.open(siteConfig.rsvpUrl, '_blank')}
          >
            RSVP Now
          </Button>
        </Card>
      </div>
    </section>
  );
}
