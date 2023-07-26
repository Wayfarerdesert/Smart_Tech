import React from 'react';
import ExcelFileDrop from './ExcelFileDrop';
// import { response } from 'express';


const FileDrop = () => {
  const handleFileDrop = (file) => {
    // Crear una instancia de FormData para enviar el archivo al servidor
    const formData = new FormData();
    formData.append('file', file);

    // Enviar el archivo al servidor
    fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.text())
        // console.log(response)
      .then((result) => {
        console.log(result); // Mensaje de respuesta del servidor
      
      })
      .catch((error) => {
        console.error('Error al subir el archivo:', error);
      });
  };



  return (

    <div>

    <div className="FileDrop">
      {/* <h1 className="font-medium text-black dark:text-white mb-4">Arrastra y suelta un archivo de Excel</h1> */}
      <div id="FileUpload" className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border-2 border-dashed border-warning bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5">
        
        <input type="file" accept="image/*" className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"/>
        <div className="flex flex-col items-center justify-center space-y-3">
          
          {/* <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"> </svg>
          </span> */}

          {/* <p>Arrastra y suelta un archivo de Excel aquí, o <span className="text-warning flex justify-center items-center h-full">haz clic para seleccionarlo</span></p>
          <p className="mt-1.5">(solo archivos XLSX)</p> */}

          {/* <h1>Arrastra y suelta un archivo de Excel</h1> */}
          <ExcelFileDrop onFileDrop={handleFileDrop} />
          </div>
        </div>
    </div>

    </div>

  );
};

export default FileDrop;


