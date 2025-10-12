import { ReactNode } from 'react';

interface MapLinkProps {
  address: string;
  children: ReactNode;
  className?: string;
}

/**
 * MapLink component that uses direct Google Maps URLs
 * and opens them in a new tab with proper security attributes
 */
export default function MapLink({
  address,
  children,
  className = '',
}: MapLinkProps) {
  // If the address is already a full URL, use it directly
  // Otherwise, create a Google Maps URL from the address
  const googleMapsUrl = address.startsWith('http')
    ? address
    : `https://maps.google.com/?q=${encodeURIComponent(address)}`;

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
