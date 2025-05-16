"use client";
import { useEffect, useRef, useState } from "react";

interface ThumbnailProps {
  url: string;
  onThumbnailLoad?: () => void; // Optional callback to notify when the thumbnail is loaded
}

const Thumbnail = ({ url, onThumbnailLoad }: ThumbnailProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [thumb, setThumb] = useState<string | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    video.addEventListener("loadeddata", () => {
      video.currentTime = 0;
    });

    video.addEventListener("seeked", () => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      ctx.drawImage(video, 0, 0);
      setThumb(canvas.toDataURL("image/jpeg"));
    });

    video.load();
  }, [url]);

  return (
    <>
      {thumb ? (
        <img src={thumb} alt="Thumbnail" onLoad={onThumbnailLoad} />
      ) : (
        <div className="flex items-center justify-center h-full w-full">
          <p className="text-center">Loading...</p>
        </div>
      )}
      <video
        ref={videoRef}
        src={url}
        preload="auto"
        style={{ display: "none" }}
        crossOrigin="anonymous"
      />
      <canvas ref={canvasRef} style={{ display: "none" }} />
    </>
  );
};

export default Thumbnail;
