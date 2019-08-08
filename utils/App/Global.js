const config = require('config');
const mongoose = require('mongoose');
const output = require('../Common/Output.js');
const vm = require('../../models/vm.js');
const path = require('path').resolve();
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
  }
}
module.exports = Global;