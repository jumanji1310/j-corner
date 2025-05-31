"use client";
import { useState } from "react";

export default function ChampionModelViewer() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Generate iframe URL with current theme
  const iframeUrl = `https://modelviewer.lol/champions`;

  return (
    <div className="bg-background dark:bg-dark-background text-text dark:text-dark-text ">
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">
            League of Legends Champion and Skin models viewer
          </h1>
        </div>

        <div className="relative w-full" style={{ height: "80vh" }}>
          <iframe
            src={iframeUrl}
            className={`w-full h-full ${
              isLoaded ? "opacity-100" : "opacity-0"
            } rounded-lg border-4 border-primary dark:border-dark-primary shadow-lg/50 shadow-secondary dark:shadow-dark-secondary`}
            onLoad={() => setIsLoaded(true)}
            title="League of Legends Champion Model Viewer"
            allow="autoplay; fullscreen"
          />

          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-lg">Loading model viewer...</div>
            </div>
          )}
        </div>

        <div className="mt-4 text-sm">
          Powered by{" "}
          <a
            href="https://modelviewer.lol"
            className="text-accent dark:text-dark-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            ModelViewer.lol
          </a>
        </div>
      </div>
    </div>
  );
}
