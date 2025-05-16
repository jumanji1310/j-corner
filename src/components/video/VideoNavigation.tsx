import { ChevronLeft, ChevronRight } from "../Chevron";
import { Video } from "@/types/videoTypes";

interface VideoNavigationProps {
  video: Video;
  onNext: () => void;
  onPrev: () => void;
}

export default function VideoNavigation({ video, onNext, onPrev }: VideoNavigationProps) {
  return (
    <>
      <h3 className="text-lg font-medium mb-3 text-center text-gray-100">
        {video?.title} <span className="text-gray-400 text-base">({video?.date})</span>
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={onPrev}
          className="p-2 rounded-md bg-gray-700 text-gray-100 hover:bg-indigo-600 flex items-center justify-center transition-colors"
          aria-label="Previous video"
        >
          <ChevronLeft  /> 
          <span className="ml-2">Previous</span>
        </button>

        <button
          onClick={onNext}
          className="p-2 rounded-md bg-gray-700 text-gray-100 hover:bg-indigo-600 flex items-center justify-center transition-colors"
          aria-label="Next video"
        >
          <span className="mr-2">Next</span> 
          <ChevronRight  />
        </button>
      </div>
    </>
  );
}