"use client";
import { useState } from 'react';

export default function PolaroidCard({
  src,
  caption,
  onImageLoaded,
}: {
  src: string;
  caption: string;
  onImageLoaded?: () => void;
}) {
  // Generate random rotation between -5 and 5 degrees
  const randomRotation = Math.floor(Math.random() * 10) - 5;
  
  // Track hover state
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      style={{ 
        transform: isHovered ? 'rotate(0deg) scale(1.5)' : `rotate(${randomRotation}deg)`,
        transition: 'all 0.35s'
      }}
      className="m-4 shadow-lg/50 grayscale hover:filter-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-2 bg-white">
        <img 
          src={src} 
          className="h-auto max-w-full" 
          onLoad={() => onImageLoaded && onImageLoaded()}
          alt={caption}
        />
        <div className="pt-2 text-center font-[cursive]">{caption}</div>
      </div>
    </div>
  );
}
