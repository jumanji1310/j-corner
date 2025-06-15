export default function LoadingScreen({ 
  src, 
  onEnded 
}: { 
  src: string;
  onEnded?: () => void;
}) {
  return (
    <div className="h-[80vh] w-[80vh]">
      <video
        src={src}
        autoPlay
        className="h-full rounded-lg "
        onEnded={onEnded}
      />
    </div>
  );
}

