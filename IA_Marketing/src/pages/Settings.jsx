import React, { useState } from "react"; //
import Breadcrumb from "../components/Breadcrumb";
import FileDrop from "./SettingsComponents/FileDrop";
import FileSelect from "./SettingsComponents/FileSelect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faUpload } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { PulseLoader, RingLoader, PacmanLoader } from "react-spinners"; // Importamos el spinner

// import Analyze from "./SettingsComponents/Analyze";

import Analizar from "./SettingsComponents/Analizar";

const Settings = () => {
  // //enlaces botones
  // const [analyzing, setAnalyzing] = useState(false);
  // const [analysisCompleted, setAnalysisCompleted] = useState(false);

  const handleDownload = () => {
    const xlsxURL = "../../spreadsheet/FILE_01_75432.xlsx";
    window.open(xlsxURL, "_blank");
  };
  const handleDownloadPDF = () => {
    const pdfURL = "../../spreadsheet/instrucciones_Excel.pdf";
    window.open(pdfURL, "_blank");
  };

  // const handleAnalyze = () => {
  //   // Aquí realizarías las acciones de análisis de archivos
  //   // Por ahora, solo simularemos un retraso para mostrar el spinner
  //   setAnalyzing(true);
  //   setTimeout(() => {
  //     setAnalyzing(false);
  //     setAnalysisCompleted(true);
  //   }, 5000);
  // };

  return (
    <>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Mis Archivos" />

        {/* PLANTILLA DE EXEL DE REFERENCIA */}
        <div className="mt-3">
          <div className="col-span-5 rounded-xl border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default sm:px-7.5">
            <h1 className="text-xl font-semibold text-black dark:text-white">
              Plantilla Excel
            </h1>
            <div className="px-10 pt-10 w-full">
              <h2>
                Te ofrecemos nuestra plantilla para descargar en formato Excel
                para optimizar el procesado de tus datos de manera eficiente y
                precisa. También te proporcionamos un documento PDF con las
                instrucciones detalladas para rellenarla
              </h2>
              <br></br>

              <div className="flex justify-center mt-4">
                <button
                  className="flex justify-center rounded bg-orange-400 py-2 px-6 font-medium text-white hover:shadow-1 hover:bg-orange-500 hover:text-gray-200"
                  onClick={handleDownloadPDF}
                >
                  <span className="mr-2">Instrucciones PDF</span>
                  <FontAwesomeIcon icon={faDownload} />
                </button>
                <button
                  className="ml-2 flex justify-center rounded bg-orange-400 py-2 px-6 font-medium text-white hover:shadow-1 hover:bg-orange-500 hover:text-gray-200"
                  onClick={handleDownload}
                >
                  <span className="mr-2">Plantilla Excel</span>
                  <FontAwesomeIcon icon={faDownload} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CARGA DE ARCHIVOS */}
        <div className="mt-3  md:gap-6 2xl:gap-7.5">
          <div className="col-span-5 rounded-xl border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default sm:px-7.5">
            <h1 className="text-xl font-semibold text-black dark:text-white">
              Cargar Archivos
            </h1>
            <div className="p-10 w-full">
              <FileDrop />
              {/*
              <h1 className="text-xl font-semibold text-black dark:text-white mt-5">
                Seleccionar Archivos
              </h1>
              <FileSelect /> */}
            </div>

            {/* <div className="flex justify-end">
              <Link to="/user/Settings">
                <button
                  className="flex justify-center rounded bg-orange-400 py-2 px-6 font-medium text-white hover:bg-opacity-70"
                  type="submit"
                >
                  <span className="mr-2">Enviar</span>
                  <FontAwesomeIcon icon={faUpload} />
                </button>
              </Link>
            </div> */}
          </div>
        </div>

        {/* SELECCIONAR ARCHIVOS */}
        <div className="mt-3 md:gap-6 2xl:gap-7.5">
          <div className="col-span-5 rounded-xl border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default sm:px-7.5">
            <h1 className="text-xl font-semibold text-black dark:text-white">
              Seleccionar Archivos
            </h1>
            <div className="p-10 w-full">
              <FileSelect />{" "}
            </div>
          </div>
        </div>

        {/* ANALIZAR DATOS */}
        {/* <div className="mt-3 md:gap-6 2xl:gap-7.5">
          <div className="col-span-5 rounded-xl border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default sm:px-7.5">
            <h1 className="text-xl font-semibold text-black dark:text-white">
              Analizar Archivos
            </h1> */}
            {/* <div className="p-10 w-full">
              <Analizar />
            </div> */}

            {/* <div className="p-10 w-full"> */}
              {/* Mostramos el botón o el spinner según el estado */}
              {/* {analyzing ? (
                <div className="flex justify-center">
                  <PacmanLoader color="#FB923C" size={50} />
                </div>
              ) : analysisCompleted ? (
                <div className="text-center text-green-600 font-semibold">
                  Análisis realizado con éxito
                </div>
              ) : (
                <button
                  className="flex justify-center rounded bg-orange-400 py-2 px-6 font-medium text-white hover:shadow-1 hover:bg-orange-500 hover:text-gray-200"
                  onClick={handleAnalyze}
                >
                  <span className="mr-2">Analizar</span>
                  <FontAwesomeIcon icon={faUpload} />
                </button>
              )}
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Settings;
