import  { useCallback } from 'react'; //React,
import { useDropzone } from 'react-dropzone';
import './ExcelFileDrop.css' ;
import { PropTypes } from 'prop-types';


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
        <p>Arrastra y suelta un archivo de Excel aquí, o <span className="text-warning justify-center items-center h-full">haz clic para seleccionarlo </span><span className="mt-1.5">(solo archivos XLSX)</span> </p>
        
      )}
    </div>
  );
};

//para el error con PropTypes

ExcelFileDrop.propTypesropTypes = {
  onFileDrop: PropTypes.string.isRequired
}

export default ExcelFileDrop;
