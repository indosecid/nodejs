const QueryBuilder = require('node-querybuilder');

/* configurasi Database */
const settings = {
    host		: 'localhost',
    database	: 'sample',
    user		: 'root',
    password	: ''
};

try {

	const db = new QueryBuilder(settings, 'mysql', 'single');
	module.exports = db;

}catch(e) {

	throw e;
}
