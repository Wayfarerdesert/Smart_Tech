import React from 'react';
import FileSelect from './FileSelect';
// import { response } from 'express';


const Select = () => {
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

    <>

    <div className="Select">
    <button
                    className={`bg-blue-500 text-white px-4 py-2 rounded my-3 ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    onClick={!loading ? AnalyzeButton : null}
                >
                    {loading ? (
                        <span className="loading-dots">
                        {statusMessage}
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </span>
                    ) : (
                    "Analizar"
                    )}
                </button>

        <FileSelect />

    </div>

    </>

);
};

export default Select;