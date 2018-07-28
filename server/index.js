const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('../database/routes/routes');

const app = express();

app.use(bodyParser.json());
routes(app);

app.use('/', express.static(path.join(__dirname, '/../public/dist')));

const port = process.env.PORT || 5555;

app.listen(port, () => console.log(`Server is listening to port ${port}`));
