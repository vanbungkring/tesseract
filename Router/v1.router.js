var BASED_URL = "/api/v1";
var CONTROLLERS = require(PATH + '/controller/v1/index.js');
module.exports = function(app) {
  console.log('Router initialized');
  app
    .get(BASED_URL + '/app', CONTROLLERS.AppController.index)
    .get(BASED_URL + '/app/ping', CONTROLLERS.AppController.ping);
  }
