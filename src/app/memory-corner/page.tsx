"use client";
import * as React from "react";
import Masonry from "react-masonry-css";
import { useEffect, useState, useMemo } from "react";
import PolaroidCard from "@/components/PolaroidCard";
import LoadingScreen from "@/components/LoadingScreen";
import { useTheme } from "next-themes";
import { SortControlsImages } from "@/components/video/SortControls";

type SortOption = "default" | "date-asc" | "date-desc";

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

// Parse date from filename
function parseDate(filename: string) {
  const match = filename.match(
    /(\d{4})\.(\d{2})\.(\d{2})-(\d{2})\.(\d{2})\.(\d{2})/
  );

  if (!match) return new Date(0); // Return epoch if no match

  const [, year, month, day, hour, minute, second] = match;
  return new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}`);
}

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function MemoryCornerPage() {
  const [items, setItems] = useState<
    Array<{ id: number; title: string; src: string; date: Date }>
  >([]);
  const [displayItems, setDisplayItems] = useState<
    Array<{ id: number; title: string; src: string; date: Date }>
  >([]);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);
  const [animationPlaying, setAnimationPlaying] = useState(true);
  const [sortBy, setSortBy] = useState<SortOption>("default");
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
            const title = item.SourceFile.replace(/^images\//, "");
            return {
              id: idx,
              title,
              src: `https://www.cdn.jumanji.work/${item.SourceFile}`,
              date: parseDate(title),
            };
          }
        );

        // Store original items
        setItems(imageItems);

        // Shuffle the images for default display
        const shuffledImages = shuffleArray([...imageItems]);
        setDisplayItems(shuffledImages);

        // Don't set isImageLoading to false here - we'll wait for images to load
      } catch (error) {
        console.error("Error fetching image data:", error);
        setIsImageLoading(false); // Only set to false on error
      }
    }

    fetchImages();
  }, []);

  // Extract unique categories from image URLs
  const categories = useMemo(() => {
    const categorySet = new Set<string>();
    categorySet.add("all"); // Add "all" option

    items.forEach((item) => {
      // Extract category from URL paths like "XX/images/category/filename.jpg"
      const urlParts = item.src.split("/");
      const categoryIndex = urlParts.indexOf("images");

      if (categoryIndex >= 0 && categoryIndex + 1 < urlParts.length) {
        const category = urlParts[categoryIndex + 1];
        if (category) categorySet.add(category);
      }
    });

    return Array.from(categorySet);
  }, [items]);

  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Filter images by category
  const getFilteredImages = () => {
    if (selectedCategory === "all") return items;

    return items.filter((item) => {
      const urlParts = item.src.split("/");
      const categoryIndex = urlParts.indexOf("images");

      if (categoryIndex >= 0 && categoryIndex + 1 < urlParts.length) {
        return urlParts[categoryIndex + 1] === selectedCategory;
      }
      return false;
    });
  };

  // Apply sorting when sortBy changes
  useEffect(() => {
    if (items.length === 0) return;

    // First filter by category
    const filteredImages = getFilteredImages();

    // Then sort the filtered images
    let sorted = [...filteredImages];

    switch (sortBy) {
      case "default":
        sorted = shuffleArray([...filteredImages]);
        break;
      case "date-asc":
        sorted = [...filteredImages].sort(
          (a, b) => a.date.getTime() - b.date.getTime()
        );
        break;
      case "date-desc":
        sorted = [...filteredImages].sort(
          (a, b) => b.date.getTime() - a.date.getTime()
        );
        break;
    }

    setDisplayItems(sorted);
    // Reset loaded images count when sorting or filtering changes
    setLoadedImages(0);
  }, [sortBy, items, selectedCategory]);

  // Track when all images are loaded
  useEffect(() => {
    if (displayItems.length > 0 && loadedImages >= displayItems.length) {
      // All images have loaded
      setIsImageLoading(false);
    }
  }, [loadedImages, displayItems.length]);

  // Function to handle when each image loads
  const handleImageLoaded = () => {
    setLoadedImages((prev) => prev + 1);
  };

  // Toggle sort function
  const toggleSort = (type: "date") => {
    setSortBy((current) => {
      if (current === `${type}-asc`) return `${type}-desc` as SortOption;
      if (current === `${type}-desc`) return `${type}-asc` as SortOption;
      return `${type}-asc` as SortOption;
    });
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
          <LoadingScreen
            src={`${
              theme === "dark"
                ? "/icons/pilee-loading.mp4"
                : "/icons/thresh-loading.mp4"
            }`}
            onEnded={onEnded}
          />
        </div>
      )}

      <div className={`${showLoadingOverlay ? "invisible" : "visible"}`}>
        <div className="flex justify-between items-center w-[80vw] items-center gap-4 mb-4 mx-auto">
          <div></div>
          <h1 className="text-6xl font-bold text-center text-accent dark:text-dark-accent">
            Memory Corner
          </h1>
          <div className="flex items-center gap-4">
            {/* Category filter dropdown */}
            <div className="text-text dark:text-dark-text bg-primary/20 dark:bg-dark-primary/20 p-4 rounded-lg border border-primary dark:border-dark-primary shadow-lg/50 shadow-secondary dark:shadow-dark-secondary">
              <label className="text-lg font-medium mr-2">
                Category Filter
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="p-2 rounded-lg bg-background dark:bg-dark-background border border-primary dark:border-dark-primary"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "all"
                      ? "All Categories"
                      : category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort controls */}
            <div className="bg-primary/20 dark:bg-dark-primary/20 p-4 rounded-lg border border-primary dark:border-dark-primary shadow-lg/50 shadow-secondary dark:shadow-dark-secondary">
              <SortControlsImages
                sortBy={sortBy}
                onSortDefault={() => setSortBy("default")}
                onToggleSort={toggleSort}
              />
            </div>
          </div>
        </div>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex mx-auto h-[75vh] w-[80vw] bg-primary/20 dark:bg-dark-primary/20 text-center overflow-y-auto overflow-x-hidden p-4 rounded-lg"
        >
          {displayItems.map((item) => (
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
