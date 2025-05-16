import { SortOption } from "@/types/videoTypes";

interface SortControlsProps {
  sortBy: SortOption;
  onSortDefault: () => void;
  onToggleSort: (type: "title" | "date") => void;
}

export default function SortControls({ sortBy, onSortDefault, onToggleSort }: SortControlsProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-gray-300">Sort:</span>

      <div className="flex gap-2 flex-grow">
        <button
          className={`px-3 py-1.5 text-xs rounded-md ${
            sortBy === "default"
              ? "bg-indigo-600 text-white hover:bg-indigo-500"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
          }`}
          onClick={onSortDefault}
        >
          Default
        </button>
        <button
          className={`px-3 py-1.5 text-xs rounded-md text-center ${
            sortBy.startsWith("title")
              ? "bg-indigo-600 text-white hover:bg-indigo-500"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
          }`}
          onClick={() => onToggleSort("title")}
        >
          Title {sortBy === "title-asc" && "↑"}
          {sortBy === "title-desc" && "↓"}
        </button>
        <button
          className={`px-3 py-1.5 text-xs rounded-md text-center ${
            sortBy.startsWith("date")
              ? "bg-indigo-600 text-white hover:bg-indigo-500"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
          }`}
          onClick={() => onToggleSort("date")}
        >
          Recent {sortBy === "date-asc" && "↑"}
          {sortBy === "date-desc" && "↓"}
        </button>
      </div>
    </div>
  );
}