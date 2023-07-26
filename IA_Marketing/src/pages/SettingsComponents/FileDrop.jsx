import React from 'react';
import ExcelFileDrop from './ExcelFileDrop';
// import FileSelect from './components/FileSelect';

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
      .then((result) => {
        console.log(result); // Mensaje de respuesta del servidor

      })
      .catch((error) => {
        console.error('Error al subir el archivo:', error);
      });
  };



  return (
    <div className="App">
      <h2>Aquí podras subir tu archivo de Excel (Solo formato .XLSX)</h2><br></br>
      <ExcelFileDrop onFileDrop={handleFileDrop} />
      {/* <FileSelect /> */}
    </div>

  );
};

export default FileDrop;


