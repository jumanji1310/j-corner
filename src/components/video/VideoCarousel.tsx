import VideoCard from "./VideoCard";
import { Video } from "@/types/videoTypes";

interface VideoCarouselProps {
  videos: Video[];
  currentVideo: Video;
  onSelectVideo: (index: number) => void;
}

export default function VideoCarousel({
  videos,
  currentVideo,
  onSelectVideo,
}: VideoCarouselProps) {
  return (
    <>
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          video={video}
          isSelected={video.id === currentVideo?.id}
          onClick={() => {
            const newIndex = videos.findIndex((v) => v.id === video.id);
            onSelectVideo(newIndex);
          }}
        />
      ))}
    </>
  );
}
