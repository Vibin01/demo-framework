"use client";
import { BarChart3, RotateCcw, TrendingUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";

const dummyData = {
  Department: {
    id: "Department",
    levels: ["Level 3", "Level 2", "Level 1"],
    series: [
      { name: "Work-Life Balance", data: [25, 20, 15] },
      { name: "Coordination", data: [10, 15, 10] },
      { name: "Career Growth", data: [20, 25, 20] },
      { name: "Employer Branding", data: [15, 10, 15] },
      { name: "Interview Feedback", data: [20, 20, 25] },
      { name: "Feedback", data: [10, 10, 15] },
    ],
  },

  Location: {
    id: "Location",
    levels: ["Level 3", "Level 2", "Level 1"],
    series: [
      { name: "Nagercoil", data: [20, 18, 12] },
      { name: "Chennai", data: [15, 12, 8] },
      { name: "Bangalore", data: [18, 22, 20] },
      { name: "Thiruvananthapuram", data: [12, 10, 15] },
      { name: "Other", data: [20, 18, 25] },
    ],
  },

  "Primary skills": {
    id: "Primary skills",
    levels: ["Level 3", "Level 2", "Level 1"],
    series: [
      { name: "Communication", data: [18, 22, 16] },
      { name: "Leadership", data: [12, 14, 10] },
      { name: "Creativity", data: [25, 28, 22] },
      { name: "Skills", data: [10, 8, 12] },
      { name: "Experience", data: [20, 18, 25] },
    ],
  },

  Recruiter: {
    id: "Recruiter",
    levels: [ "Level 2", "Level 1"],
    series: [
      { name: "Vibin", data: [22, 15, 18] },
      { name: "Akash", data: [18, 12, 10] },
      { name: "Ramesh", data: [15, 20, 22] },
      { name: "Suresh", data: [10, 15, 12] },
      { name: "Other", data: [20, 18, 20] },
      { name: "Demo", data: [15, 20, 18] },
    ],
  },
};

export const RightComponent = ({ activeTab, activeFilter }: { activeTab: string; activeFilter: string }) => {
  const [active, setActive] = useState("levels");

  const [fontSize, setFontSize] = useState(12); 

  const selectedData = dummyData[activeFilter as keyof typeof dummyData] || dummyData["Department"];

  useEffect(() => {
    const updateFontSize = () => {
      const size = Math.max(10, Math.min(window.innerWidth * 0.01, 44));
      setFontSize(size);
    };

    updateFontSize(); // run on mount
    window.addEventListener("resize", updateFontSize);

    return () => window.removeEventListener("resize", updateFontSize);
  }, []);


  const colors = [
  "#DBEAFE",
  "#BFDBFE",
  "#93C5FD",
  "#60A5FA",
  "#3B82F6",
  "#2563EB",
];

const barOption = {
  tooltip: {
    trigger: "axis",
    axisPointer: { type: "shadow" },
  },

legend: {
  orient: "vertical",
  left: "5%",
  bottom: "5%",
  width: "80%",     
  height: "30%",
  itemGap: fontSize-5,
  itemWidth: fontSize+5,   
  itemHeight: fontSize+5,
  textStyle: {
    padding: [0, 0, 0, fontSize-8],
    fontSize: fontSize,
  },
},

  grid: {
    left: "3%",
    right: "6%",
    bottom: "40%",
top: "5%",
    containLabel: true,
  },

  xAxis: {
    type: "value",
    max: 100,
    axisLine: { show: true, lineStyle: { color: "#000", width: 1, }, }, axisLabel: { fontSize: fontSize, },
  },

  yAxis: {
    type: "category",
    data: selectedData.levels,
    axisLine: { show: true, lineStyle: { color: "#000", width: 1, }, },
     axisLabel: { fontSize: fontSize, },
  },

  series: selectedData.series.map((item, index) => ({
  name: item.name,
  type: "bar",
  stack: "total",
  itemStyle: { color: colors[index] },
  emphasis: { focus: "series" },
  data: item.data,
}))
};
  const donutOption = {
  tooltip: {
    trigger: "item",
  },

  legend: {
    orient: "vertical",
    left: "center",
    bottom: 0,
    itemGap: 8,
    itemWidth: fontSize+10,   
    itemHeight: fontSize+10,
    textStyle: {
      fontSize: fontSize,
    },
  },

  series: [
    {
      name: "Decline %",
      type: "pie",
      height: "80%",
      radius: ["65%", "90%"],
      center: ["50%", "50%"], 

      label: {
        show: true,
        position: "center",
        formatter: "100%",
        fontSize: 24,
        fontWeight: "bold",
      },
      data: [
        { value: 10, name: "Level 1" },
      ],
    },
  ],
};

  return (
    <div className="w-[85%] px-[1%] pt-[calc(7%+2vh)] ">
      <div className="w-full bg-gray-50 p-[1.8%] rounded-xl shadow-xl">
        <div className="flex items-center justify-between">
          {/* Left Tabs */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActive("levels")}
              className={`btn-with-icon text-p 
              ${active === "levels" ? "  " : "text-gray-600 bg-blue-600 hover:bg-white"}`}
            >
              <BarChart3 className="icon-size" />
              Levels
            </button>

            <button
              onClick={() => setActive("trend")}
              className={`btn-with-icon text-p
              ${active === "trend" ? "" : "text-gray-600 bg-blue-600 hover:bg-white"}`}
            >
              <TrendingUp className="icon-size" />
              Trend Analysis
            </button>
          </div>

          <button className="p-2 rounded-full hover:bg-white transition-all">
            <RotateCcw className="text-blue-600 icon-size"/>
          </button>
        </div>
      </div>
      <div className="flex gap-[0.8%] mt-[1.5%] ">
        <div className="w-[65%] h-[70vh]   border p-[2%] rounded-2xl">
          <div className="flex justify-between border-b border-gray-200 pb-[2%] mb-[3%]">
            <h2 className="text-h4 font-semibold">
              Decline Reasons - All {selectedData.id}
            </h2>
            <span className="font-medium text-h4">Total Declines - 10</span>
          </div>

          <ReactECharts option={barOption} style={{ height: "90%" }} />
        </div>
        <div className="w-[35%] h-[70vh] border p-[2%] rounded-2xl">
          <h2 className="text-h4 font-semibold border-b border-gray-200 pb-[3%] mb-[3%]">Decline % - By Level</h2>
          <ReactECharts option={donutOption} style={{ height: "90%" }} />
        </div>
      </div>
    </div>
  );
};
