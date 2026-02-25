"use client";

import React from "react";
import ReactECharts from "echarts-for-react";

export default function DeclineDashboard() {
  // -------- Left Chart (Stacked Horizontal Bar) --------
  const barOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "shadow" },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      max: 10,
    },
    yAxis: {
      type: "category",
      data: ["Level 1"],
    },
    series: [
      {
        name: "Work-Life Balance",
        type: "bar",
        stack: "total",
        data: [1],
      },
      {
        name: "Coordination",
        type: "bar",
        stack: "total",
        data: [1],
      },
      {
        name: "Career Growth",
        type: "bar",
        stack: "total",
        data: [2],
      },
      {
        name: "Employer Branding",
        type: "bar",
        stack: "total",
        data: [1],
      },
      {
        name: "Interview Feedback",
        type: "bar",
        stack: "total",
        data: [3],
      },
      {
        name: "Lengthy Interview Process",
        type: "bar",
        stack: "total",
        data: [2],
      },
    ],
  };

  // -------- Right Chart (Donut Chart) --------
  const donutOption = {
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        name: "Decline %",
        type: "pie",
        radius: ["60%", "80%"],
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: "center",
          formatter: "100%",
          fontSize: 20,
          fontWeight: "bold",
        },
        data: [
          { value: 10, name: "Level 1" },
        ],
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Left Card */}
        <div className="bg-white rounded-xl shadow p-6">
         
        </div>

        {/* Right Card */}
        <div className="bg-white rounded-xl shadow p-6">
         
        </div>

      </div>
    </div>
  );
}