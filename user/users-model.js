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
	return db('users as u')
		.insert(id)
		.where('u.id', id)
		.join('favorites as f', 'f.user_id', 'u.id')
		.join('songs as s', 's.id', 'f.song_id')
		.join('artists as a', 's.artist_id', 'a.id')
		.select('u.id', 's.name as song_name', 'a.name as artist_name');
}
function getFavorites(id) {
	return db('users as u')
		.where('u.id', id)
		.join('favorites as f', 'f.user_id', 'u.id')
		.join('songs as s', 's.id', 'f.song_id')
		.join('artists as a', 's.artist_id', 'a.id')
		.select('u.id', 's.name as song_name', 'a.name as artist_name')
		.first();
}

module.exports = {
	add,
	find,
	findBy,
	findById,
	getFavorites,
	addFavorites
};
