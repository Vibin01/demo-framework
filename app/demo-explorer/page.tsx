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
      <div className="fixed w-full top-0 left-0  max-h-[15vh] py-[1%] z-[10000] flex justify-between items-center px-4 shadow-nav bg-blue-200">
        <div>
          <div className="flex items-center">
            <img src="/ec-connect.svg" alt="img" className="w-[2.7vw] h-auto" />
            <span className="text-h1 pl-2">Hiring Explorer</span>
          </div>
          <span className="text-small font-medium">
            Chart Your Course to Hiring Success
          </span>
        </div>

        <div className="grid grid-cols-6 gap-[0.8vw] h-[72%] w-[75%]">
          {statsData.map((item, index) => (
            <div
              key={index}
              className="text-nowrap h-full bg-[#E6F0FC] rounded-[4px] shadow-nav flex flex-col justify-between p-[2%]"
            >
              <p className="text-center text-h6 font-semibold">{item.title}</p>

              <div className="flex items-center justify-evenly py-[5%]">
                <span className="text-h4">{item.value}</span>

                <div
                  className={`flex items-center px-2 rounded-[4px] justify-between pr-[6%] h-fit py-[1%] font-medium text-h6 ${
                    item.type === "positive"
                      ? "bg-[#CEF2BD] text-[#2B9B43]"
                      : "bg-[#F5DBD6] text-[#F0431D]"
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
      <div className="flex ">
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
