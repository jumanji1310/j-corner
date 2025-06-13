"use client";
import * as React from "react";
import Masonry from "react-masonry-css";
import { useEffect, useState } from "react";
import PolaroidCard from "@/components/PolaroidCard";
import { title } from "process";

// Helper function to format date strings
function formatDateString(dateStr: string) {
  // For strings in format "2025.06.08-16.26.53"
  const match = dateStr.match(/(\d{4})\.(\d{2})\.(\d{2})-(\d{2})\.(\d{2})\.(\d{2})/);

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
  const [items, setItems] = useState<Array<{ id: number; title: string; src: string }>>([]);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);

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

  return (
    <div className="bg-background dark:bg-dark-background p-4 h-[90vh]">
      <h1 className="text-4xl font-bold text-center mb-8 text-accent dark:text-dark-accent">
        Memory Corner
      </h1>

      {isImageLoading && (
        <div className="fixed top-[10vh] bottom-0 left-0 right-0 z-50 flex justify-center items-center bg-background dark:bg-dark-background">
          <div className="text-accent dark:text-dark-accent text-xl">
            Loading memories... {loadedImages}/{items.length}
          </div>
        </div>
      )}
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
  );
}
