import VideoCarousel from "@/components/VideoCarousel";

// Sample video data - replace with your actual data
const sampleVideos = [
  {
    id: "1",
    title: "Highlight Reel #1",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbnail: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
  },
  {
    id: "2",
    title: "Best Plays 2023",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnail: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
  },
  {
    id: "3",
    title: "Tournament Finals",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnail: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",
  },
];

export default function ClipCornerPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <VideoCarousel videos={sampleVideos} />
    </div>
  );
}
