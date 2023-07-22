import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bubble } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

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

function BubbleChart() {
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
        label: "Producto A",
        data: [0, 0, 3, 15, 29, 35, 8, 13, 6, 0],
        backgroundColor: ["rgba(54, 162, 235)"],
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 2,
        fill: true,
      },
      {
        label: "Producto B",
        data: [0, 0, 1, 35, 39, 15, 17, 3, 2, 0],
        backgroundColor: ["rgba(251, 146, 60)"],
        borderColor: ["rgba(251, 146, 60, 1)"],
        borderWidth: 2,
        fill: true,
      },
      {
        label: "Producto C",
        data: [0, 10, 15, 35, 9, 5, 7, 0, 0, 0],
        backgroundColor: ["rgba(105, 203, 130)"],
        borderColor: ["rgba(105, 203, 130, 1)"],
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
        max: 50,
        ticks: {
          stepSize: 10,
        },
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
    <div className="col-span-12 rounded-xl border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default sm:px-7.5">
      <h1 className="text-xl font-semibold text-black dark:text-white">
        Total ventas por productos
      </h1>
      <div className="p-10 w-full">
        <Bubble data={data} options={options} />
      </div>
    </div>
  );
}

export default BubbleChart;
