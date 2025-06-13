"use client";

import { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "next-themes";
interface DiaryEntry {
  date: string;
  title: string;
  subtitle?: string;
  content: string;
}
const TextIcon = ({ text }: { text: string }) => (
  <div className="flex items-center justify-center w-full h-full text-text dark:text-dark-text font-bold text-lg">
    {text}
  </div>
);

export default function DevDiaryPage() {
  const [diaryEntries, setDiaryEntries] = useState<DiaryEntry[]>([]);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchDiaryEntries = async () => {
      try {
        const response = await fetch("/diary.json");
        const data = await response.json();
        setDiaryEntries(data.entries);
      } catch (error) {
        console.error("Error loading diary entries:", error);
        // Fallback to empty array if fetch fails
        setDiaryEntries([]);
      }
    };

    fetchDiaryEntries();
  }, []);

  return (
    <div className="bg-background dark:bg-dark-background text-text dark:text-dark-text">
      <div className="w-4/7 mx-auto py-6">
        <h1 className="mb-6 text-3xl font-bold text-center">
          Development Diary
        </h1>
        The idea for this website project sparked from when Jovana mentioned
        wanting to watch my clips that I capture when we game and chill. I
        previously used Streamables to share these clips to friends but they
        have an expiry date and thought this was also a great opportunity to
        develop my fullstack skills and also make something nice and personal
        for Jovana. I know she will love it!
        <br />
        <br />
        This dev diary was created to track my design choices, thoughts, wins
        and struggles as I progress along the project. Jovana loves reading my
        journals and my thought process so she’ll reelly enjoy reading through
        and following along with my long journey. I hope this diary will also be
        a great reflect on my decision and design choices when I finish the
        project. Have fun reading through it Jovana ❤️!
      </div>
      <VerticalTimeline
        lineColor={theme == "dark" ? "black" : "white"}
        className="bg-primary/20 dark:bg-dark-primary/20 !px-8"
      >
        {diaryEntries.map((entry, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            intersectionObserverProps={{
              rootMargin: "0px 0px -40px 0px",
              triggerOnce: false,
            }}
            contentStyle={{
              margin: 0,
              background:
                theme == "dark" ? "rgb(254, 166, 213)" : "rgb(17, 86, 148)",
            }}
            contentArrowStyle={{
              border: "#0000",
            }}
            date={entry.date}
            dateClassName="!opacity-100 !text-xl "
            iconStyle={{
              width: "4rem",
              height: "4rem",
              marginLeft: "-2rem",
              background:
                theme == "dark" ? "rgb(240, 68, 160)" : "rgb(57, 157, 247)",
              boxShadow: `0 0 0 2px ${
                theme == "dark" ? "black" : "white"
              }, inset 0 1px #00000014, 0 2px 0 4px #0000000d`,
            }}
            icon={<TextIcon text={`Day ${index + 1}`} />}
          >
            <h3 className="vertical-timeline-element-title text-lg font-extrabold underline">
              {entry.title}
            </h3>
            {entry.subtitle && (
              <h4 className="vertical-timeline-element-subtitle">
                {entry.subtitle}
              </h4>
            )}
            <p>{entry.content}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}
