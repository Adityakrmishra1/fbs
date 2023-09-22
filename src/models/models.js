let userModel = require('./User');

const keyToModelMap = {
	'USER': userModel,
}


function getModel(type) {
	if (keyToModelMap[type]) {
		return keyToModelMap[type];
	}
	console.log("model not present");
	return {};
}

module.exports = {
	getModel: getModel,
}