import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

function AreaChart() {
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
        backgroundColor: ["rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 2,
        fill: true,
      },
      {
        label: "Ventas 2023",
        data: [5, 2, 3, 8, 12, 19, 3, 13, 6, 9, 7, 7],
        backgroundColor: ["rgba(255, 99, 132, 0.3)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
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
    animation: {
      duration: 3000,
      easing: 'easeInOutQuart',
      delay: (context) => context.datasetIndex * 600, // Agrega un retraso progresivo a cada dataset
    },
  };

  return (
    <div className="col-span-5 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default sm:px-7.5">
      <h1 className="text-xl font-semibold text-black dark:text-white">
        Mi Gráfico de barras
      </h1>
      <div className="p-10 w-full">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default AreaChart;
