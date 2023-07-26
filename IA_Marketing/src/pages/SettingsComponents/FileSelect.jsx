import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { PulseLoader, RingLoader, PacmanLoader } from "react-spinners"; // Importamos el spinner

const FileSelect = () => {
  const [fileList, setFileList] = useState([]);
  const [selectedFile, setSelectedFile] = useState("");

  //enlaces botones
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisCompleted, setAnalysisCompleted] = useState(false);
  const [showAnalyzeButton, setShowAnalyzeButton] = useState(false); // Nuevo estado

  useEffect(() => {
    fetch("http://localhost:5100/api/files")
      .then((response) => response.json())
      .then((data) => {
        setFileList(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de archivos:", error);
      });
  }, []);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.value);
    setShowAnalyzeButton(true);
  };

  const handleAnalyze = () => {
    if (selectedFile) {
      // Aquí realizarías las acciones de análisis de archivos
      setAnalyzing(true);
      setTimeout(() => {
        setAnalyzing(false);
        setAnalysisCompleted(true);
      }, 5000);
    }
  };

  const handleFileSubmit = () => {
    if (selectedFile) {
      // const formData = new FormData();
      // formData.append('file', selectedFile);

      const url = "http://localhost:5100/open-file/" + selectedFile;
      fetch(url, {
        method: "GET",
        // body: formData,
      })
        .then((response) => response.text())
        .then((result) => {
          console.log(result); // Mensaje de respuesta del servidor
        })
        .catch((error) => {
          console.error("Error al enviar el archivo:", error);
        });
    }
  };

  return (
    <div>
      <div className="flex items-center">
        <select
          className="text-center m-auto p-2 rounded-lg cursor-pointer"
          value={selectedFile}
          onChange={handleFileSelect}
        >
          <option value="">Selecciona un archivo</option>
          {fileList.map((filename) => (
            <option key={filename} value={filename}>
              {filename}
            </option>
          ))}
        </select>

        {showAnalyzeButton && (
          <div
            className="flex m-auto justify-end p-10"
            onClick={handleFileSubmit}
          >
            {/* Mostramos el botón o el spinner según el estado */}
            {analyzing ? (
              <div className="flex justify-center">
                <PacmanLoader color="#FB923C" size={50} />
              </div>
            ) : analysisCompleted ? (
              <div className="text-center text-green-600 font-semibold">
                Análisis realizado con éxito
              </div>
            ) : (
              <button
                className="rounded bg-orange-400 py-2 px-6 font-medium text-white hover:shadow-1 hover:bg-orange-500 hover:text-gray-200"
                onClick={handleAnalyze}
              >
                <span className="mr-2">Analizar</span>
                <FontAwesomeIcon icon={faUpload} />
              </button>
            )}
          </div>
        )}

        {/* <button
          className="flex ml-auto justify-end rounded bg-orange-400 py-2 px-6 font-medium text-gray hover:shadow-1 hover:bg-orange-500 hover:text-gray-200 text-white"
          onClick={handleFileSubmit}
        >
          Enviar archivo
          <FontAwesomeIcon className="ml-2" icon={faUpload} />
        </button> */}
      </div>

      {selectedFile && (
        <p className="my-3">
          <span className="font-bold">Has seleccionado el archivo:</span>{" "}
          {selectedFile}
        </p>
      )}
    </div>
  );
};

export default FileSelect;
