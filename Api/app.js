const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const routes = require('./src/routes/usuarios.routes');
const routesPred = require('./src/routes/predic.routes');
const cors = require('cors');
const multer = require('multer');
const path = require('path');


const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))
const storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
        // Generar un nombre único para el archivo
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const uniqueSuffix = 'file-01' + '-' + Math.round(Math.random() * 1e5);
        const fileExtension = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
    },
});

const upload = multer({ storage });
app.use(cors());
// const allowedOrigins = ['http://localhost:3000', 'http://localhost:5173'];
// app.use(cors({
//     origin: function (origin, callback) {
//         if (allowedOrigins.includes(origin)) {
//             callback(null, true);
//         } else {
//             callback(new Error('Acceso no permitido por CORS'));
//         }
//     }
// }));

app.use('/api/usuarios', routes)
app.use('/api/predic', routesPred)

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
