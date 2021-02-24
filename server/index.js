const express = require('express');
const path = require('path');
const query = require('../database/index.js');

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

app.delete('/api/cows', (req, res) => {
  //get id from req.body.id
  console.log(req.body)
  query.deleteCow(req.body.id, (err, result) => {
    if (err) {
      res.status(503);
      res.send('db failed to delete cow');
    } else {
      res.status(209);
      res.send('Cow succesfully turned into steak');
    }
  })
})

app.put('/api/cows', (req, res) => {
  // { name: 'azteca cow', description: 'hailing from the yucatan for blood sacrifice!'  }
  console.log(req.body)
  query.updateCow(req.body, (err, result) => {
    if (err) {
      res.status(503);
      res.send('Error updating cow in db');
    } else {
      res.status(210);
      res.send('Successfully updated cow db');
    }
  })

})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
