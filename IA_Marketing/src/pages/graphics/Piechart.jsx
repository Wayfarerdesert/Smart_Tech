import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

import "@fortawesome/fontawesome-free/css/all.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {
  const data = {
    labels: ["Pequeñas Empresas", "Grandes Empresas", "Particular", "Autonomo",  "Institucionales", "VIP"],
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
    datalabels: {
      borderRadius: 10,
      padding: 6,
      display: true,
    },
  };

  return (
    <div className="col-span-5 rounded-xl border border-stroke bg-white bg-opacity-50px-5 pt-7.5 pb-5 shadow-default sm:px-7.5">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <h1 className="text-xl font-semibold text-black dark:text-white">
          Tipo de cliente
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

      <div className="py-10 w-full">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}

export default PieChart;
