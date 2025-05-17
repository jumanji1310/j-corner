import Thumbnail from "@/components/video/VideoThumbnail";
import { Video } from "@/types/videoTypes";

interface VideoCardProps {
  video: Video;
  isSelected: boolean;
  onClick: () => void;
}

export default function VideoCard({ video, isSelected, onClick }: VideoCardProps) {
  return (
    <div className="mb-2">
      <div
        onClick={onClick}
        className={`relative aspect-video cursor-pointer rounded overflow-hidden ${
          isSelected ? "ring-2 ring-accent dark:ring-dark-accent" : ""
        }`}
      >
        <Thumbnail url={video.thumbnail} onThumbnailLoad={()=>console.log('LOADED THUMBNAIL')}/>
      </div>
      <p className="text-sm mt-1 truncate text-center">
        {video.title || "Untitled"}
      </p>
    </div>
  );
}