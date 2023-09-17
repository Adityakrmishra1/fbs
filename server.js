'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const routes = require('./src/api/api.routes');


app.use(express.json())
app.use('/api/v1', routes);

// connection to db.

const uri = "mongodb+srv://nopeace:tAddkl35zSi3QmcI@cluster1.cjrcv2x.mongodb.net/?retryWrites=true&w=majority";

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
