export const getBarOption = (selectedData: any, fontSize: number) => {
  const colors = [
    "#DBEAFE",
    "#BFDBFE",
    "#93C5FD",
    "#60A5FA",
    "#3B82F6",
    "#2563EB",
  ];

  return {
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
      itemGap: fontSize - 5,
      itemWidth: fontSize + 5,
      itemHeight: fontSize + 5,
      textStyle: {
        padding: [0, 0, 0, fontSize - 8],
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
      axisLine: { show: true, lineStyle: { color: "#000", width: 1 } },
      axisLabel: { fontSize: fontSize },
    },

    yAxis: {
      type: "category",
      data: selectedData.levels,
      axisLine: { show: true, lineStyle: { color: "#000", width: 1 } },
      axisLabel: { fontSize: fontSize },
    },

    series: selectedData.series.map((item: any, index: number) => ({
      name: item.name,
      type: "bar",
      stack: "total",
      itemStyle: { color: colors[index] },
      emphasis: { focus: "series" },
      data: item.data,
    })),
  };
};

export const getDonutOption = (fontSize: number) => ({
    tooltip: {
      trigger: "item",
    },

    legend: {
      orient: "vertical",
      left: "center",
      bottom: 0,
      itemGap: 8,
      itemWidth: fontSize + 10,
      itemHeight: fontSize + 10,
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
        data: [{ value: 10, name: "Level 1" }],
      },
    ],
});