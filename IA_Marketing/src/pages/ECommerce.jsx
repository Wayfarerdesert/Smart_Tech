import Breadcrumb from "../components/Breadcrumb";

import CardFour from "../components/CardFour";
import CardOne from "../components/CardOne";
import CardThree from "../components/CardThree";
import CardTwo from "../components/CardTwo";

import PieChart from "./graphics/Piechart";
import DoughnutChart from "./graphics/DoughnutChart";
import RadarChart from "./graphics/RadarChart";
import BarChart from "./graphics/BarChart";
import BarChartII from "./graphics/BarChartII";
import AreaChart from "./graphics/AreaChart";
import GroupedBar from "./graphics/GroupedBar";
import ScatterChart from "./graphics/ScatterChart";
import BubbleChart from "./graphics/BubbleChart";

// Elementos importados para el mapa
import * as ChartGeo from "chartjs-chart-geo";
import {
  Chart as ChartJS,
  CategoryScale,
  Tooltip,
  Title,
  Legend,
} from "chart.js";
import Map from "./graphics/Geomap";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  ChartGeo.ChoroplethController,
  ChartGeo.ProjectionScale,
  ChartGeo.ColorScale,
  ChartGeo.GeoFeature
);
// Fin de Elementos importados para el mapa

import React, { useRef } from "react";
import html2pdf from "html2pdf.js";

const ECommerce = () => {
  const contentRef = useRef(null);

  const chartWidth = 80;
  const chartHeight = 100;

  const exportToPDF = () => {
    console.log("Button clicked, exportToPDF function called!");
    const content = contentRef.current;

    // Calculate the number of charts that can fit horizontally and vertically
    const horizontalFit = Math.floor((190 - 2 * 5) / chartWidth); // 5 mm spacing between charts
    const verticalFit = Math.floor((277 - 2 * 5) / chartHeight); // 5 mm spacing between charts

    // Calculate the final number of charts that can fit on each A4 page
    const chartsPerPage = horizontalFit * verticalFit;

    // Now you have the number of charts that can fit on each A4 page
    console.log("Charts per A4 page:", chartsPerPage);

    const opt = {
      margin: 10,
      filename: "ecommerce_charts.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(opt).from(content).save();
  };

  const handleDownloadAnalisis = () => {
    const txtURL = "../graficos2/OUT_01_95936.txt";

    const fileName = txtURL.split("/").pop();

    // Crea un elemento de enlace <a> en el DOM
    const downloadLink = document.createElement("a");
    downloadLink.href = txtURL;
    downloadLink.download = fileName;
    downloadLink.click();
  };

  const handleDownloadCluster = () => {
    const txtURL = "../graficos2/descripción.docx";

    const fileName = txtURL.split("/").pop();

    // Crea un elemento de enlace <a> en el DOM
    const downloadLink = document.createElement("a");
    downloadLink.href = txtURL;
    downloadLink.download = fileName;
    downloadLink.click();
  };

  return (
    <>
      <Breadcrumb pageName="Dashboard" />

      {/* BOTONES DE DESCARGAS */}
      <div className="my-3">
        <button
          className="bg-orange-400 hover:bg-orange-500 p-2 rounded-lg mr-2"
          onClick={exportToPDF}
        >
          Exportar a PDF
        </button>

        <button
          className="bg-orange-400 hover:bg-orange-500 p-2 rounded-lg mr-2"
          onClick={handleDownloadAnalisis}
        >
          Descargar Análisis
        </button>

        <button
          className="bg-orange-400 hover:bg-orange-500 p-2 rounded-lg"
          onClick={handleDownloadCluster}
        >
          Descargar descripción de Cluster
        </button>
      </div>

      <div ref={contentRef} className="mt-3">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
          <CardOne />
          <CardTwo />
          <CardThree />
          <CardFour />
        </div>

        {/* GRAFICOS DE LA IMAGENES DE ANALISIS DE */}
        <div className="mt-3 md:gap-6 2xl:gap-7.5 rounded-xl ">
          {/* PRIMER CONJUNTO DE IMAGENES */}
          <div className="mb-4 pb-5 border-b-2 rounded-xl grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white">
            <figure>
              <img
                src="../graficos2/IMG_01_95936_COUNTRY.png"
                className="mx-auto"
              ></img>
              <figcaption className="text-xl text-center my-2 font-bold">
                Venta por Paises
              </figcaption>
            </figure>

            <figure>
              <img
                src="../graficos2/IMG_01_95936_DEALSIZE.png"
                className=" mx-auto"
              ></img>
              <figcaption className="text-xl text-center my-2 font-bold">
                Venta por Tipo de Producto
              </figcaption>
            </figure>

            <figure>
              <img
                src="../graficos2/IMG_01_95936_PRODUCTLINE.png"
                className=" mx-auto"
              ></img>
              <figcaption className="text-xl text-center my-2 font-bold">
                Venta por Tamaño de Pedido
              </figcaption>
            </figure>
          </div>

          {/* SEGUNDO CONJUNTO DE IMAGENES */}
          <div className="mb-4 pb-5 border-b-2 rounded-xl grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white">
            <img
              src="../graficos2/IMG_01_95936_21.png"
              className=" mx-auto"
            ></img>

            <img
              src="../graficos2/IMG_01_95936_23_0.png"
              className="mx-auto"
            ></img>

            <img
              src="../graficos2/IMG_01_95936_23_1.png"
              className="mx-auto"
            ></img>

            <img
              src="../graficos2/IMG_01_95936_23_2.png"
              className="mx-auto"
            ></img>

            <img
              src="../graficos2/IMG_01_95936_23_3.png"
              className="mx-auto"
            ></img>

            <img
              src="../graficos2/IMG_01_95936_23_4.png"
              className="mx-auto"
            ></img>
          </div>

          {/* TERCER CONJUNTO DE IMAGENES */}
          <div className="mb-5 pb-4 border-b-2 rounded-xl bg-white">
            <img
              src="../graficos2/Figure_2.png"
              className="mx-auto"
            ></img>

            <img
              src="../graficos2/Figure_4.png"
              className="mx-auto "
            ></img>
          </div>

          {/* Cuarto CONJUNTO DE IMAGENES */}
          <div className="mb-5 pb-4 border-b-2 rounded-xl grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white">
            <figure>
              <img
                src="../graficos2/IMG_01_95936_22.png"
                className="mx-auto"
              ></img>
              <figcaption className="text-xl text-center my-2 font-bold">
                Gráfico de Correlación
              </figcaption>
            </figure>

            <img
              src="../graficos2/newplot.png"
              className="mx-auto"
            ></img>

            <img
              src="../graficos2/Figure_1.png"
              className=" mx-auto"
            ></img>
          </div>
        </div>

        {/* A PARTIR DE AQUI ES EL CODIGO PARA VISUALIZAR LOS GRAFICOS DE CHARTJS */}
        <div className="mt-3 md:gap-6 2xl:gap-7.5">
          <BarChart />
        </div>

        <div className="mt-3 md:gap-6 2xl:gap-7.5">
          <BarChartII />
        </div>

        <div className="mt-3 md:gap-6 2xl:gap-7.5">
          <AreaChart />
        </div>

        <div className="mt-3 grid grid-cols-10 gap-3 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
          <PieChart />
          <DoughnutChart />
          <RadarChart />
          <GroupedBar />
        </div>

        <div className="mt-3 md:gap-6 2xl:gap-7.5">
          <ScatterChart />
        </div>

        <div className="mt-3 md:gap-6 2xl:gap-7.5">
          <BubbleChart />
        </div>

        {/* <div className="text-center p-10 border border-solid mt-3 bg-white rounded-xl w-full h-full">
          <Map chosenKey="world" />
        </div> */}
      </div>
    </>
  );
};

export default ECommerce;
