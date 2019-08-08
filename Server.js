const App = require('./App.js');
const application = new App();
var server = application.app.listen(CONFIG.APP.port, function() {
  console.log('Application ' + CONFIG.APP.name + "with port : " + CONFIG.APP.port)
});
