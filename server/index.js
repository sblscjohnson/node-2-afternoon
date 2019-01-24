const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const massive = require('massive');
const app = express();
const ctrl = require('./products_controller');

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then((db) => {
  app.set('db', db)
}).catch((err) => {
  console.log(err)
})

app.post('/api/products', ctrl.create);

app.get('/api/products', ctrl.getAll);

app.get('/api/products/:id', ctrl.getOne);

app.put('/api/products/:id', ctrl.update);

app.delete('/api/products/:id', ctrl.delete);



const port = process.env.PORT;
app.listen(port, () => console.log(`${port} plz work`));