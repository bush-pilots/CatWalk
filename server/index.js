const express = require('express');
const path = require('path');


const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

app.get('/api/cows', (req, res) => {
  query.getCows((err, result) => {
    if (err) {
      res.status(501);
      res.send(err);
    } else {
      res.status(208);
      res.send(result);
    }
  })
})

app.post('/api/cows', (req, res) => {

  query.createCow(req.body, (err, result) => {
    if (err) {
      res.status(500);
      res.send('Db error: did not save: ', err);
    } else {
      res.status(207);
      console.log(result)
      res.send('Hooray we just wrote to db');
    }
  })
})



app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
