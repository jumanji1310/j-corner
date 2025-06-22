"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import SortControlsVideo from "@/components/video/SortControls";
import VideoCarousel from "@/components/video/VideoCarousel";
import VideoNavigation from "@/components/video/VideoNavigation";
import { Video, SortOptionVideo } from "@/types/videoTypes";

interface VideoCarouselProps {
  videos: Video[];
  onLoadingChange?: (isLoading: boolean) => void;
}

export default function VideoPage({
  videos,
  onLoadingChange,
}: VideoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [sortBy, setSortBy] = useState<SortOptionVideo>("dateAdded-desc");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isInitialVideo, setIsInitialVideo] = useState(true);

  // Don't autoplay the first video
  const skipInitialVideo = () => {
    if (videoRef.current && isInitialVideo) {
      videoRef.current.pause();
      setIsInitialVideo(false);
    }
  };

  // Extract unique categories from video URLs
  const categories = useMemo(() => {
    const categorySet = new Set<string>();
    categorySet.add("all"); // Add "all" option

    videos.forEach((video) => {
      // Extract category from URL paths like "XX/videos/category/filename.mp4"
      const urlParts = video.url.split("/");
      const categoryIndex = urlParts.indexOf("videos");

      if (categoryIndex >= 0 && categoryIndex + 1 < urlParts.length) {
        const category = urlParts[categoryIndex + 1];
        if (category) categorySet.add(category);
      }
    });

    return Array.from(categorySet);
  }, [videos]);

  const nextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredVideos.length);
  };

  const prevVideo = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + filteredVideos.length) % filteredVideos.length
    );
  };

  // Toggle sort function
  const toggleSort = (type: "title" | "date" | "dateAdded") => {
    setSortBy((current) => {
      if (current === `${type}-asc`) return `${type}-desc` as SortOptionVideo;
      if (current === `${type}-desc`) return `${type}-asc` as SortOptionVideo;
      return `${type}-asc` as SortOptionVideo;
    });
  };

  // Filter videos by category
  const getFilteredVideos = () => {
    if (selectedCategory === "all") return videos;

    return videos.filter((video) => {
      const urlParts = video.url.split("/");
      const categoryIndex = urlParts.indexOf("videos");

      if (categoryIndex >= 0 && categoryIndex + 1 < urlParts.length) {
        return urlParts[categoryIndex + 1] === selectedCategory;
      }
      return false;
    });
  };

  // Get filtered videos
  const filteredVideos = getFilteredVideos();

  // Sort filtered videos
  const getSortedVideos = () => {
    console.log("Sorting videos by:", sortBy);
    return [...filteredVideos].sort((a, b) => {
      if (sortBy === "title-asc") {
        return a.title.localeCompare(b.title);
      } else if (sortBy === "title-desc") {
        return b.title.localeCompare(a.title);
      } else if (sortBy === "date-asc") {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      } else if (sortBy === "date-desc") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else if (sortBy === "dateAdded-asc") {
        console.log( a.dateAdded, b.dateAdded);
        console.log(new Date(a.dateAdded).getTime(), new Date(b.dateAdded).getTime());
        return new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime();
      } else if (sortBy === "dateAdded-desc") {
        return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
      }
      return 0;
    });
  };

  // Get the sorted videos to use in rendering
  const sortedVideos = getSortedVideos();

  // Reset current index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  // Reset video state when changing videos
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  }, [currentIndex]);

  const currentVideo = sortedVideos[currentIndex];

  return (
    <div className="h-[90vh] bg-background dark:bg-dark-background text-text dark:text-dark-text px-6 pb-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4 rounded-lg">
        {/* Left side - Video container */}
        <div className="lg:col-span-2 flex flex-col h-[85vh]">
          <div className="bg-primary/20 dark:bg-dark-primary/20 rounded-lg overflow-hidden grow border border-primary dark:border-dark-primary shadow-lg/50 shadow-secondary dark:shadow-dark-secondary">
              <video
                ref={videoRef}
                src={currentVideo.url}
                className="object-contain w-full h-full"
                poster={currentVideo.thumbnail}
                controls
                autoPlay
                onLoadedData={() => {
                  if (onLoadingChange) {
                    onLoadingChange(false);
                  }
                  skipInitialVideo();
                }}
              />
          </div>

          {/* Video title and navigation controls */}
            <div className="p-4 bg-primary/20 dark:bg-dark-primary/20 mt-4 rounded-lg border border-primary dark:border-dark-primary shadow-lg/50 shadow-secondary dark:shadow-dark-secondary">
              <VideoNavigation
                video={currentVideo}
                onNext={nextVideo}
                onPrev={prevVideo}
              />
            </div>
        </div>
        {/* Right side - Playlist and controls */}
        <div className="lg:col-span-1 flex flex-col h-[85vh]">
          {/* Category filter dropdown */}
          <div className="bg-primary/20 dark:bg-dark-primary/20 mb-4 p-4 rounded-lg border border-primary dark:border-dark-primary shadow-lg/50 shadow-secondary dark:shadow-dark-secondary">
            <label className="block text-lg font-medium mb-2">Category Filter</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2 rounded-md bg-background dark:bg-dark-background border border-primary dark:border-dark-primary"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === "all" ? "All Categories" : category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Sort controls with indicators */}
          <div className="bg-primary/20 dark:bg-dark-primary/20 mb-4 p-4 rounded-lg border border-primary dark:border-dark-primary shadow-lg/50 shadow-secondary dark:shadow-dark-secondary">
            <SortControlsVideo
              sortBy={sortBy}
              onToggleSort={toggleSort}
            />
          </div>

          {/* Video thumbnails - vertical carousel */}
          <div className="bg-primary/20 dark:bg-dark-primary/20 grid grid-cols-2 p-4 gap-2 rounded-lg overflow-y-auto border border-primary dark:border-dark-primary shadow-lg/50 shadow-secondary dark:shadow-dark-secondary">
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
