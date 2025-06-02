"use client";

import LoadingScreen from "@/components/LoadingScreen";
import VideoPage from "@/components/video/VideoPage";
import { useEffect, useState } from "react";
import { Video } from "@/types/videoTypes";
export default function ClipCornerPage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [isFirstVideoLoading, setIsFirstVideoLoading] = useState(true);

  interface Metadata {
    SourceFile: string;
    EncodingTime: string;
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
    fetch("https://www.cdn.jumanji.work/metadata.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched metadata:", data);
        const formattedVideos = data.map((object: Metadata) => {
          return {
            url: `https://www.cdn.jumanji.work/${object.SourceFile}`, //getting the video from the CDN directly
            title: object.SourceFile.split("/")
              .pop() // Get the part after the last '/'
              ?.replace(/\.mp4$/, "") // Remove .mp4 extension
              .replace(/_/g, " ") // Replace underscores with spaces
              .replace(/^\w/, (c: string) => c.toUpperCase()), // Capitalize first letter
            thumbnail: `https://www.cdn.jumanji.work/thumbnails/${object.SourceFile.replace(
              /\.mp4$/,
              ".jpg"
            ).replace(/^videos\//, "")}`,
            date: parseCustomDate(object.EncodingTime).toLocaleString("en-AU", {
              dateStyle: "medium",
              timeStyle: "short",
            }),
          };
        });
        console.log("Videos:", formattedVideos);
        setVideos(formattedVideos);
        setIsVideoLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching videos:", err);
        setIsVideoLoading(false);
        setIsFirstVideoLoading(false);
      });
  }, []);

  // Show loading overlay if either data is not loaded or video is still loading
  const showLoadingOverlay = isVideoLoading || isFirstVideoLoading;

  return (
    <div className="relative">
      {/* Always render VideoPage once we have data */}
      {!isVideoLoading && (
        <VideoPage videos={videos} onLoadingChange={setIsFirstVideoLoading} />
      )}

      {/* Loading overlay that disappears when everything is ready */}
      {showLoadingOverlay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background dark:bg-dark-background">
          <LoadingScreen src="/Loading.gif" />
        </div>
      )}
    </div>
  );
}
