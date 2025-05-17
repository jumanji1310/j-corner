"use client";

import { useState, useRef, useEffect } from "react";
import SortControls from "@/components/video/SortControls";
import VideoCarousel from "@/components/video/VideoCarousel";
import VideoNavigation from "@/components/video/VideoNavigation";
import { Video, SortOption } from "@/types/videoTypes";

interface VideoCarouselProps {
  videos: Video[];
}

export default function VideoPage({ videos }: VideoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [sortBy, setSortBy] = useState<SortOption>("default");

  const nextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    );
  };

  // Toggle sort function
  const toggleSort = (type: "title" | "date") => {
    setSortBy((current) => {
      if (current === `${type}-asc`) return `${type}-desc` as SortOption;
      if (current === `${type}-desc`) return `${type}-asc` as SortOption;
      return `${type}-asc` as SortOption;
    });
  };

  // Reset video state when changing videos
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  }, [currentIndex]);

  // Add this function to get sorted videos
  const getSortedVideos = () => {
    if (sortBy === "default") return videos;

    return [...videos].sort((a, b) => {
      if (sortBy === "title-asc") {
        return a.title.localeCompare(b.title);
      } else if (sortBy === "title-desc") {
        return b.title.localeCompare(a.title);
      } else if (sortBy === "date-asc") {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      } else if (sortBy === "date-desc") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return 0;
    });
  };

  // Get the sorted videos to use in rendering
  const sortedVideos = getSortedVideos();
  const currentVideo = sortedVideos[currentIndex];

  return (
    <div className="bg-background dark:bg-dark-background text-text dark:text-dark-text p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4 rounded-lg">
        {/* Left side - Video container */}
        <div className="lg:col-span-2 flex flex-col h-[85vh]">
          <div className="relative bg-primary/20 dark:bg-dark-primary/20 rounded-lg overflow-hidden grow border border-primary dark:border-dark-primary">
            <video
              ref={videoRef}
              src={currentVideo?.url}
              className="object-contain w-full h-full"
              poster={currentVideo?.thumbnail}
              controls
              autoPlay
            />
          </div>

          {/* Video title and navigation controls */}

          <div className="p-4 bg-primary/20 dark:bg-dark-primary/20 mt-4 rounded-lg border border-primary dark:border-dark-primary">
            <VideoNavigation
              video={currentVideo}
              onNext={nextVideo}
              onPrev={prevVideo}
            />
          </div>
        </div>
        {/* Right side - Playlist and controls */}
        <div className="lg:col-span-1 flex flex-col h-[85vh]">
          {/* Sort controls with indicators */}
          <div className="bg-primary/20 dark:bg-dark-primary/20 mb-4 p-4 rounded-lg border border-primary dark:border-dark-primary">
            <SortControls
              sortBy={sortBy}
              onSortDefault={() => setSortBy("default")}
              onToggleSort={toggleSort}
            />
          </div>
          {/* Video thumbnails - vertical carousel */}
          <div className="bg-primary/20 dark:bg-dark-primary/20 grid grid-cols-2 p-4 gap-2 rounded-lg overflow-y-auto border border-primary dark:border-dark-primary">
            <VideoCarousel
              videos={sortedVideos}
              currentVideo={currentVideo}
              onSelectVideo={setCurrentIndex}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
