import React, { useEffect, useState } from 'react';

const FileSelect = () => {

  const [fileList, setFileList] = useState([]);
  const [selectedFile, setSelectedFile] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/files')
      .then((response) => response.json())
      .then((data) => {
        setFileList(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error al obtener la lista de archivos:', error);
      });
  }, []);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.value);
  };

  const handleFileSubmit = () => {
    if (selectedFile) {
      // const formData = new FormData();
      // formData.append('file', selectedFile);


      const url = 'http://localhost:5000/open-file/'+selectedFile;
      fetch(url, {
        method: 'GET',
        // body: formData,
      })
        .then((response) => response.text())
        .then((result) => {
          console.log(result); // Mensaje de respuesta del servidor
        })
        .catch((error) => {
          console.error('Error al enviar el archivo:', error);
        });
    }
  };
  return (
    <div>
      <h2>Selecciona un archivo:</h2>
      <select value={selectedFile} onChange={handleFileSelect}>
        <option value="">Selecciona un archivo</option>
        {fileList.map((filename) => (
          <option key={filename} value={filename}>
            {filename}
          </option>
        ))}
      </select>
      {selectedFile && (
        <p>Has seleccionado el archivo: {selectedFile}</p>

      )}
        <button onClick={handleFileSubmit}>Enviar archivo</button>

    </div>
  );
};

export default FileSelect;
