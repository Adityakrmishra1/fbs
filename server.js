'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
// const cors = require('cors');

const app = express();

dotenv.config();

const PORT = process.env.FBS_PORT;
const DB_CONNECT = process.env.DB_CONNECT;

const routes = require('./src/api/api.routes');

app.use(express.json());
app.use('/api/v1', routes);

// connection to db.


let connectToDb = function () {
	mongoose.connect(DB_CONNECT, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
		.then(() => console.log('connected'))
		.catch(e => console.log("error " + e));
};


app.listen(PORT, async () => {
	console.log('started the server .. ');
	connectToDb();
})
