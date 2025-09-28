import Card from './ui/Card';

interface GalleryTile {
  id: string;
  title: string;
  image: string;
  alt: string;
  description?: string;
}

interface GalleryTilesProps {
  tiles: GalleryTile[];
  className?: string;
}

export default function GalleryTiles({ tiles, className = '' }: GalleryTilesProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {tiles.map((tile) => (
        <Card key={tile.id} className="p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={tile.image}
                alt={tile.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-text truncate">{tile.title}</h3>
              {tile.description && (
                <p className="text-xs text-muted mt-1">{tile.description}</p>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
