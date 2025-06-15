"use client";
import * as React from "react";
import Masonry from "react-masonry-css";
import { useEffect, useState } from "react";
import PolaroidCard from "@/components/PolaroidCard";
import LoadingScreen from "@/components/LoadingScreen";
import { useTheme } from "next-themes";

// Helper function to format date strings
function formatDateString(dateStr: string) {
  // For strings in format "2025.06.08-16.26.53"
  const match = dateStr.match(
    /(\d{4})\.(\d{2})\.(\d{2})-(\d{2})\.(\d{2})\.(\d{2})/
  );

  if (!match) return dateStr; // Return original if no match

  const [, year, month, day, hour, minute, second] = match;

  // Create a date object
  const date = new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}`);

  // Format as a more readable string
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
}

export default function MemoryCornerPage() {
  const [items, setItems] = useState<
    Array<{ id: number; title: string; src: string }>
  >([]);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);
  const [animationPlaying, setAnimationPlaying] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    async function fetchImages() {
      try {
        // Fetch the image metadata from the JSON file
        const response = await fetch(
          "https://www.cdn.jumanji.work/image_names.json"
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch image metadata: ${response.status}`);
        }

        // Parse the JSON response
        const imageData = await response.json();
        console.log("Fetched image data:", imageData);

        // Extract filenames from the SourceFile property of each entry
        const imageItems = imageData.map(
          (item: { SourceFile: string }, idx: number) => {
            return {
              id: idx,
              title: item.SourceFile.replace(/^images\//, ""),
              src: `https://www.cdn.jumanji.work/${item.SourceFile}`,
            };
          }
        );

        setItems(imageItems);

        // Don't set isImageLoading to false here - we'll wait for images to load
      } catch (error) {
        console.error("Error fetching image data:", error);
        setIsImageLoading(false); // Only set to false on error
      }
    }

    fetchImages();
  }, []);

  // Track when all images are loaded
  useEffect(() => {
    if (items.length > 0 && loadedImages >= items.length) {
      // All images have loaded
      setIsImageLoading(false);
    }
  }, [loadedImages, items.length]);

  // Function to handle when each image loads
  const handleImageLoaded = () => {
    setLoadedImages((prev) => prev + 1);
  };

  const breakpointColumnsObj = {
    default: 5,
    1200: 4,
    1000: 3,
    800: 2,
  };

  const showLoadingOverlay = isImageLoading || animationPlaying;
  const onEnded = () => {
    setAnimationPlaying(false);
  };

  return (
    <div className="bg-background dark:bg-dark-background p-4 h-[90vh]">
      {showLoadingOverlay && (
        <div className="fixed top-[10vh] left-0 right-0 bottom-0 bg-background dark:bg-dark-background flex items-center justify-center">
          <LoadingScreen src={`${theme === "dark" ? "/icons/pilee-loading.mp4" : "/icons/thresh-loading.mp4"}`} onEnded={onEnded}/>
        </div>
      )}
      <div className={`${showLoadingOverlay ? "invisible" : "visible"}`}>
        <h1 className="text-4xl font-bold text-center mb-8 text-accent dark:text-dark-accent">
          Memory Corner
        </h1>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex mx-auto h-[80vh] w-[80vw] bg-primary/20 dark:bg-dark-primary/20 text-center overflow-y-auto overflow-x-hidden p-4 rounded-lg"
        >
          {items.map((item) => (
            <PolaroidCard
              key={item.id.toString()}
              src={item.src}
              caption={formatDateString(item.title)}
              onImageLoaded={handleImageLoaded}
            />
          ))}
        </Masonry>
      </div>
    </div>
  );
}
