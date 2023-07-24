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
        backgroundColor: (context) => {
          const bgColor = "rgba(54, 162, 235, 0.2)";
          const bgColorNearStart = "rgba(54, 162, 235, 0.05)";

          if (!context.chart.chartArea) {
            return;
          }

          const {
            ctx,
            chartArea: { top, bottom },
          } = context.chart;
          const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
          gradientBg.addColorStop(0.5, bgColor);
          gradientBg.addColorStop(0.9, bgColorNearStart);

          return gradientBg;
        },
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 2,
        fill: true,
      },
      {
        label: "Ventas 2023",
        data: [5, 2, 3, 8, 12, 19, 3, 13, 6, 9, 7, 7],
        backgroundColor: (context) => {
          const bgColor = "rgba(255, 99, 132, 0.2)";
          const bgColorNearStart = "rgba(255, 99, 132, 0.05)";

          if (!context.chart.chartArea) {
            return;
          }

          const {
            ctx,
            chartArea: { top, bottom },
          } = context.chart;
          const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
          gradientBg.addColorStop(0.5, bgColor);
          gradientBg.addColorStop(0.9, bgColorNearStart);

          return gradientBg;
        },

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
    elements: {
      point: {
        radius: 6, // Ajusta el tamaño de los puntos aquí
        hoverRadius: 12, // Ajusta el tamaño de los puntos al hacer hover aquí
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
        Mi Gráfico de barras
      </h1>

      <div className="flex items-start justify-between gap-3 mt-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-47.5">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-primary">Ingresos Totales</p>
              <p className="text-sm font-medium">12.04.2023 - 12.05.2023</p>
            </div>
          </div>
          <div className="flex min-w-47.5">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-secondary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-secondary">Ventas Totales</p>
              <p className="text-sm font-medium">12.04.2023 - 12.05.2023</p>
            </div>
          </div>
        </div>

        <div className="flex w-full max-w-45 justify-end">
          <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
            <button className="rounded bg-white py-1 px-3 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark">
              Día
            </button>
            <button className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
              Semana
            </button>
            <button className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
              Mes
            </button>
          </div>
        </div>
      </div>

      <div className="py-10 ">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default AreaChart;
