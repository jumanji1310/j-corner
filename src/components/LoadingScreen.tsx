import Image from "next/image";

export default function LoadingScreen({ src }: { src: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <Image
        src={src}
        alt="Loading animation"
        width={300}
        height={300}
        priority
      />
    </div>
  );
}

