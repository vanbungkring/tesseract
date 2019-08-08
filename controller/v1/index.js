let fs = require('fs');

//require all the models
var controllers = {};
let names = fs.readdirSync('./controller/v1');

names.forEach(name => {
  if (!name.match(/\.js$/)) return;
  if (name === 'index.js') return;
  let model = require('./' + name);

  controllers[name.replace('.js', '')] = model;
});
module.exports = controllers;
