var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var familySchema = new Schema({
	// creating index on field id
	id: {type: Number, index: true},
	familyName: String,
	address: String,
	city: String,
	phone:Number,
	email:String,
	members:[{type: Schema.Types.ObjectId, ref: 'Member'}]
});

var Family = mongoose.model('Famil', familySchema);

module.exports = Family;
