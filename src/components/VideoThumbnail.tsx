import { useEffect, useRef, useState } from 'react';

const Thumbnail = ({ url }: { url: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [thumb, setThumb] = useState<string | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    video.addEventListener('loadeddata', () => {
      video.currentTime = 0;
    });

    video.addEventListener('seeked', () => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      ctx.drawImage(video, 0, 0);
      setThumb(canvas.toDataURL('image/jpeg'));
    });

    video.load();
  }, [url]);

  return (
    <>
      {thumb ? <img src={thumb} alt="Thumbnail" className='w-34 h-20'/> : <p>Loading...</p>}
      <video ref={videoRef} src={url} preload="auto" style={{ display: 'none' }} crossOrigin="anonymous" />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </>
  );
};

export default Thumbnail;
