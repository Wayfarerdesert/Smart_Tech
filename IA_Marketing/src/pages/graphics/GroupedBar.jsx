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

import "@fortawesome/fontawesome-free/css/all.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

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
        label: "Ganancias",
        data: [5, 2, 3, 8, 12, 19, 3, 13, 6, 9, 7, 7],
        backgroundColor: ["rgba(255, 99, 132, 0.8)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 2,
        stack: "Stack 0",
      },
    ],
  };

  const options = {
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
      easing: "easeInOutQuart",
    },
    // barThickness: 15,
  };

  return (
    <div className="col-span-5 rounded-xl border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default sm:px-7.5">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <h1 className="text-xl font-semibold text-black dark:text-white">
          Mi Gráfico de barras
        </h1>

        <div className="relative z-20 inline-block">
          <select
            name=""
            id=""
            className="relative z-20 appearance-none bg-transparent py-1 pl-3 pr-8 text-sm text-center font-medium outline-none   rounded-xl cursor-pointer"
          >
            <option value="">Semanal</option>
            <option value="">Mensual</option>
          </select>
          <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">
            {" "}
            <FontAwesomeIcon icon={faArrowDown} />
          </span>
        </div>
      </div>

      <div className="py-10 w-full">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default GroupedBar;
