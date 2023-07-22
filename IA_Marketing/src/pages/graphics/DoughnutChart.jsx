import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import "@fortawesome/fontawesome-free/css/all.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart() {
  const data = {
    labels: ["One", "Two", "Three", "Four", "Five", "Six"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
        borderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "left",
      },
    },
  };

  return (
    <div className="col-span-5 rounded-xl border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default sm:px-7.5">

      <div className="mb-3 justify-between gap-4 sm:flex">
        <h1 className="text-xl font-semibold text-black dark:text-white">
          Mi Gráfico de Dona
        </h1>

        <div className="relative z-20 inline-block">
          <select
            name=""
            id=""
            className="relative z-20 appearance-none bg-transparent py-1 pl-3 pr-8 text-sm text-center font-medium outline-none   rounded-xl cursor-pointer"
          >
            <option value="">Mensual</option>
            <option value="">Anual</option>
          </select>
          <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">
            {" "}
            <FontAwesomeIcon icon={faArrowDown} />
          </span>
        </div>
      </div>

      <div className="py-10 w-full mx-auto flex justify-center">
        <Doughnut data={data} options={options} />
      </div>

      <div className="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
        <div className="w-full px-8 sm:w-1/2">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-primary"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Desktop </span>
              <span> 65% </span>
            </p>
          </div>
        </div>
        <div className="w-full px-8 sm:w-1/2">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#6577F3]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Tablet </span>
              <span> 34% </span>
            </p>
          </div>
        </div>
        <div className="w-full px-8 sm:w-1/2">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#8FD0EF]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Mobile </span>
              <span> 45% </span>
            </p>
          </div>
        </div>
        <div className="w-full px-8 sm:w-1/2">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#0FADCF]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Unknown </span>
              <span> 12% </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoughnutChart;
