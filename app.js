const app 	= require('express')();
const cors 	= require('cors');
const bodyParser = require('body-parser');

/* 
	cors configuration
*/
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const BarangController = require('./controller/BarangController');

/*
	Routing
*/
app.use('/barang', BarangController);

app.use((request, response) => {

	response.status(404).json({
		status 	: 404,
		msg		: 'not found'
	})
})

module.exports = app;