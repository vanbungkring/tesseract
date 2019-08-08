var MODELS = require('./all-models');

var update = function(model, data, params, callback) {
  var query = MODELS[model].updateOne(data, params);
  query.exec(callback);
}
var updateMany = function(model, data, params, callback) {
  var query = MODELS[model].updateMany(data, params);
  query.exec(callback);
}
var create = function(model, data, callback) {
  var newData = new MODELS[model](data);
  newData.save(callback);
};

var createMany = function(model, data, callback) {
  MODELS[model].insertMany(data, callback);
};

var findOne = function(model, data, param, callback) {
  var query = MODELS[model].findOne(data)
    .sort(param.sort ? param.sort : '')
    .populate(param.populate ? param.populate : '')
    .maxTime(300000)
    .select(param.filter ? param.filter : '');
  query.setOptions({
    lean: param.lean ? param.lean : false
  });
  query.exec(callback);
};

var findOneAndUpdate = function(model, data, param, options, callback) {
  MODELS[model].findOneAndUpdate(data, param, options).exec(callback);
};
var count = function(model, data, callback) {
  var query = MODELS[model].count(data)
    .maxTime(300000);
  query.exec(callback);
};

var findAll = function(model, data, param, callback) {
  console.log('debs',param)
  var query = MODELS[model].find(data)
    .sort(param.sort ? param.sort : '')
    .limit(param.perpage ? param.perpage : 10)
    .skip(param.page ? (param.perpage ? param.perpage : 10) * param.page : 0)
    .select(param.select ? param.select : '')
    .populate(param.populate ? param.populate : '')
    .maxTime(300000)
    .select(param.filter ? param.filter : '');

  query.setOptions({
    lean: param.lean ? param.lean : false
  });

  query.exec(callback);

};

var findById = function(model, id, param, callback) {
  var query = MODELS[model]
    .findById(id)
    .populate(param.populate ? param.populate : '')
    .maxTime(300000)
    .select(param.filter ? param.filter : '');
  query.setOptions({
    lean: param.lean ? param.lean : false
  });
  query.exec(callback);
};


var findByIdAndUpdate = function(model, id, data, callback) {
  MODELS[model].findByIdAndUpdate(id, data, {
    new: true
  }, callback);
};

var findByIdAndRemove = function(model, id, callback) {
  MODELS[model].findByIdAndRemove(id, callback);
};

var remove = function(model, query, callback) {
  MODELS[model].remove(query).exec(callback);
};

var aggregate = function(model, query, callback) {
  MODELS[model].aggregate(query).exec(callback);
};

module.exports = {
  create,
  count,
  update,
  updateMany,
  createMany,
  findOne,
  findOneAndUpdate,
  findAll,
  findById,
  findByIdAndUpdate,
  findByIdAndRemove,
  remove,
  aggregate
};
