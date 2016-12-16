var mon = require('../config');
var crypto = require('crypto');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var LinkSchema = new Schema({
  id: Number,
  url: String,
  baseUrl: String,
  code: String,
  title: String,
  visits: {type: Number, default: 0}
  //timestamps?
});

LinkSchema.methods.initialize = function() {
  console.log('HALP+++++++++++++++++++++++++++++++++++');
  // this.on('creating', function(model, attrs, options) {
  var shasum = crypto.createHash('sha1');
  shasum.update(this.url);
  this.code = shasum.digest('hex').slice(0, 5);
  // });
};

// var Link = db.Model.extend({
//   tableName: 'urls',
//   hasTimestamps: true,
//   defaults: {
//     visits: 0
//   },
//   initialize: function() {
//     this.on('creating', function(model, attrs, options) {
//       var shasum = crypto.createHash('sha1');
//       shasum.update(model.get('url'));
//       model.set('code', shasum.digest('hex').slice(0, 5));
//     });
//   }
// });
var Link = mongoose.model('Link', LinkSchema);
module.exports = Link;
