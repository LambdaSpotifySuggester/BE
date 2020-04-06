const db = require('../data/config');
const bcrypt = require('bcryptjs');

async function add(user) {
	user.password = await bcrypt.hash(user.password, 14);

	const [ id ] = await db('users').insert(user);
	return findById(id);
}

function find() {
	return db('users').select('id', 'username');
}

function findBy(filter) {
	return db('users').select('id', 'username', 'password').where(filter);
}

function findById(id) {
	return db('users').select('id', 'username').where({ id }).first();
}
function addFavorites(id) {
	return db('favorites as f')
		.insert(id)
		.where('f.id', id)
		.join('songs as s', 's.id', 'f.song_id')
		.join('artists as a', 'f.artist_id', 'a.id')
		.select('f.id', ' song_name', 'artist_name');
}
function getAll(id) {
	return db('favorites as f')
		.join('songs as s', 's.id', 'f.song_id')
		.join('artists as a', 'f.artist_id', 'a.id')
		.select('song_name', ' artist_name');
}

module.exports = {
	add,
	find,
	findBy,
	findById,
	getAll,
	addFavorites
};
