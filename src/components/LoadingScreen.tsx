export default function LoadingScreen({ src }: { src: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <img
        src={src}
        alt="Loading animation"
        width={300}
        height={300}
      />
    </div>
  );
}

