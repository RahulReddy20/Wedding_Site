import { ReactNode } from 'react';

interface MapLinkProps {
  address: string;
  children: ReactNode;
  className?: string;
}

/**
 * MapLink component that creates a Google Maps URL from an address
 * and opens it in a new tab with proper security attributes
 */
export default function MapLink({
  address,
  children,
  className = '',
}: MapLinkProps) {
  const googleMapsUrl = `https://maps.google.com/?q=${encodeURIComponent(address)}`;

  return (
    <a
      href={googleMapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${className}`}
    >
      {children}
    </a>
  );
}
