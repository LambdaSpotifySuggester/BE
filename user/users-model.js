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

function getFavorites(id) {
	return db('users as u')
		.where('u.id', id)
		.join('favorites as f', 'f.user_id', 'u.id')
		.join('songs as s', 's.id', 'f.song_id')
		.select('s.*', 'u.id');
}
module.exports = {
	add,
	find,
	findBy,
	findById,
	getFavorites
};
