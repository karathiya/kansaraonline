var mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost:27017/test');
mongoose.connect('mongodb://sagar:sagar@ds121089.mlab.com:21089/heroku_gxzdbmp8');
//mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost:27017/test');

module.exports = mongoose;
