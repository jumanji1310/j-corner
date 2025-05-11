"use client";
import { useRef, useState } from 'react';

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const updateProgress = () => {
    if (videoRef.current) {
      const percentage = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(percentage);
    }
  };
  
  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const seekPosition = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = videoRef.current.duration * seekPosition;
    }
  };
  
  return (
    <div className="video-container">
      <video
        ref={videoRef}
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        width="500"
        height="500"
        onTimeUpdate={updateProgress}
        onClick={togglePlay}
      ></video>
      
      <div className="custom-controls">
        <button onClick={togglePlay}>
          {isPlaying ? '❚❚' : '►'}
        </button>
        
        <div className="progress-bar" onClick={seek}>
          <div 
            className="progress" 
            style={{width: `${progress}%`}}
          ></div>
        </div>
        
        <button onClick={() => {
          if (videoRef.current) videoRef.current.volume += 0.1;
        }}>
          Volume +
        </button>
        
        <button onClick={() => {
          if (videoRef.current) videoRef.current.volume -= 0.1;
        }}>
          Volume -
        </button>
        
        <button onClick={() => {
          if (videoRef.current) videoRef.current.requestFullscreen();
        }}>
          Fullscreen
        </button>
      </div>
    </div>
  );
}