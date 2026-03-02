"use client";
import { useState } from "react";
import ExplorerSidebar from "./leftcomponent";
import { RightComponent } from "./rightcomponent";

const page = () => {

   const [activeTab, setActiveTab] = useState("interview");
    const [activeFilter, setActiveFilter] = useState("Department");

  const statsData = [
    { title: "Target Fixed", value: 50, percent: "50.0%", type: "negative" },
    { title: "Schedules", value: 84, percent: "70.0%", type: "negative" },
    {
      title: "Interview No-Show",
      value: 5,
      percent: "29.41%",
      type: "negative",
    },
    { title: "Offer", value: 36, percent: "87.8%", type: "negative" },
    { title: "Offer No-Show", value: 2, percent: "15.38%", type: "negative" },
    { title: "Joined", value: 9, percent: "100%", type: "positive" },
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

        <div className="nav-summary-card-grid">
          {statsData.map((item, index) => (
            <div
              key={index}
              className="nav-summary-card-container"
            >
              <p className="text-center text-h6 font-semibold">{item.title}</p>

              <div className="nav-summary-card-value-container">
                <span className="text-h4">{item.value}</span>

                <div
                  className={`nav-summary-badge text-h6 ${
                    item.type === "positive"
                      ? "is_active"
                      : "f"
                  }`}
                >
                  <div>
                    <span>{item.type === "positive" ? "+" : "-"}</span>
                    <span>{item.percent}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
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
