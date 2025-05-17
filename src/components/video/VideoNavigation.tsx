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
      <h3 className="text-lg font-medium mb-3 text-center text-text dark:text-dark-text text-base">
        {video?.title} <span className="text-text/50 dark:text-dark-text/50">({video?.date})</span>
      </h3>

      <div className="grid grid-cols-2 gap-4 text-xl font-bold">
        <button
          onClick={onPrev}
          className="p-2 rounded-md bg-primary dark:bg-dark-primary text-text dark:text-dark-text hover:bg-secondary dark:hover:bg-dark-secondary flex items-center justify-center"
          aria-label="Previous video"
        >
          <ChevronLeft  /> 
          <span className="ml-2">Previous</span>
        </button>

        <button
          onClick={onNext}
          className="p-2 rounded-md bg-primary dark:bg-dark-primary text-text dark:text-dark-text hover:bg-secondary dark:hover:bg-dark-secondary flex items-center justify-center"
          aria-label="Next video"
        >
          <span className="mr-2">Next</span> 
          <ChevronRight  />
        </button>
      </div>
    </>
  );
}