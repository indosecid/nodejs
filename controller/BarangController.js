const express = require('express');
const Route   = express.Router();

const Model = require('./../model/BarangModel');

/*
	Get Method - Index
*/
Route.get('/', (request, response) => {
	
	Model._getAll((error, rows, field) => {
		if (error) {
			throw error;
			response.status(500).json({
				status: 500, msg: error
			})
		}else{
			response.status(200).json({
				status: 200, data: rows
			})
		}
	})
})

/*
	Get Method - Detail
*/
Route.get('/:id', (request, response) => {
	
	let { id } = request.params;

	Model._getDetail(id, (error, rows, field) => {
		if (error) {
			throw error;
			response.status(500).json({
				status: 500, msg: error
			})
		}else{
			response.status(200).json({
				status: 200, data: rows[0]
			})
		}
	})
})

/*
	Post Method - Insert Data
*/
Route.post('/', (request, response) => {
	
	// berbentuk json
	let body = request.body;

	Model._insertData(body, (error, rows) => {
		if (error) {
			throw error;
			response.status(500).json({
				status: 500, msg: error
			})
		}else{
			response.status(201).json({
				status: 201, msg: 'Berhasil Menambahkan Data'
			})
		}
	})
})

/*
	patch Method - Update Data
*/
Route.patch('/:id', (request, response) => {
	
	// berbentuk json
	let id   = request.params;
	let body = request.body;

	Model._updateData(body, id, (error, rows) => {
		if (error) {
			throw error;
			response.status(500).json({
				status: 500, msg: error
			})
		}else{
			response.status(201).json({
				status: 201, msg: 'Berhasil Mengupdate Data'
			})
		}
	})
})

/*
	Delete Method - Delete Data
*/
Route.delete('/:id', (request, response) => {
	
	let { id } = request.params;

	Model._deleteData(id, (error, rows) => {
		if (error) {
			throw error;
			response.status(500).json({
				status: 500, msg: error
			})
		}else{
			response.status(200).json({
				status: 200, msg: 'Berhasil Manghapus Data'
			})
		}
	})
})

module.exports = Route;