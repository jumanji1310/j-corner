export default function LoadingScreen({ 
  src, 
  onEnded 
}: { 
  src: string;
  onEnded?: () => void;
}) {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-1/2 h-[80vh] w-[80vh] mt-[5vh] bg-background dark:bg-dark-background z-50">
      <video
        src={src}
        autoPlay
        className="h-full rounded-lg "
        onEnded={onEnded}
      />
    </div>
  );
}

