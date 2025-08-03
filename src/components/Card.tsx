import React from 'react';
import { cn } from '../lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('bg-white rounded-lg shadow p-6', className)} {...props} />
));
Card.displayName = 'Card';

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('mb-4', className)} {...props} />
));
CardHeader.displayName = 'CardHeader';

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}
export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn('text-xl font-semibold', className)} {...props} />
));
CardTitle.displayName = 'CardTitle';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary';
}
export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(({ className, variant = 'primary', ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      'inline-block px-2 py-1 rounded text-xs font-medium',
      variant === 'primary' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800',
      className
    )}
    {...props}
  />
));
Badge.displayName = 'Badge';

export default Card;
