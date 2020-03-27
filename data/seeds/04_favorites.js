exports.seed = async function(knex) {
	await knex('favorites').insert([
		{ user_id: 1, song_id: 1 },
		{ user_id: 2, song_id: 3 },
		{ user_id: 3, song_id: 2 }
	]);
};
