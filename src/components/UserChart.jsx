import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

function UserChart() {
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
        ],
      },
      colors: ["#532e1c", "#c5a880", "#f2ead3"],
      dataLabels: {
        style: {
          colors: ["#fff"],
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
        dataLabels: {
          enabled: false,
        },
      },
    },
    series: [
      {
        name: "Users gained",
        data: [13, 11, 9, 2, 1, 15, 1, 4, 12],
      },
      {
        name: "Users lost",
        data: [3, 2, 1, 0, 0, 2, 4, 0],
      },
    ],
  });
  return (
    chartData && (
      <div>
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          width="100%"
        />
      </div>
    )
  );
}

export default UserChart;
