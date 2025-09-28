import { ReactNode } from 'react';
import { clsx } from 'clsx';

interface CardProps {
  children: ReactNode;
  className?: string;
  imageHeader?: {
    src: string;
    alt: string;
    height?: string;
  };
}

export default function Card({ children, className, imageHeader }: CardProps) {
  return (
    <div className={clsx('bg-card-bg rounded-2xl shadow-sm border border-gray-100 overflow-hidden', className)}>
      {imageHeader && (
        <div className="relative" style={{ height: imageHeader.height || '200px' }}>
          <img
            src={imageHeader.src}
            alt={imageHeader.alt}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
}
