'use strict';

const express = require('express');
const app = express();


app.use(express.json());
app.use('/api/v1');


app.listen(3002, () => {
	console.log("Sccessfully Started the Server at PORT " + 3002);
});