exports.seed = async function(knex) {
	await knex('artists').insert([
		{ artist_name: 'Eminem' },
		{ artist_name: 'Maxwell' },
		{ artist_name: 'Luke Combs' }
	]);
};
