const express = require('express');
const MJSON = require('../schemas/mjson/mjson');

const router = express.Router();

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

router.get('/json/*', async (req, res) => {
  const mjsonID = req.originalUrl.replace('/', '');
  const mjsonData = await MJSON.findById(mjsonID).exec();
  res.status(200).json(mjsonData.data);
});

router.post('/', async (req, res) => {
  const newMJSON = req.body;
  const mjson = await MJSON.create(newMJSON);
  res.send(mjson);
});

router.get('/', async (req, res) => {
  res.send('testic');
});

module.exports = router;

