"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "./Chevron";
import Thumbnail from "@/components/VideoThumbnail";

type Video = {
  id: string;
  title: string;
  date: string;
  url: string;
  thumbnail: string;
};

interface VideoCarouselProps {
  videos: Video[];
}

type SortOption =
  | "default"
  | "title-asc"
  | "title-desc"
  | "date-asc"
  | "date-desc";

export default function VideoCarousel({ videos }: VideoCarouselProps) {
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
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Video container */}
      <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
        <video
          ref={videoRef}
          src={currentVideo?.url}
          className="w-full h-full object-contain"
          poster={currentVideo?.thumbnail}
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
          <ChevronLeft />
        </button>

        <h3 className="text-lg font-medium">
          {currentVideo?.title} ({currentVideo?.date})
        </h3>

        <button
          onClick={nextVideo}
          className="p-3 rounded-full bg-black text-white hover:bg-gray-400"
          aria-label="Next video"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Sort controls with indicators */}
      <div className="mt-4 mb-2 flex items-center space-x-2">
        <span className="text-sm font-medium">Sort by:</span>
        <div className="flex space-x-1">
          <button
            className={`px-2 py-1 text-xs rounded-md ${
              sortBy === "default"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => setSortBy("default")}
          >
            Default
          </button>
          <button
            className={`px-2 py-1 text-xs rounded-md flex items-center ${
              sortBy.startsWith("title")
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => toggleSort("title")}
          >
            Title
            {sortBy === "title-asc" && <span className="ml-1">↑</span>}
            {sortBy === "title-desc" && <span className="ml-1">↓</span>}
          </button>
          <button
            className={`px-2 py-1 text-xs rounded-md flex items-center ${
              sortBy.startsWith("date")
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => toggleSort("date")}
          >
            Recent
            {sortBy === "date-asc" && <span className="ml-1">↑</span>}
            {sortBy === "date-desc" && <span className="ml-1">↓</span>}
          </button>
        </div>
      </div>

      {/* Video thumbnails */}
      <div className="mt-4 h-60 grid grid-cols-6 overflow-y-scroll p-5">
        {sortedVideos.map((video) => (
          <div key={video.id} className="grid place-items-center mb-2">
            <div
              onClick={() => {
                // Find the index of this video in the sorted array
                const newIndex = sortedVideos.findIndex(
                  (v) => v.id === video.id
                );
                setCurrentIndex(newIndex);
              }}
              className={`relative w-34 h-20 cursor-pointer rounded overflow-hidden ${
                video.id === currentVideo?.id ? "ring-5 ring-blue-500" : ""
              }`}
            >
              <Thumbnail url={video.thumbnail} />
            </div>
            <p className="text-xs mt-1 truncate w-34 text-center">
              {video.title || "Untitled"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
