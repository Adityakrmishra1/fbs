const mongoose = require('mongoose');

const Schema = mongoose.Schema;
let UserSchema = new Schema({
	code: {
		type: String,
		required: true,
		default: '',
		trim: true
	},
	first_name: {
		type: String,
		required: true,
		trim: true,
	},
	password: {
		type: String,
		required: true
	},
	created_date: Date

});
module.exports = mongoose.model('User', UserSchema);
