
const apiService = require('../api/api.service');

let register = async function (req, res, next) {
	try {
		let result = await apiService.handleRegistrationData(req);
		return res.status(200).json(result);
	} catch (error) {
		console.log('error ' + error);
		return res.status(400).json(error);
	}
}
let login = async function (req, res, next) {
	try {
		let result = await apiService.handleLongin(req);
		return res.status(200).json(result);
	} catch (error) {
		console.log('error ' + error);
		return res.status(400).json(error);
	}
}

module.exports = {
	register: register,
	login: login,
};
