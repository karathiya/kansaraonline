var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var Schema = mongoose.Schema;
var memberSchema = new Schema({
	// creating index on field id
	id: {type: Number, index: true},
	name: String,
	email: String,
	phone: Number,
	birthDate: Date,
	address: String,
	city: String,
	education: String,
	hobby: String,
	familyId:[{type: Schema.Types.ObjectId, ref: 'Family'}]
});

memberSchema
	.virtual('formatted_birthDate')
	.get(function() {
		var date = new Date(this.birthDate);
		return date.toUTCString();
	});

var Member = mongoose.model('Member', memberSchema);

module.exports = Member;
