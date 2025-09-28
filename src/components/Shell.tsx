import { ReactNode } from 'react';

interface ShellProps {
  children: ReactNode;
  className?: string;
}

export default function Shell({ children, className = '' }: ShellProps) {
  return <div className={`site-shell ${className}`}>{children}</div>;
}
