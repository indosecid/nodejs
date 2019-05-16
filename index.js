/*
	Author : Brilly4n
*/

const http 	= require('http');
const app 	= require('./app');

http.createServer(app).listen(1999, () => console.log('Server is running on port 1999'));