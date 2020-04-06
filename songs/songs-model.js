const db = require('../data/config');

async function insert(song) {
	const [ id ] = await db('songs').insert(song);
	return findById(id);
}

function find() {
	return db('songs').select('id', 'song_name');
}

function findById(id) {
	return db('songs').where({ id }).first();
}

async function getById(id) {
	return await db('songs as s')
		.where('s.id', id)
		.join('artists as a', 's.artist_id', 'a.id')
		.select('s.id', 'a.name as artist_name', 's.name as song_name')
		.first();
}

function remove(id) {
	return db('songs').where({ id }).del();
}

module.exports = {
	insert,
	find,
	findById,
	getById,
	remove
};
