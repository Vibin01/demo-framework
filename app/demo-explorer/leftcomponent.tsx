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
    <div className="explorer-container">

      {/* Tabs */}
      <div className="space-y-2">
        <button
          onClick={() => setActiveTab("interview")}
          className={`btn-left-align text-p
            ${
              activeTab === "interview"
                ? "is-active"
                : ""
            }`}
        >
          Interview Explorer
        </button>

        <button
          onClick={() => setActiveTab("offer")}
          className={`btn-left-align text-p
            ${
              activeTab === "offer"
                ? "is-active"
                : ""
            }`}
        >
          Offer Explorer
        </button>
      </div>

      {/* Filters */}
      <div className="">
        <p className=" filter-panel__title ">
          Select a Factors
        </p>

        <div className="filter-panel__list">
          {filters.map(({ icon: Icon, label }) => (
            <div
              key={label}
              onClick={() => setActiveFilter(label)}
              className="filter-panel__item group"
            >
              <div className={`filter-panel__item-content
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