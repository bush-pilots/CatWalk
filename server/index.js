const express = require('express');
const path = require('path');
const compression = require('compression');

const PORT = 3000;
const app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
