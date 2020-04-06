exports.seed = async function(knex) {
	await knex('users').insert([
		{ username: 'Terminator', password: '2029', email: 'T100@skynet.com' },
		{ username: 'Ace', password: 'detective', email: 'tomace@petd.com' },
		{ username: 'oldman', password: 'abc123', email: 'oldie@yahoo.com' }
	]);
};
