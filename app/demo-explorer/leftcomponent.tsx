'use client';
import { Settings, MapPin, GraduationCap, User, ChevronDown } from "lucide-react";

export default function ExplorerSidebar({
  activeTab,
  setActiveTab,
  activeFilter,
  setActiveFilter,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}) {

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
          className={`btn-left-align text-p
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
          className={`btn-left-align text-p
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
              onClick={() => setActiveFilter(label)}
              className="flex items-center justify-between cursor-pointer group"
            >
              <div className={`flex items-center gap-[0.7vw]  transition-colors
                ${activeFilter === label ? "text-blue-600" : ""}
                `}>
                <Icon  className="text-gray-400  icon-size" />
                <span className="text-p">{label}</span>
              </div>
              <ChevronDown  className="text-gray-400 icon-size" />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}