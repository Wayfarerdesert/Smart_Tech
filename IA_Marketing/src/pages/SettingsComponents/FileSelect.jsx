import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faUpload } from "@fortawesome/free-solid-svg-icons";

const FileSelect = () => {
  const [fileList, setFileList] = useState([]);
  const [selectedFile, setSelectedFile] = useState("");

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
      <h2 className="my-3">Selecciona un archivo:</h2>
      <div className="flex items-center">
        <select
          className="text-center p-2 rounded-lg"
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

        <button
          className="flex ml-auto justify-end rounded bg-orange-400 py-2 px-6 font-medium text-gray hover:shadow-1 hover:bg-orange-500 hover:text-gray-200 text-white"
          onClick={handleFileSubmit}
        >
          Enviar archivo
          <FontAwesomeIcon className="ml-2" icon={faUpload} />
        </button>
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
