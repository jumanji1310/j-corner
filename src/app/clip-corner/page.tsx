"use client";

import VideoCarousel from "@/components/VideoCarousel";
import { useEffect, useState } from "react";

// Sample video data - replace with your actual data
const sampleVideos = [
  {
    id: "1",
    title: "Highlight Reel #1",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbnail:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
    date: "2023-10-01",
  },
  {
    id: "2",
    title: "Best Plays 2023",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnail:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
    date: "2023-10-01",
  },
  {
    id: "3",
    title: "Tournament Finals",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnail:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",
    date: "2023-10-01",
  },
];

export default function ClipCornerPage() {
  const [videos, setVideos] = useState(sampleVideos);

  useEffect(() => {
    fetch("https://video-worker.ngjunjie13.workers.dev/list")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        const formattedVideos = data.objects.map((video: any) => {
          return {
            // url: `https://video-worker.ngjunjie13.workers.dev/${video.key}`,
            url: `https://www.cdn.jumanji.work/${video.key}`, //getting the video from the CDN directly
            id: video.version,
            title: video.key.replace(/\.mp4$/, '').replace(/_/g, ' ').replace(/^\w/, (c) => c.toUpperCase()),
            thumbnail: "", // Add a default thumbnail or modify as needed
            date: new Date(video.uploaded).toLocaleString()
          };
        });
        console.log("Response:",formattedVideos);
        setVideos(formattedVideos);
      })
      .catch((err) => console.error("Error fetching videos:", err));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <VideoCarousel videos={videos} />
    </div>
  );
}
