import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Scatter } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

function calculateValueRange(data) {
  let minValue = Number.MAX_VALUE;
  let maxValue = Number.MIN_VALUE;

  data.datasets.forEach((dataset) => {
    dataset.data.forEach((value) => {
      if (value < minValue) {
        minValue = value;
      }
      if (value > maxValue) {
        maxValue = value;
      }
    });
  });

  return { minValue, maxValue };
}

function ScatterChart() {
  const data = {
    labels: [
      "0-10",
      "10-20",
      "20-30",
      "20-30",
      "30-40",
      "40-50",
      "50-60",
      "60-70",
      "70-80",
      "80-100",
    ],
    datasets: [
      {
        label: "Ventas x Rango de edades",
        data: [0, 0, 3, 15, 29, 35, 8, 13, 6, 0],
        backgroundColor: ["rgba(54, 162, 235)"],
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const valueRange = calculateValueRange(data);

  // Mapear el rango de valores al rango deseado para el radius
  const minRadius = 4;
  const maxRadius = 15;
  const radiusRange = valueRange.maxValue - valueRange.minValue;
  const mappedRadius = data.datasets[0].data.map(
    (value) =>
      minRadius +
      ((value - valueRange.minValue) * (maxRadius - minRadius)) / radiusRange
  );

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
    elements: {
      point: {
        radius: mappedRadius,
        hoverRadius: 20,
      },
    },
    animation: {
      duration: 3000,
      easing: "easeInOutQuart",
      delay: (context) => context.datasetIndex * 600, // Agrega un retraso progresivo a cada dataset
    },
  };

  return (
    <div className="col-span-5 rounded-xl border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default sm:px-7.5">
      <h1 className="text-xl font-semibold text-black dark:text-white">
        Total ventas por edades
      </h1>
      <div className="p-10 w-full">
        <Scatter data={data} options={options} />
      </div>
    </div>
  );
}

export default ScatterChart;
