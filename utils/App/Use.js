const bodyParser = require('body-parser');
class Use {
  constructor(app) {
    this.app = app;
  }
  configure() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({
      extended: false
    }));
    this.app.use(express.static('public'));
  }

}
module.exports = Use;
