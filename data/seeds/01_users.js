exports.seed = async function(knex) {
	await knex('users').insert([
		{ username: 'Terminator', password: '2029' },
		{ username: 'Ace', password: 'detective' },
		{ username: 'test', password: 'abc123' }
	]);
};
