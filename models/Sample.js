let mongoose = require('mongoose');
let Schema = mongoose.Schema;
if (mongoose.connection.readyState === 0) {
  mongoose.connect(require('./connection-string'));
}


var schema = new Schema({
  'createdAt': {
    type: Date,
    default: Date.now
  },
  'updatedAt': {
    type: Date,
    default: Date.now
  }
});

schema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

schema.pre('update', function() {
  this.update({}, {
    $set: {
      updatedAt: Date.now()
    }
  });
});

schema.pre('findOneAndUpdate', function() {
  this.update({}, {
    $set: {
      updatedAt: Date.now()
    }
  });
});

schema.set('toJSON', {
  virtuals: true, // serialize virtuals
  transform: function(doc, ret, options) {
    // add an id property
    ret.id = ret._id;
    // remove a property like password or whatever
    delete ret._id;
    return ret;
  }
});



module.exports = mongoose.model('Sample', schema);
