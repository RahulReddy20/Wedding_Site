interface ScribbleAccentProps {
  className?: string;
  variant?: 'curved' | 'zigzag' | 'wave' | 'dots';
  color?: string;
  opacity?: number;
}

/**
 * ScribbleAccent component - Decorative SVG accent for gallery tiles
 * Provides various hand-drawn style accents that can be positioned behind content
 */
export default function ScribbleAccent({
  className = '',
  variant = 'curved',
  color = 'currentColor',
  opacity = 0.1,
}: ScribbleAccentProps) {
  const getScribblePath = () => {
    switch (variant) {
      case 'curved':
        return 'M10,20 Q30,10 50,20 T90,20';
      case 'zigzag':
        return 'M10,20 L30,10 L50,20 L70,10 L90,20';
      case 'wave':
        return 'M10,20 C20,10 30,30 40,20 C50,10 60,30 70,20 C80,10 90,30 100,20';
      case 'dots':
        return 'M10,20 L15,20 M25,20 L30,20 M40,20 L45,20 M55,20 L60,20 M70,20 L75,20 M85,20 L90,20';
      default:
        return 'M10,20 Q30,10 50,20 T90,20';
    }
  };

  return (
    <svg
      className={`absolute inset-0 pointer-events-none ${className}`}
      viewBox="0 0 100 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="presentation"
    >
      <path
        d={getScribblePath()}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={opacity}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
