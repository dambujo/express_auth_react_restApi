const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./config/database').connect();
const app = express();

var corsOptions = {
  origin: 'http://localhost:8081',
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get('/', (req, res) => {
  res.json({
    message:
      'Welcome to NodeJs and React Authorization and Authetication application.',
  });
});
