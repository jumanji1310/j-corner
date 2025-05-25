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
          key={video.title}
          video={video}
          isSelected={video.title === currentVideo?.title}
          onClick={() => {
            const newIndex = videos.findIndex((v) => v.title === video.title);
            onSelectVideo(newIndex);
          }}
        />
      ))}
    </>
  );
}
