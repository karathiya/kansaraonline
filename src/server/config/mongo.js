var mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost:27017/test');
//mongoose.connect('mongodb://sagar:sagar@ds121099.mlab.com:21099/heroku_pkhz3bmd');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost:27017/test');

module.exports = mongoose;
