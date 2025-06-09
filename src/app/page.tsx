"use client";
/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Link from "next/link";
import {
  Box,
  TvMinimalPlay,
  Gamepad2,
  Shirt,
  NotebookPen,
  Music,
} from "lucide-react";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const gifDuration = 2500;
    const timer = setTimeout(() => {
      setLoading(false);
    }, gifDuration);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen src="/Loading.gif" />
      ) : (
        <div className="bg-background dark:bg-dark-background text-text dark:text-dark-text h-[90vh]">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12 py-10">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 text-accent dark:text-dark-accent">
                Welcome to J-Corner
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                A personal project created for Jovana with cubing tutorials,
                gaming clips, and more.
              </p>
            </div>

            {/* Unified Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Clip Corner */}
              <Link href="/clip-corner" className="group">
                <div className="h-full rounded-lg p-6 bg-primary/20 dark:bg-dark-primary/20 border border-primary dark:border-dark-primary shadow-lg/50 shadow-secondary dark:shadow-dark-secondary transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
                  <div className="flex justify-center mb-4">
                    <TvMinimalPlay
                      size={56}
                      strokeWidth={2}
                      className="text-accent dark:text-dark-accent"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-center mb-3">
                    Clip Corner
                  </h2>
                  <p className="text-center">
                    Browse through memorable gaming moments captured in
                    high-quality clips.
                  </p>
                </div>
              </Link>

              {/* Cubing Corner */}
              <Link href="/cubing-corner" className="group">
                <div className="h-full rounded-lg p-6 bg-primary/20 dark:bg-dark-primary/20 border border-primary dark:border-dark-primary shadow-lg/50 shadow-secondary dark:shadow-dark-secondary transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
                  <div className="flex justify-center mb-4">
                    <Box
                      size={56}
                      strokeWidth={2}
                      className="text-accent dark:text-dark-accent"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-center mb-3">
                    Cubing Corner
                  </h2>
                  <p className="text-center">
                    Learn Rubik's cube techniques, algorithms and track your
                    solving times.
                  </p>
                </div>
              </Link>

              {/* Skin Viewer */}
              <Link href="/skin-viewer" className="group">
                <div className="h-full rounded-lg p-6 bg-primary/20 dark:bg-dark-primary/20 border border-primary dark:border-dark-primary shadow-lg/50 shadow-secondary dark:shadow-dark-secondary transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
                  <div className="flex justify-center mb-4">
                    <Shirt
                      size={56}
                      strokeWidth={2}
                      className="text-accent dark:text-dark-accent"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-center mb-3">
                    Skin Viewer
                  </h2>
                  <p className="text-center">
                    Browse and view League of Legends champion and skin models.
                  </p>
                </div>
              </Link>

              {/* X-dles Section */}
              <div className="rounded-lg p-6 bg-primary/20 dark:bg-dark-primary/20 border border-primary dark:border-dark-primary shadow-lg/50 shadow-secondary dark:shadow-dark-secondary h-full flex flex-col">
                <div className="flex justify-center mb-4">
                  <Gamepad2
                    size={56}
                    strokeWidth={2}
                    className="text-accent dark:text-dark-accent"
                  />
                </div>
                <h2 className="text-2xl font-bold text-center mb-3">X-dles</h2>
                <p className="text-center mb-4">
                  Daily word games and puzzles we enjoy playing.
                </p>
                <div className="flex justify-center gap-3 mt-auto">
                  <Link
                    href="https://loldle.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-primary dark:bg-dark-primary rounded-lg text-text dark:text-dark-text hover:bg-accent/70 dark:hover:bg-dark-accent/70 transition-colors"
                  >
                    Loldle
                  </Link>
                  <Link
                    href="https://www.nytimes.com/games/wordle/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-primary dark:bg-dark-primary rounded-lg text-text dark:text-dark-text hover:bg-accent/70 dark:hover:bg-dark-accent/70 transition-colors"
                  >
                    Wordle
                  </Link>
                  <Link
                    href="https://www.britannica.com/games/octordle/daily"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-primary dark:bg-dark-primary rounded-lg text-text dark:text-dark-text hover:bg-accent/70 dark:hover:bg-dark-accent/70 transition-colors"
                  >
                    Octordle
                  </Link>
                </div>
              </div>

              {/* Music Corner */}
              <Link href="/music-corner" className="group">
                <div className="h-full rounded-lg p-6 bg-primary/20 dark:bg-dark-primary/20 border border-primary dark:border-dark-primary shadow-lg/50 shadow-secondary dark:shadow-dark-secondary transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
                  <div className="flex justify-center mb-4">
                    <Music
                      size={56}
                      strokeWidth={2}
                      className="text-accent dark:text-dark-accent"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-center mb-3">
                    Music Corner
                  </h2>
                  <p className="text-center">
                    Learn music theory basics, piano fundamentals, and how to
                    read sheet music.
                  </p>
                </div>
              </Link>

              {/* Dev Diary */}
              <Link href="/dev-diary" className="group">
                <div className="h-full rounded-lg p-6 bg-primary/20 dark:bg-dark-primary/20 border border-primary dark:border-dark-primary shadow-lg/50 shadow-secondary dark:shadow-dark-secondary transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
                  <div className="flex justify-center mb-4">
                    <NotebookPen
                      size={56}
                      strokeWidth={2}
                      className="text-accent dark:text-dark-accent"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-center mb-3">
                    Dev Diary
                  </h2>
                  <p className="text-center">
                    Follow the development journey of J-Corner and how it
                    evolved over time.
                  </p>
                </div>
              </Link>
            </div>

            {/* Footer Note */}
            <div className="text-center py-8">
              <p className="italic text-lg">
                Made with ❤️ for my bestie Jovana xx
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
