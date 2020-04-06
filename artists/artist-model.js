const db = require('../data/config');

async function insert(artist) {
	const [ id ] = await db('artists').insert(artist);
	return findById(id);
}

function find() {
	return db('artists').select('id', 'artist_name');
}

function findById(id) {
	return db('artists').where({ id }).first();
}

function remove(id) {
	return db('artists').where({ id }).del();
}

function findArtistSongs(id) {
	return db('songs as s')
		.join('artists as a', 's.artist_id', 'a.id')
		.where({ artist_id: id })
		.select([ 'a.id', 'a.name as artist_name', 's.name as song_name' ])
		.first();
}

module.exports = {
	insert,
	find,
	findById,
	remove,
	findArtistSongs
};
