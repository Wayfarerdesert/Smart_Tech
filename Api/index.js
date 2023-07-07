const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const routes = require('./src/routes/routes')
app.use('/api/clientes', routes)
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
