"use client";
import { useState } from "react";
import OLL from "@/components/cube/OllSection";
import PLL from "@/components/cube/PllSection";
import F2L from "@/components/cube/F2LSection";
import Basics from "@/components/cube/BasicsSection";
import FreePlay from "@/components/cube/FreePlay";
import CubeTimer from "@/components/cube/CubeTimer";

const CubingCornerPage = () => {
  // State to track active tab
  const [activeTab, setActiveTab] = useState("basics");

  // Tab definitions
  const tabs = [
    { id: "basics", label: "The Basics" },
    { id: "f2l", label: "F2L - First Two Layers" },
    { id: "oll", label: "OLL - Final layer Orientation" },
    { id: "pll", label: "PLL - Final Layer Permutation" },
    { id: "free", label: "Free Play" },
    { id: "timer", label: "Cube Timer" },
  ];

  return (
    <div className="min-h-[90vh] p-4 bg-background dark:bg-dark-background text-text dark:text-dark-text">
      {/* Tab Navigation */}
      <div className="flex flex-wrap border-b border-primary dark:border-dark-primary">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 font-medium text-xl ${
              activeTab === tab.id
                ? "border-b-2 border-accent dark:border-dark-accent text-accent dark:text-dark-accent"
                : "text-primary dark:text-dark-primary hover:text-accent dark:hover:text-dark-accent"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {activeTab === "basics" && <Basics />}
        {activeTab === "f2l" && <F2L />}
        {activeTab === "oll" && <OLL />}
        {activeTab === "pll" && <PLL />}
        {activeTab === "free" && <FreePlay />}
        {activeTab === "timer" && <CubeTimer />}
      </div>
    </div>
  );
};

export default CubingCornerPage;