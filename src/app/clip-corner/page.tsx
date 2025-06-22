"use client";

import LoadingScreen from "@/components/LoadingScreen";
import VideoPage from "@/components/video/VideoPage";
import { useEffect, useState } from "react";
import { Video } from "@/types/videoTypes";
import { useTheme } from "next-themes";

export default function ClipCornerPage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [isFirstVideoLoading, setIsFirstVideoLoading] = useState(true);
  const [animationPlaying, setAnimationPlaying] = useState(true);
  const { theme } = useTheme();

  const onEnded = () => {
    setAnimationPlaying(false);
  };

  interface Metadata {
    SourceFile: string;
    EncodingTime: string;
    FileCreateDate: string;
  }

  // Parse non-standard date format: 2025:03:17 18:39:47+11:00
  const parseCustomDate = (dateStr: string) => {
    // Extract components from the string
    const [datePart, timePart] = dateStr.split(" ");
    const [year, month, day] = datePart.split(":");

    // Extract time and timezone
    const timeMatch = timePart.match(/(\d+):(\d+):(\d+)([+-]\d+:\d+)/);
    if (!timeMatch) return new Date(); // Return current date if format is invalid

    const [, hours, minutes, seconds, timezone] = timeMatch;

    // Create ISO-compatible date string
    const isoDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${timezone}`;
    return new Date(isoDate);
  };

useEffect(() => {
  async function fetchVideos() {
    try {
      // Fetch metadata
      const res = await fetch("https://www.cdn.jumanji.work/video_metadata.json");
      
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      
      const data = await res.json();
      
      // Process the data
      const formattedVideos = data.map((object: Metadata) => {
        return {
          url: `https://www.cdn.jumanji.work/${object.SourceFile}`,
          title: object.SourceFile.split("/")
            .pop()
            ?.replace(/\.mp4$/, "")
            .replace(/_/g, " ")
            .replace(/^\w/, (c: string) => c.toUpperCase()),
          thumbnail: `https://www.cdn.jumanji.work/thumbnails/${object.SourceFile.replace(
            /\.mp4$/,
            ".jpg"
          ).replace(/^videos\//, "")}`,
          date: parseCustomDate(object.EncodingTime).toLocaleString("en-US", {
            dateStyle: "medium",
            timeStyle: "short",
          }),
          dateAdded: parseCustomDate(object.FileCreateDate).toLocaleString("en-US", {
            dateStyle: "medium",
            timeStyle: "short",
          }),
        };
      });
      console.log("Formatted videos:", formattedVideos);
      setVideos(formattedVideos);
    } catch (err) {
      console.error("Error fetching videos:", err);
      setIsFirstVideoLoading(false);
    } finally {
      setIsVideoLoading(false);
    }
  }
  
  fetchVideos();
}, []);
  // Show loading overlay if either data is not loaded or video is still loading
  const showLoadingOverlay = isVideoLoading || isFirstVideoLoading || animationPlaying;

  return (
    <div>
      {/* Always render VideoPage once we have data */}
      {!isVideoLoading && (
        <div className={`${showLoadingOverlay ? "invisible" : "visible"}`}>
        <VideoPage videos={videos} onLoadingChange={setIsFirstVideoLoading} />
      </div>)}
      {/* Loading overlay that disappears when everything is ready */}
      {showLoadingOverlay && (
        <div className="fixed top-[10vh] left-0 right-0 bottom-0 bg-background dark:bg-dark-background flex items-center justify-center">
          <LoadingScreen src={`${theme === "dark" ? "/icons/pilee-loading.mp4" : "/icons/thresh-loading.mp4"}`} onEnded={onEnded}/>
        </div>
      )}
    </div>
  );
}
