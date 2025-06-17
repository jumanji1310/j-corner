import { SortOption } from "@/types/videoTypes";
import { MoveDown, MoveUp } from "lucide-react";

interface VideoSortControlsProps {
  sortBy: SortOption;
  onSortDefault: () => void;
  onToggleSort: (type: "title" | "date") => void;
}

interface ImageSortControlsProps {
  sortBy: SortOption;
  onSortDefault: () => void;
  onToggleSort: (type: "date") => void;
}

export default function SortControlsVideo({
  sortBy,
  onSortDefault,
  onToggleSort,
}: VideoSortControlsProps) {
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
            sortBy.startsWith("title")
              ? "bg-accent dark:bg-dark-accent"
              : "bg-primary dark:bg-dark-primary hover:bg-accent dark:hover:bg-dark-accent"
          }`}
          onClick={() => onToggleSort("title")}
        >
          Title {sortBy === "title-asc" && <MoveUp size="1rem" strokeWidth={3}/>}
          {sortBy === "title-desc" && <MoveDown size="1rem" strokeWidth={3}/>}
        </button>
        <button
          className={`px-3 py-1.5 rounded-md text-center flex items-center ${
            sortBy.startsWith("date")
              ? "bg-accent dark:bg-dark-accent"
              : "bg-primary dark:bg-dark-primary hover:bg-accent dark:hover:bg-dark-accent"
          }`}
          onClick={() => onToggleSort("date")}
        >
          Date {sortBy === "date-asc" && <MoveUp size="1rem" strokeWidth={3}/>}
          {sortBy === "date-desc" && <MoveDown size="1rem" strokeWidth={3}/>}
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
            sortBy.startsWith("date")
              ? "bg-accent dark:bg-dark-accent"
              : "bg-primary dark:bg-dark-primary hover:bg-accent dark:hover:bg-dark-accent"
          }`}
          onClick={() => onToggleSort("date")}
        >
          Date {sortBy === "date-asc" && <MoveUp size="1rem" strokeWidth={3}/>}
          {sortBy === "date-desc" && <MoveDown size="1rem" strokeWidth={3}/>}
        </button>
      </div>
    </div>
  );
}