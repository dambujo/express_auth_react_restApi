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
// Routes
require('./routers/auth')(app);
require('./routers/user')(app);
// simple route
app.get('/', (req, res) => {
  res.json({
    message:
      'Welcome to NodeJs and React Authorization and Authetication application.',
  });
});
// set port, listen for requests
const { API_PORT } = process.env;
const PORT = process.env.PORT || API_PORT;
app.listen(PORT, () => {
  console.log(`The Server is Up on port ${PORT}.`);
});

const db = require('./models');
const Role = db.role;

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: 'user',
      }).save((err) => {
        if (err) {
          console.log('error', err);
        }
        console.log("added 'user' to roles collection");
      });
      new Role({
        name: 'moderator',
      }).save((err) => {
        if (err) {
          console.log('error', err);
        }
        console.log("added 'moderator' to roles collection");
      });
      new Role({
        name: 'admin',
      }).save((err) => {
        if (err) {
          console.log('error', err);
        }
        console.log("added 'admin' to roles collection");
      });
    }
  });
}
