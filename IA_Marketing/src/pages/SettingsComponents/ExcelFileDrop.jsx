import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./ExcelFileDrop.css";

const ExcelFileDrop = ({ onFileDrop }) => {
  const [fileUploaded, setFileUploaded] = useState(false);

  const handleDrop = useCallback(
    (acceptedFiles) => {
      // Verificar si se ha soltado algún archivo
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        // Verificar que el archivo sea de tipo Excel
        if (
          file.type ===
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        ) {
          onFileDrop(file);
          // setFileUploaded(true); // Establecer el estado para indicar que se ha cargado un archivo
          // Esperar 1000 ms antes de establecer el estado
          setTimeout(() => {
            setFileUploaded(true); // Establecer el estado para indicar que se ha cargado un archivo
          }, 1000);
        } else {
          alert("Por favor, selecciona un archivo de Excel válido.");
        }
      }
    },
    [onFileDrop]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
  });

  // Recargar la página después de que se haya procesado el archivo
  if (fileUploaded) {
    window.location.reload();
  }

  return (
    <div
      {...getRootProps()}
      className={`dropzone ${isDragActive ? "active" : ""}`}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Suelta el archivo de Excel aquí...</p>
      ) : (
        <p>
          Arrastra y suelta un archivo de Excel aquí, o{" "}
          <span className="text-orange-400 justify-center items-center h-full">
            haz click para seleccionarlo.
          </span>
        </p>
      )}
    </div>
  );
};

export default ExcelFileDrop;
