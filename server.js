const express = require("express");
const app = express();
const path = require("path");
const PORT = 3001;
const queries = require("./queries");
const chalk = require('chalk');
const _c = chalk.bgBlueBright.bold.white;
const cors = require('cors');

//middlewear
//app.use => hey express use this middleware, what is middlewear?  Middlewear are functions that express passes request through BEFORE passing
//them to routing functions such as GET, POST etc.
app.use(express.static(path.join(__dirname, "./frontend/build")));
app.use(express.json());

//client always initiates first contact
//incoming get requests routed here
app.get('/api/cows', (req, res) => {
  // run your query here
  res.send("hello from the server at api cows GET!");
});

//incoming post requests routed here
app.post('/api/cows', (req, res) => {
  // run your query here
  res.json({requestBody: req.body})
});

app.listen(PORT, () => {
  console.log(`server is running and listening on port ${PORT}`);
});
