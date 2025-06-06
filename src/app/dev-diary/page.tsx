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
    <div className="bg-background dark:bg-dark-background">
      <div className="w-3/4 mx-auto text-center py-6">
        This idea sparked from Jovana mentioning wanting to be able to watch my clips. I previously used Streamables but they have an expiry date and thought it would be a great chance to develop my fullstack skills and also make something nice and personal for Jovana. 
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
            dateClassName="text-text dark:text-dark-text !opacity-100 !text-xl "
            iconStyle={{
              background:
                theme == "dark" ? "rgb(240, 68, 160)" : "rgb(57, 157, 247)",
              boxShadow: `0 0 0 2px ${
                theme == "dark" ? "black" : "white"
              }, inset 0 1px #00000014, 0 2px 0 4px #0000000d`,
            }}
            icon={<TextIcon text={`Day ${index + 1}`} />}
            textClassName="text-text dark:text-dark-text"
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
