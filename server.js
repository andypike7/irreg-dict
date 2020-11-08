const express = require('express');
const config = require('./libs/config');
const ServiceIrreg1  = require('./services/irreg-1');
/*
  COMMANDS via GET requests

  /clear
    clear and rebuild all databases
*/

const app = express();
const expressPort = config.get('express:port');

app.get('/clear', (req, res) => {
  console.log('*** "/clear" is requested!');
  res.send({data: `I'm a data`});
});

app.get('/import/irreg-1', (req, res) => {
  console.log('*** "/import/irreg-1" is requested!');
  ServiceIrreg1();
  res.send({data: `I'm a irreg result!`});
});

app.listen(expressPort, () => {
  console.log(`*** Express is listening on port ${expressPort}.`);
  /*
  logger.log({
    level: 'info',
    message: `*** Express is listening on port ${expressPort}.`,
    additional: 'properties',
  });
  */
});
