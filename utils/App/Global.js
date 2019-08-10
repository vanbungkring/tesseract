let config = require('config');
let mongoose = require('mongoose');
let output = require('../Common/Output.js');
let vm = require('../../models/vm.js');
let path = require('path').resolve();
let _ = require('underscore');
class Global {
  constructor(global) {
    this.global = global;
    this.configure();
    mongoose.set('debug', true)
  }
  configure() {
    this.global.OUTPUT = output;
    this.global.PATH = path;
    this.global.VM = vm;
    this.global.CONFIG = config;
    this.global._ = _;
  }
}
module.exports = Global;