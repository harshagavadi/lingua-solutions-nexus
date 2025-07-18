import React from 'react';
import { Globe } from 'lucide-react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ className = '', size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl'
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="relative">
        {/* Background circle with gradient */}
        <div className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-lg`}>
          <Globe className={`${size === 'sm' ? 'h-3 w-3' : size === 'md' ? 'h-4 w-4' : 'h-6 w-6'} text-white`} />
        </div>
        {/* Decorative ring */}
        <div className={`absolute inset-0 ${sizeClasses[size]} rounded-full border-2 border-blue-200 animate-pulse`}></div>
      </div>
      
      <div className="flex flex-col">
        <span className={`${textSizeClasses[size]} font-bold text-white`}>
          LinguaSolutions
        </span>
        {size !== 'sm' && (
          <span className="text-xs text-white/70 font-medium tracking-wide">
            Professional Translation Services
          </span>
        )}
      </div>
    </div>
  );
};

export default Logo;
