import { siteConfig } from '@/lib/siteConfig';
import Card from './ui/Card';

export default function Story() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-text">
          Our Story
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {siteConfig.storyItems.map((item) => (
            <Card key={item.id} className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-text">{item.title}</h3>
              <p className="text-lg font-semibold text-primary mb-3">
                {item.year}
              </p>
              <p className="text-muted">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
