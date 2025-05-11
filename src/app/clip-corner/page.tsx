"use client";

import LoadingScreen from "@/components/LoadingScreen";
import VideoCarousel from "@/components/VideoCarousel";
import { useEffect, useState } from "react";

export default function ClipCornerPage() {
  const [videos, setVideos] = useState<formattedVideo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  interface VideoObject {
    key: string;
    version: string;
    uploaded: string | number;
  }
  interface formattedVideo {
    id: string;
    title: string;
    date: string;
    url: string;
    thumbnail?: string;
  }
  
  useEffect(() => {
    fetch("https://video-worker.ngjunjie13.workers.dev/list")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        const formattedVideos = data.objects.map((video: VideoObject) => {
          return {
            // url: `https://video-worker.ngjunjie13.workers.dev/${video.key}`,
            url: `https://www.cdn.jumanji.work/${video.key}`, //getting the video from the CDN directly
            id: video.version,
            title: video.key
              .replace(/\.mp4$/, "")
              .replace(/_/g, " ")
              .replace(/^\w/, (c: string) => c.toUpperCase()),
            thumbnail: "", // Add a default thumbnail or modify as needed
            date: new Date(video.uploaded).toLocaleString(),
          };
        });
        console.log("Response:", formattedVideos);
        setVideos(formattedVideos);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching videos:", err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {isLoading ? (
        <LoadingScreen message="Loading videos..." />
      ) : (
        <VideoCarousel videos={videos} />
      )}
    </div>
  );
}
