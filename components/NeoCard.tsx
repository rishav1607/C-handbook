import React from 'react';

interface NeoCardProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
}

export const NeoCard: React.FC<NeoCardProps> = ({ 
  children, 
  className = "", 
  bgColor = "bg-white" 
}) => {
  return (
    <div className={`${bgColor} dark:bg-[#1e1e1e] border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] dark:shadow-[8px_8px_0px_0px_#4a4a4a] p-6 ${className}`}>
      {children}
    </div>
  );
};