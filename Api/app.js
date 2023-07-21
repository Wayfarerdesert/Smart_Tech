const express = require('express');
const myconnection = require('express-myconnection');
const session = require('express-session');
const bodyParser = require('body-parser');
const routes = require('./src/routes/usuarios.routes');
const cors = require('cors');

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
app.use(cors());

app.use('/api/usuarios', routes)
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
