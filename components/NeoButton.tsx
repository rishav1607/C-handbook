import React from 'react';

interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const NeoButton: React.FC<NeoButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = "",
  ...props 
}) => {
  const baseClasses = "px-6 py-3 font-bold border-4 border-black dark:border-white transition-all active:translate-x-1 active:translate-y-1 active:shadow-none";
  const variants = {
    primary: "bg-[#FF6B6B] text-black shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] dark:shadow-[4px_4px_0px_0px_#fff] hover:bg-[#ff8585]",
    secondary: "bg-white dark:bg-[#2a2a2a] text-black dark:text-white shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] dark:shadow-[4px_4px_0px_0px_#fff] hover:bg-gray-50 dark:hover:bg-[#333]"
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};