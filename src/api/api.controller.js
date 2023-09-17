const User = require('../models/User');

let register = async function (req, res, next) {
	try {
		// console.log(req);
		const { code, first_name, password } = req?.body;
		// Create a new User document
		const newUser = new User({
			code,
			first_name,
			password,
			created_date: new Date()
		});

		// Save the user to the database
		const savedUser = await newUser.save();

		return res.status(201).json({
			message: "done"
		}); // Respond with the saved user
	} catch (error) {
		next(error); // Handle any errors that occur during the registration process
	}
}

module.exports = {
	register: register
};
