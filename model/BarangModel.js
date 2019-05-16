const db = require('./../db');

const _getAll = (callback) => {

	return db.get('barang', callback);
}

const _getDetail = (id, callback) => {

	// es 6 syntaq, jika 1 object dengan key yg sama, maka tidak perlu { id: id }
	// cukup dengan { id }

	return db.get_where('barang', { id }, callback );
}

const _insertData = (data, callback) => {

	let {
		nama_barang, deskripsi
	} = data;

	return db.insert('barang', { nama_barang, deskripsi }, callback);
}

const _updateData = (data, id, callback) => {

	let {
		nama_barang, deskripsi
	} = data;

	return db.update('barang', { nama_barang, deskripsi }, { id }, callback);
}

const _deleteData = (id, callback) => {

	return db.delete('barang', { id }, callback);
}

module.exports = {
	_getAll, _getDetail, _insertData, _deleteData, _updateData
}