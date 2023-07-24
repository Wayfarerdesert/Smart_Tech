const fs = require('fs');
const { spawn } = require('child_process');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const subirArchivo = (req, res) => {
    const fileName = req.file.filename;
    if (!fileName) {
        return res.status(400).send('No se proporcionó ningún archivo.');
    } else {
        console.log('Nombre del archivo:', fileName);
        res.send('Archivo subido correctamente.');
    }
};
const allFiles = (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    const directoryPath = path.join(__dirname, 'uploads');
    fs.readdir(directoryPath, (error, files) => {
        if (error) {
            console.error('Error al leer el directorio:', error);
            res.status(500).json({ error: 'Error al leer el directorio' });
        } else {
            res.json(files);
        }
    });
};

// Ruta para abrir un archivo desde el script de Python
const scriptPython = (req, res) => {
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
};

module.exports = { subirArchivo, allFiles, scriptPython };