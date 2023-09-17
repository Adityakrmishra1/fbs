'use strict';

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const routes = require('./src/api/api.routes');


app.use(express.json());
app.use('/api/v1', routes);

// connection to db.

const uri = "mongodb+srv://nopeace:tAddkl35zSi3QmcI@cluster1.cjrcv2x.mongodb.net/?retryWrites=true&w=majority";
let connectToDb = async function () {
	await mongoose.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	});

};

app.listen(3002, async () => {
	console.log('started the server .. ');
	await connectToDb;
})
