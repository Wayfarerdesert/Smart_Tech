import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart() {
  const data = {
    labels: ["ene - mar", "abr - jun", "jul - sep", "oct - dic"],
    datasets: [
      {
        label: "2021",
        data: [11, 15, 5,7],
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          // "rgba(54, 162, 235, 0.4)",
          // "rgba(255, 206, 86, 0.4)",
          // "rgba(75, 192, 192, 0.4)",
          // "rgba(153, 102, 255, 0.4)",
          // "rgba(255, 159, 64, 0.4)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          // "rgba(54, 162, 235, 1)",
          // "rgba(255, 206, 86, 1)",
          // "rgba(75, 192, 192, 1)",
          // "rgba(153, 102, 255, 1)",
          // "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
      {
        label: "2022",
        data: [12, 19, 9, 10],
        backgroundColor: [
          // "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.7)",
          // "rgba(255, 206, 86, 0.4)",
          // "rgba(75, 192, 192, 0.4)",
          // "rgba(153, 102, 255, 0.4)",
          // "rgba(255, 159, 64, 0.4)",
        ],
        borderColor: [
          // "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          // "rgba(255, 206, 86, 1)",
          // "rgba(75, 192, 192, 1)",
          // "rgba(153, 102, 255, 1)",
          // "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Calcular el valor máximo de data
  const maxValue = Math.max(...data.datasets[0].data) + 5;

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: maxValue,
      },
      x: {
        type: "category",
      },
    },
    animation: {
      delay: (context) => {
        let delay = 0;
        if (context.type === "data") {
          delay = context.dataIndex * 400 + context.datasetIndex * 100;
        }
        return delay;
      },
    },
  };

  return (
    <div className="col-span-5 rounded-xl border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default sm:px-7.5">
      <h1 className="text-xl font-semibold text-black dark:text-white">
        Tamaño de pedido por Trimestre
      </h1>
      <div className="p-10 w-full">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default BarChart;