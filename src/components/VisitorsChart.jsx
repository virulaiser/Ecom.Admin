import { useState } from "react";
import Chart from "react-apexcharts";

function VisitorsChart() {
  const [chartData, setChartData] = useState({
    options: {
      colors: ["#532e1c", "#c5a880", "#f2ead3"],
      plotOptions: {
        radialBar: {
          hollow: {
            size: "70%",
          },
        },
      },
    },
    series: [44, 55, 41],
    labels: ["A", "B", "C"],
  });
  return (
    <div>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="radialBar"
        width="100%"
      />
    </div>
  );
}

export default VisitorsChart;
