"use client";
import { BarChart3, RotateCcw, TrendingUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";

export const RightComponent = () => {
  const [active, setActive] = useState("levels");

  const [fontSize, setFontSize] = useState(12);

  useEffect(() => {
    const updateFontSize = () => {
      const size = Math.max(10, Math.min(window.innerWidth * 0.01, 44));
      setFontSize(size);
    };

    updateFontSize(); // run on mount
    window.addEventListener("resize", updateFontSize);

    return () => window.removeEventListener("resize", updateFontSize);
  }, []);

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
    data: ["Level 1", "Level 2", "Level 3", ],
    axisLine: { show: true, lineStyle: { color: "#000", width: 1, }, },
     axisLabel: { fontSize: fontSize, },
  },

  series: [
     {
      name: "Work-Life Balance",
      type: "bar",
      stack: "total",
      color: "#A7C7E7",
      data: [10, 20, 30,],
    
      emphasis: {
        focus: "series",
      },
    },
    {
      name: "Coordination",
      type: "bar",
      stack: "total",
      color: "#7FB3D5",
      data: [10, 15, 20,],
      emphasis: {
        focus: "series",
      },
    },
    {
      name: "Career Growth",
      type: "bar",
      stack: "total",
      color: "#4A90E2",
      data: [20, 25, 15,],
     
      emphasis: {
        focus: "series",
      },
    },
    {
      name: "Employer Branding",
      type: "bar",
      stack: "total",
      color: "#2E86DE",
      data: [10, 10, 15],
     
      emphasis: {
        focus: "series",
      },
    },
    {
      name: "Interview Feedback",
      type: "bar",
      stack: "total",
      color: "#1B4F72",
      data: [30, 30, 20, 45, 30],
     
      emphasis: {
        focus: "series",
      },
    },
     {
      name: "Feedback",
      type: "bar",
      stack: "total",
      color: "#1B4F72",
      data: [30, 3, 20],
     
      emphasis: {
        focus: "series",
      },
    },
  ],
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
              className={`flex items-center gap-2 
              text-p px-[8%] py-[2%] 
              rounded-lg font-medium transition-all
              bg-white shadow-sm text-gray-900
              ${active === "levels" ? "  " : "text-gray-600 hover:bg-white"}`}
            >
              <BarChart3 className="size-[clamp(8px,1.2vw,52px)]" />
              Levels
            </button>

            <button
              onClick={() => setActive("trend")}
              className={`flex items-center gap-2  min-w-fit
             text-p px-[8%] py-[2%] 
              rounded-lg font-medium transition-all
                bg-white shadow-sm text-gray-900
              ${active === "trend" ? "" : "text-gray-600 hover:bg-white"}`}
            >
              <TrendingUp className="size-[clamp(8px,1.2vw,52px)]" />
              Trend Analysis
            </button>
          </div>

          {/* Right Refresh Icon */}
          <button className="p-2 rounded-full hover:bg-white transition-all">
            <RotateCcw className="text-blue-600"/>
          </button>
        </div>
      </div>
      <div className="flex gap-[0.8%] mt-[1.5%] ">
        <div className="w-[65%] h-[70vh]   border p-[2%] rounded-2xl">
          <div className="flex justify-between border-b border-gray-200 pb-[2%] mb-[3%]">
            <h2 className="text-h4 font-semibold">
              Decline Reasons - Across Levels
            </h2>
            <span className="font-medium text-h4">Total Declines - 10</span>
          </div>

          <ReactECharts option={barOption} style={{ height: "90%" }} />
        </div>
        <div className="w-[35%] h-[70vh] border p-[2%] rounded-2xl">
          <h2 className="text-h4 font-semibold border-b border-gray-200 pb-[2%] mb-[3%]">Decline % - By Level</h2>

          <ReactECharts option={donutOption} style={{ height: "90%" }} />
        </div>
      </div>
    </div>
  );
};
