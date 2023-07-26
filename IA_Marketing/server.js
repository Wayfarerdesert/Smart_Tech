import express from 'express';
// const express = require('express');
import cors from 'cors';
// const cors = require('cors');
import multer from 'multer';
// const multer = require('multer');
import path from 'path';
// const path = require('path');
import fs from 'fs';
// const fs = require('fs');
import { spawn } from 'child_process';
// const { spawn } = require('child_process');

const __dirname = 'uploads';
const app = express();
app.use(cors()); // Habilita el middleware cors para todas las rutas


// *** - eva
// Configuración CORS
// const allowedOrigins = ['http://localhost:3000', 'http://localhost:5173'];
// app.use(cors({
//   origin: function (origin, callback) {
//     if (allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('Acceso no permitido por CORS'));
//     }
//   }
// }));
//*** - eva */


// Configuración de Multer para el almacenamiento de archivos
const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    // Generar un nombre único para el archivo
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
  },
});
const upload = multer({ storage });
// Habilitar CORS para todas las rutas
// app.use(cors());






// Ruta para subir el archivo
app.post('/upload', upload.single('file'), (req, res) => {
  // Obtener el nombre del archivo subido
  const fileName = req.file.filename;
  console.log('Nombre del archivo:', fileName);
  res.send('Archivo subido correctamente.');
});
// Ruta para obtener la lista de archivos en el directorio "uploads"
app.get('/api/files', (req, res) => {
  // Agregar el encabezado Access-Control-Allow-Origin a la respuesta
   res.header('Access-Control-Allow-Origin', 'http://localhost:5174');
 
 const directoryPath = path.join(__dirname, 'uploads');
 fs.readdir(directoryPath, (error, files) => {
   if (error) {
     console.error('Error al leer el directorio:', error);
     res.status(500).json({ error: 'Error al leer el directorio' });
   } else {
     res.json(files);
   }
 });
});

// Ruta para abrir un archivo desde el script de Python
app.get('/open-file/:filename', (req, res) => {
  const { filename } = req.params;

  // Ruta completa al script de Python

  const pythonScriptPath = path.join(__dirname, 'src/py/script.py');

  
  // Ejecutar el script de Python y pasar el nombre del archivo como argumento
  // const pythonScript = spawn('C:/Users/PC/anaconda3/python', [pythonScriptPath, filename]);
  const pythonScript = spawn('python', [pythonScriptPath, filename]);
  console.log(pythonScript);
  // Manejar la salida del script de Python
  pythonScript.stdout.on('data', (data) => {
    console.log(`Salida del script de Python: ${data}`);
  });

  // Manejar los errores del script de Python
  pythonScript.stderr.on('data', (data) => {
    console.error(`Error en el script de Python: ${data}`);
  });

  // Finalizar la respuesta con un mensaje
  res.send('Archivo abierto desde el script de Python.');
});


// Iniciar el servidor

app.listen(5000, () => {
  console.log('Servidor en ejecución en el puerto 5000');
});
