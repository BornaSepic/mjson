const express = require('express');
const connect = require('./connect');
const bodyParser = require('body-parser');
const app = express();

const router = require('./routes/routes');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(router);

connect('mongodb://localhost:27017/mjson-data')
  .then(() => app.listen(8090, () => {
    console.log('server on http://localhost:8090')
  }))
  .catch(e => console.error(e))
