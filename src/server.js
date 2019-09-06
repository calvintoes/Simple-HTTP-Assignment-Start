/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const jsonHandler = require('./jsonResponses.js');
const textHandler = require('./textResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (req, res) => {
  console.log(req.url);

  switch (req.url) {
    case '/':
      htmlHandler.getIndex(req, res);
      break;
    case '/page2':
      htmlHandler.getPage2(req, res);
      break;
    case '/hello':
      textHandler.getHello(req,res);
      break;
    case '/time':
      textHandler.getTime(req,res);
      break;
    case '/getHelloJSON':
      jsonHandler.getHelloJSON(req,res);
      break;
    case '/getTimeJSON':
      jsonHandler.getTimeJSON(req, res);
      break;
    default:
      htmlHandler.getIndex(req, res);
      break;
  }
};

http.createServer(onRequest).listen(port);

console.log(`Listening on localhost:${port}`);
