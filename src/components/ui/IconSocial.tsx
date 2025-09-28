import { ReactNode } from 'react';
import { clsx } from 'clsx';

interface IconSocialProps {
  children: ReactNode;
  href: string;
  ariaLabel: string;
  className?: string;
}

export default function IconSocial({ children, href, ariaLabel, className }: IconSocialProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={clsx(
        'inline-flex items-center justify-center w-8 h-8 rounded-full text-muted hover:text-primary hover:bg-primary/10 transition-colors',
        className
      )}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
