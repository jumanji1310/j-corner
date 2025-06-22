import { SortOptionVideo, SortOptionImage } from "@/types/videoTypes";
import { MoveDown, MoveUp } from "lucide-react";

interface VideoSortControlsProps {
  sortBy: SortOptionVideo;
  onToggleSort: (type: "title" | "date" | "dateAdded") => void;
}

interface ImageSortControlsProps {
  sortBy: SortOptionImage;
  onSortDefault: () => void;
  onToggleSort: (type: "date") => void;
}

export default function SortControlsVideo({
  sortBy,
  onToggleSort,
}: VideoSortControlsProps) {
  return (
    <div className="flex items-center gap-3 text-text dark:text-dark-text">
      <span className="text-lg font-medium">Sort:</span>

      <div className="flex gap-2 flex-grow text-base">
        <button
          className={`px-3 py-1.5 rounded-md text-center flex items-center ${
            sortBy === "dateAdded-asc" || sortBy === "dateAdded-desc"
              ? "bg-accent dark:bg-dark-accent"
              : "bg-primary dark:bg-dark-primary hover:bg-accent dark:hover:bg-dark-accent"
          }`}
          onClick={() => onToggleSort("dateAdded")}
        >
          Date Added
          {sortBy === "dateAdded-asc" && <MoveUp size="1rem" strokeWidth={3} />}
          {sortBy === "dateAdded-desc" && <MoveDown size="1rem" strokeWidth={3} />}
        </button>
        <button
          className={`px-3 py-1.5 rounded-md text-center flex items-center ${
            sortBy === "title-asc" || sortBy === "title-desc"
              ? "bg-accent dark:bg-dark-accent"
              : "bg-primary dark:bg-dark-primary hover:bg-accent dark:hover:bg-dark-accent"
          }`}
          onClick={() => onToggleSort("title")}
        >
          Title
          {sortBy === "title-asc" && <MoveUp size="1rem" strokeWidth={3} />}
          {sortBy === "title-desc" && <MoveDown size="1rem" strokeWidth={3} />}
        </button>
        <button
          className={`px-3 py-1.5 rounded-md text-center flex items-center ${
            sortBy === "date-asc" || sortBy === "date-desc"
              ? "bg-accent dark:bg-dark-accent"
              : "bg-primary dark:bg-dark-primary hover:bg-accent dark:hover:bg-dark-accent"
          }`}
          onClick={() => onToggleSort("date")}
        >
          Date
          {sortBy === "date-asc" && <MoveUp size="1rem" strokeWidth={3} />}
          {sortBy === "date-desc" && <MoveDown size="1rem" strokeWidth={3} />}
        </button>
      </div>
    </div>
  );
}

export function SortControlsImages({
  sortBy,
  onSortDefault,
  onToggleSort,
}: ImageSortControlsProps) {
  return (
    <div className="flex items-center gap-3 text-text dark:text-dark-text">
      <span className="text-lg font-medium">Sort:</span>

      <div className="flex gap-2 flex-grow text-base">
        <button
          className={`px-3 py-1.5 rounded-md ${
            sortBy === "default"
              ? "bg-accent dark:bg-dark-accent"
              : "bg-primary dark:bg-dark-primary hover:bg-accent dark:hover:bg-dark-accent"
          }`}
          onClick={onSortDefault}
        >
          Default
        </button>
        <button
          className={`px-3 py-1.5 rounded-md text-center flex items-center ${
            sortBy === "date-asc" || sortBy === "date-desc"
              ? "bg-accent dark:bg-dark-accent"
              : "bg-primary dark:bg-dark-primary hover:bg-accent dark:hover:bg-dark-accent"
          }`}
          onClick={() => onToggleSort("date")}
        >
          Date {sortBy === "date-asc" && <MoveUp size="1rem" strokeWidth={3} />}
          {sortBy === "date-desc" && <MoveDown size="1rem" strokeWidth={3} />}
        </button>
      </div>
    </div>
  );
}
