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

function BarChartII() {
  const data = {
    labels: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
    datasets: [
      {
        label: "Ventas 2022",
        data: [12, 19, 3, 5, 2, 3, 8, 13, 6, 9, 2, 5],
        backgroundColor: ["rgba(54, 162, 235, 0.8)"],
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 2,
      },
      {
        label: "Ventas 2023",
        data: [5, 2, 3, 8, 12, 19, 3, 13, 6, 9, 7, 7],
        backgroundColor: ["rgba(255, 99, 132, 0.8)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 2,
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
    // Ajustar el tamaño de las barras aquí
    elements: {
      bar: {
        borderWidth: 1,
        barThickness: 1, // Tamaño de las barras en píxeles
        categoryPercentage: 0.7, // Espaciado entre las barras (valor entre 0 y 1)
      },
    },
  };

  return (
    <div className="col-span-5 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default sm:px-7.5">
      <h1 className="text-xl font-semibold text-black dark:text-white">
        Mi Gráfico de barras
      </h1>
      <div className="p-10 w-full">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default BarChartII;
