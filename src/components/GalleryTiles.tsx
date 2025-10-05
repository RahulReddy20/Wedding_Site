import Card from './ui/Card';
import OptimizedImage from './ui/OptimizedImage';
import ScribbleAccent from './ScribbleAccent';
import { GalleryItem } from '@/types';

interface GalleryTilesProps {
  tiles: GalleryItem[];
  className?: string;
}

export default function GalleryTiles({
  tiles,
  className = '',
}: GalleryTilesProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {tiles.map((tile: GalleryItem, index) => (
        <Card key={tile.id} className="p-4 relative overflow-hidden group">
          {/* Scribble accent behind content */}
          <ScribbleAccent
            variant={index % 2 === 0 ? 'curved' : 'wave'}
            color="var(--primary)"
            opacity={0.15}
            className="group-hover:opacity-25 transition-opacity duration-300"
          />

          <div className="flex items-center space-x-3 relative z-10">
            <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
              <OptimizedImage
                src={tile.imageUrl}
                alt={tile.title}
                width={48}
                height={48}
                className="w-full h-full object-cover"
                sizes="48px"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-text truncate">
                {tile.title}
              </h3>
              {tile.size && (
                <p className="text-xs text-muted mt-1 capitalize">
                  {tile.size}
                </p>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
