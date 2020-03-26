const db = require('../data/config');

async function insert(artist) {
	const [ id ] = await db('artists').insert(artist);
	return findById(id);
}

function findById(id) {
	return db('artists').where({ id }).first();
}

function remove(id) {
	return db('artists').where({ id }).del();
}

module.exports = {
	insert,
	findById
};
