"use client";
import { useState } from "react";
import ExplorerSidebar from "./leftcomponent";
import { RightComponent } from "./rightcomponent";
import KPICardGrid from "@/component/KPICardGrid";

const page = () => {

   const [activeTab, setActiveTab] = useState("interview");
    const [activeFilter, setActiveFilter] = useState("Department");

  const statsData: Array<{ label: string; value: number; percent: string; trend: "down" | "up" }> = [
    { label: "Target Fixed", value: 50, percent: "50.0%", trend: "down" },
    { label: "Schedules", value: 84, percent: "70.0%", trend: "down" },
    {
      label: "Interview No-Show",
      value: 5,
      percent: "29.41%",
      trend: "down",
    },
    { label: "Offer", value: 36, percent: "87.8%", trend: "down" },
    { label: "Offer No-Show", value: 2, percent: "15.38%", trend: "down" },
    { label: "Joined", value: 9, percent: "100%", trend: "up" },
  ];

  return (
    <>
      <div className="container-navbar">
        <div>
          <div className="flex-items-center">
            <img src="/ec-connect.svg" alt="img" className="nav-icon" />
            <span className="text-h1 pl-2 font-semibold">Hiring Explorer</span>
          </div>
          <span className="text-small font-medium">
            Chart Your Course to Hiring Success
          </span>
        </div>


        <KPICardGrid data={statsData} />
        
      </div>
      <div className="flex">
        <ExplorerSidebar activeTab={activeTab}
        setActiveTab={setActiveTab}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}/>
        <RightComponent     activeTab={activeTab}
        activeFilter={activeFilter} />
      </div>
    </>
  );
};

export default page;
