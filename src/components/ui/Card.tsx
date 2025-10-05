import { ReactNode, forwardRef } from 'react';
import { clsx } from 'clsx';
import OptimizedImage from './OptimizedImage';

interface CardProps {
  children: ReactNode;
  className?: string;
  imageHeader?: {
    src: string;
    alt: string;
    height?: string;
  };
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, imageHeader }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'bg-card backdrop-blur-lg rounded-2xl shadow-sm border border-gray-100 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2',
          className
        )}
      >
        {imageHeader && (
          <div
            className="relative overflow-hidden rounded-t-2xl"
            style={{ height: imageHeader.height || '200px' }}
          >
            <OptimizedImage
              src={imageHeader.src}
              alt={imageHeader.alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )}
        <div className="p-6">{children}</div>
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
