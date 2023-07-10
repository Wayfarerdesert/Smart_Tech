const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const routes = require('./src/routes/clientes.routes')

const app = express();
const port = process.env.PORT || 5000;
//app.use(cookieParser);
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/api/clientes', routes)
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
