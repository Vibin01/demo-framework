import React from "react";
import ReactECharts from "echarts-for-react";

const TrendChart = () => {


  const option = {
   

    tooltip: {
      trigger: "axis",
    },

    grid: {
      left: "5%",
      right: "5%",
      bottom: "8%",
      top: "8%",
      containLabel: true,
    },

    xAxis: {
      type: "category",
      data: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ],
      axisLine: {
        lineStyle: { color: "#9CA3AF" },
      },
      axisTick: { show: false },
    },

    yAxis: {
      type: "value",
      min: 0,
      max: 8,
      interval: 2,
      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "#E5E7EB",
        },
      },
      axisLine: {
        lineStyle: { color: "#9CA3AF" },
      },
    },

    series: [
      {
        name: "Declines",
        type: "line",
        smooth: true,
        data: [8, 2, 0, 6, 1, 7, 1, 3, null, null, null, null],
        symbol: "circle",
        symbolSize: 10,
        lineStyle: {
          width: 3,
          color: "#3B82F6",
        },
        itemStyle: {
          color: "#60A5FA",
        },
      },
    ],
  };

  return  <div className="analytics-dashboard_trendchart ">
    <h2 className="text-h2 ">Interview Decline Trend Over Time</h2>
      <ReactECharts
        option={option}
        className="analytics-dashboard__chart"
style={{height:""}}
      />
    </div>;
};

export default TrendChart;