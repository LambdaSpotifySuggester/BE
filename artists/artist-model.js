const db = require('../data/config');

async function insert(artist) {
	const [ id ] = await db('artists').insert(artist);
	return findById(id);
}

function find() {
	return db('artists').select('id', 'name');
}

function findById(id) {
	return db('artists').where({ id }).first();
}

function remove(id) {
	return db('artists').where({ id }).del();
}

function findArtistSongs(artistId) {
	return db('songs as s')
		.join('artists as a', 's.a_id', 'a.id')
		.where({ artist_id: artistId })
		.select('s.id', 's.name', 'a.name');
}

module.exports = {
	insert,
	find,
	findById,
	remove,
	findArtistSongs
};
