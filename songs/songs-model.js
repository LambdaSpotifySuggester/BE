const db = require('../data/config');

async function insert(song) {
	const [ id ] = await db('songs').insert(song);
	return findById(id);
}

function findById(id) {
	return db('songs').where({ id }).first();
}

function remove(id) {
	return db('songs').where({ id }).del();
}

module.exports = {
	insert,
	findById
};
