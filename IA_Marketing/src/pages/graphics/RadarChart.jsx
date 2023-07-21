import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

function RadarChart() {
  const data = {
    labels: ["One", "Two", "Three", "Four", "Five"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5],
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
      {
        label: "# of Votes",
        data: [3, 25, 13, 15, 8],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(153, 102, 255, 0.4)",
        ],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(153, 102, 255, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {};

  return (
    <div className="col-span-5 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default sm:px-7.5">
      <h1 className="text-xl font-semibold text-black dark:text-white">
        Mi Gráfico de Radar
      </h1>
      <div className="p-10 w-full">
        <Radar data={data} options={options} />
      </div>
    </div>
  );
}

export default RadarChart;
