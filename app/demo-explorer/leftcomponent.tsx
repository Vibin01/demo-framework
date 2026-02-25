'use client';
import { Settings, MapPin, GraduationCap, User, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function ExplorerSidebar() {
  const [activeTab, setActiveTab] = useState("interview");

  const filters = [
    { icon: Settings, label: "Department" },
    { icon: MapPin, label: "Location" },
    { icon: GraduationCap, label: "Primary skills" },
    { icon: User, label: "Recruiter" },
  ];

  return (
    <div className="w-[15%] pt-[calc(8%+2vh)] border-r-[3px] border-gray-300 p-[1%]">

      {/* Tabs */}
      <div className="space-y-2">
        <button
          onClick={() => setActiveTab("interview")}
          className={`w-full text-left text-p px-[6%] py-[4%] rounded-[4px] lg:rounded-[8px] font-medium transition-all
            ${
              activeTab === "interview"
                ? "bg-blue-600 text-white"
                : "text-gray-700 "
            }`}
        >
          Interview Explorer
        </button>

        <button
          onClick={() => setActiveTab("offer")}
          className={`w-full text-left text-p px-[6%] py-[4%] rounded-[4px] lg:rounded-[8px] font-medium transition-all
            ${
              activeTab === "offer"
                ? "bg-blue-600 text-white"
                : "text-gray-700 "
            }`}
        >
          Offer Explorer
        </button>
      </div>

      {/* Filters */}
      <div className="mt-[22%]">
        <p className="text-[clamp(6px,1vw,44px)] text-gray-500 mb-4">
          Select a Factors
        </p>

        <div className="space-y-5">
          {filters.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-between cursor-pointer group"
            >
              <div className="flex items-center gap-[0.7vw] text-gray-700  transition-colors">
                <Icon  className="text-gray-400  size-[clamp(8px,1.2vw,52px)]" />
                <span className="text-p">{label}</span>
              </div>
              <ChevronDown  className="text-gray-400 size-[clamp(8px,1.2vw,52px)]" />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}