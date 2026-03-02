"use client";
import { BarChart3, RotateCcw, TrendingUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import { dummyData } from "../../data/analyticsData";
import { useResponsiveFont } from "../../hooks/useResponsiveFont";
import { getBarOption, getDonutOption } from "../../lib/chartAnalytics";




export const RightComponent = ({
  activeTab,
  activeFilter,
}: {
  activeTab: string;
  activeFilter: string;
}) => {
  const [active, setActive] = useState("levels");

const fontSize = useResponsiveFont();

  const selectedData =
    dummyData[activeFilter as keyof typeof dummyData] ||
    dummyData["Department"];

  return (
    <div className="analytics-dashboard">
      <div className="analytics-dashboard__toolbar">
        <div className="flex items-center justify-between">
          {/* Left Tabs */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActive("levels")}
              className={`btn-with-icon text-p 
              ${active === "levels" ? "is-active" : ""}`}
            >
              <BarChart3 className="icon-size" />
              Levels
            </button>

            <button
              onClick={() => setActive("trend")}
              className={`btn-with-icon text-p
              ${active === "trend" ? "is-active" : ""}`}
            >
              <TrendingUp className="icon-size" />
              Trend Analysis
            </button>
          </div>

          <button className="rounded-full hover:bg-white transition-all">
            <RotateCcw className="text-blue-600 icon-size" />
          </button>
        </div>
      </div>
      <div className="analytics-dashboard_content">
        <div className="analytics-dashboard_barchart">
          <div className="analytics-dashboard__card-header">
            <h2>Decline Reasons - All {selectedData.id}</h2>
            <span>Total Declines - 10</span>
          </div>
          {/* <div className="analytics-dashboard__chart"> */}
            <ReactECharts option={getBarOption(selectedData, fontSize)} className="analytics-dashboard__chart" style={{height:""}} />
          {/* </div> */}
        </div>
        <div className="analytics-dashboard_piechart">
          <h2 className="analytics-dashboard__card-header">
            Decline % - By Level
          </h2>
          {/* <div className="analytics-dashboard__chart"> */}
            <ReactECharts option={getDonutOption(fontSize)} className="analytics-dashboard__chart" 
            style={{ height: "" }}
            />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};
