const port = 3000;
const express = require('express');
const routes = require('./Services/routes');

const app = express();
app.use('/api', routes);

app.listen(port, () => console.log(` app listening on port ${port}!`));


