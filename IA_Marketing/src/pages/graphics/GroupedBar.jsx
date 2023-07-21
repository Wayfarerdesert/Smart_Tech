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

function GroupedBar() {
  const data = {
    labels: ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"],
    datasets: [
      {
        label: "Ventas Semanales",
        data: [12, 19, 3, 5, 2, 3, 8, 13, 6, 9, 2, 5],
        backgroundColor: ["rgba(54, 162, 235, 0.8)"],
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 2,
        stack: "Stack 0",
      },
      {
        label: "Ventas 2023",
        data: [5, 2, 3, 8, 12, 19, 3, 13, 6, 9, 7, 7],
        backgroundColor: ["rgba(255, 99, 132, 0.8)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 2,
        stack: "Stack 0",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        type: "category",
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    elements: {
      bar: {
        borderWidth: 1,
        categoryPercentage: 0.7,
      },
    },
    animation: {
        duration: 3000,
        easing: 'easeInOutQuart',
      },
    barThickness: 15,
  };

  return (
    <div className="col-span-5 rounded-sm border border-stroke bg-white px-1 pt-7.5 pb-5 shadow-default sm:px-7.5">
      <h1 className="text-xl font-semibold text-black dark:text-white">
        Mi Gráfico de barras
      </h1>
      <div className="p-10 w-full">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default GroupedBar;
