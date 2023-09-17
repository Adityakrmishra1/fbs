'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const routes = require('./src/api/api.routes');


app.use(express.json())
app.use('/api/v1', routes);

// connection to db.


let connectToDb = function () {
	mongoose.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	}).then(() => console.log('connected'))
		.catch(e => console.log(e));
};


app.listen(3002, async () => {
	console.log('started the server .. ');
	connectToDb();
})
