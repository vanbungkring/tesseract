const express = require('express');
const path = require('path');
const AppUse = require('./utils/App/Use.js');
const Global = require('./utils/App/Global');
class App {
  constructor() {
    this.app = express();
    this.configure()
  }
  configure() {
    new Global(global);
    new AppUse(this.app);
    require(PATH + '/Router/v1.router.js')(this.app);
  }
}

module.exports = App
