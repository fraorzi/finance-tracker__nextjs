import type { BoxIcon } from 'lucide-react';
import type { PropsWithChildren } from 'react';
import React from 'react';

interface ButtonProps extends PropsWithChildren {
  className?: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost' | 'icon';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  icon?: typeof BoxIcon;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  className = '',
  fullWidth = false,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-acid focus:ring-offset-2 focus:ring-offset-void disabled:opacity-50 disabled:cursor-not-allowed';
  const variants = {
    primary: 'bg-acid text-void hover:bg-white hover:text-void border border-acid',
    secondary: 'bg-transparent text-stark border border-stark hover:bg-stark hover:text-void',
    danger: 'bg-coral text-white hover:bg-red-600 border border-coral',
    ghost: 'bg-transparent text-stark hover:bg-void-light hover:text-acid',
    icon: 'bg-void-light text-stark hover:bg-acid hover:text-void border border-void-lighter',
  };
  const sizes = {
    sm: 'h-8 px-3 text-xs',
    md: 'h-10 px-4 text-sm',
    lg: 'h-12 px-6 text-base',
    icon: 'h-10 w-10 p-2',
  };
  const widthClass = fullWidth ? 'w-full' : '';

  const hasChildren = React.Children.count(children) > 0;

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {Icon && <Icon className={`h-4 w-4 ${hasChildren && 'mr-2'}`} />}
      {children}
    </button>
  );
}
