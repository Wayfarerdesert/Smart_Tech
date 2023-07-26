import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const ExcelFileDrop = ({ onFileDrop }) => {
  const handleDrop = useCallback(
    (acceptedFiles) => {
      // Verificar si se ha soltado algún archivo
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        // Verificar que el archivo sea de tipo Excel
        if (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
          onFileDrop(file);
        } else {
          alert('Por favor, selecciona un archivo de Excel válido.');
        }
      }
    },
    [onFileDrop]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: handleDrop });

  return (
    <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Suelta el archivo de Excel aquí...</p>
      ) : (
        <p>Arrastra y suelta un archivo de Excel aquí, o <span className="text-orange-400 justify-center items-center h-full">haz click para seleccionarlo.</span></p>
      )}
    </div>
  );
};

export default ExcelFileDrop;

