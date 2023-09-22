const mongoose = require('mongoose');

const Schema = mongoose.Schema;
let UserSchema = new Schema({
	first_name: {
		type: String,
		required: true,
		trim: true,
	},
	last_name: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		max: 255,
		min: 6
	},
	password: {
		type: String,
		required: true,
		max: 1024,
		min: 6,
	},
	deleted: {
		type: 'Bool',
		default: false,
	},
	created_date: {
		type: Date,
		default: Date.now()
	}

});
module.exports = mongoose.model('User', UserSchema);
