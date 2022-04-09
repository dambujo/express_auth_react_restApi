const { authJwt } = require('../middleware');
const controller = require('../controllers/user');

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept',
    );
    next();
  });
  app.get('/api/autha/all', controller.allAccess);
  app.get('/api/autha/user', [authJwt.verifyToken], controller.userBoard);
  app.get(
    '/api/autha/mod',
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard,
  );
  app.get(
    '/api/autha/admin',
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard,
  );
};
