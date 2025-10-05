import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = 'primary', size = 'md', children, ...props },
    ref
  ) => {
    const baseClasses =
      'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2';

    const variants = {
      primary:
        'bg-primary text-white hover:bg-secondary hover:border-secondary shadow-sm hover:shadow-md hover:ring-2 hover:ring-secondary/30 transition-all duration-200',
      outline:
        'border border-muted-text text-muted-text hover:bg-primary hover:border-primary hover:text-white hover:ring-2 hover:ring-primary/20 transition-all duration-200',
      ghost:
        'text-muted-text hover:bg-primary/10 hover:text-primary transition-all duration-200',
    };

    const sizes = {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4 py-2',
      lg: 'h-12 px-6 text-lg',
    };

    return (
      <button
        className={clsx(baseClasses, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
