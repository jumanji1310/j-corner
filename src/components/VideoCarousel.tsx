"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "./Chevron";

type Video = {
  id: string;
  title: string;
  url: string;
  thumbnail?: string;
};

interface VideoCarouselProps {
  videos: Video[];
}

export default function VideoCarousel({ videos }: VideoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const nextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    setIsPlaying(false);
  };

  const prevVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Reset video state when changing videos
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Video container */}
      <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
        <video
          ref={videoRef}
          src={videos[currentIndex].url}
          className="w-full h-full object-contain"
          poster={videos[currentIndex].thumbnail}
          controls
          autoPlay
        />
      </div>

      {/* Navigation controls */}
      <div className="flex items-center justify-between mt-4">
        <button 
          onClick={prevVideo}
          className="p-3 rounded-full bg-black text-white hover:bg-gray-400"
          aria-label="Previous video"
        >
          <ChevronLeft/>
        </button>

        <h3 className="text-lg font-medium">{videos[currentIndex].title}</h3>

        <button 
          onClick={nextVideo}
          className="p-3 rounded-full bg-black text-white hover:bg-gray-400"
          aria-label="Next video"
        >
          <ChevronRight/>
        </button>
      </div>

      {/* Video thumbnails */}
      <div className="mt-4 flex space-x-2 overflow-x-auto pb-2">
        {videos.map((video, index) => (
          <div 
            key={video.id}
            onClick={() => setCurrentIndex(index)}
            className={`relative flex-shrink-0 w-24 h-16 cursor-pointer rounded overflow-hidden ${
              index === currentIndex ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            {video.thumbnail ? (
              <img 
                src={video.thumbnail} 
                alt={video.title} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-700 flex items-center justify-center text-white text-xs">
                {video.title}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}