

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const models = require('../models/models');
// const { vine, errors } = require('@vinejs/vine');

// const registrationSchema = vine.object({
// 	first_name: vine.string().minLength(3).maxLength(30).confirmed(),
// 	last_name: vine.string().optional().minLength(3).maxLength(30).confirmed(),
// 	email: vine.string().email(),
// 	password: vine.string().minLength(8).maxLength(30).confirmed()
// });

async function findUser(query) {
	try {
		let USER = models.getModel("USER");
		let user = await USER.findOne(query).lean();
		return Promise.resolve(user);

	} catch (error) {
		console.log('error while getting user..');
		return Promise.reject({
			'message': "error while getting user",
		})
	}
}

let handleRegistrationData = async function (req) {
	try {
		const data = { first_name, last_name, email, password, } = req?.body || {};
		// let output = await vine.validate({ registrationSchema, data });
		console.log(data);
		// search for the existing user in the db using email.
		let user = models.getModel("USER");
		console.log(user);
		let query = { 'email': email, deleted: false };
		let existingUser = await findUser(query);
		if (existingUser) {
			console.log("userId ::: " + existingUser);
			return Promise.reject({
				message: "user already exist in system with same email",
			});
		}

		const newUser = new user({
			first_name: data?.first_name,
			last_name: data?.last_name,
			email: data?.email,
			password: data?.password,
		});
		const savedUser = await newUser.save();
		console.log("User Saved to Db");
		return Promise.resolve({
			"message": "user saved to db",
			"login_id": email,
		});
	} catch (error) {
		// if (error instanceof errors.E_VALIDATION_ERROR) {
		// 	return Promise.reject(new Error("Incorrect Request body.."));
		// }
		return Promise.reject({
			message: "Error while processing the request " + error,
		});
	}


}

function handleLongin(req) {

}




module.exports = {
	handleRegistrationData: handleRegistrationData,
	handleLongin: handleLongin,

}
